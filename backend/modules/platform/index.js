import Module from "../module.js";
import Permissions, { ConnectorPlatformPermissionToUser, PlatformPermissions } from "./permissions.js";

import { ANSWERS, MAX_PLATFORM_NUMBER } from "./consts.js";
import * as middlewares from "./middlewares.js";

/** @typedef {import('express').Express} Express */
/** @typedef {import('express').Request} Request */
/** @typedef {import('express').Response} Response */
/** @typedef {import('express').NextFunction} NextFunction */

/**
 * @typedef {object} MiddlewareParameters
 * @property {UserRequest} req
 * @property {Response} res
 * @property {NextFunction} next
 * @property {PlatformModule} mod
 */

export default class PlatformModule extends Module {
  static requiredModules = [`UserModule`];
  static additionalModules = [`GroupModule`];

  subcollections = {
    newTemplatePermissions:`newPermissionsTemplates`,
    newUserPermissions:`newPermissionsUsers`,
    templatesPerm: `permissions`,
    userPermissions: `permissions.users`,
  };

  getApi() {
    /** @type {import("../user/index.js").default} */
    const userModule = this.requiredModules.userModule;
    const auth = userModule.auth;
    const m = middlewares;

    return { platforms: {
      get: auth(this.runMid(m.httpGetUserPlatforms)),
      post: auth(this.runMid(m.httpCreatePlatform)),

      ":platformId": {
        delete: auth(this.perms(this.runMid(m.httpDeletePlatform))),

        "users": {
          get: auth(this.runMid(m.httpGetUsersOfPlatform)),
          post: auth(this.perms(this.runMid(m.httpCreateNewUser))),

          ":userId": {
            delete: auth(this.perms(this.runMid(m.httpDeleteUserFromPlatform))),
          },
        },

        "newpermissions": {
          get: auth(this.runMid(m.httpGetNewPlatformsPermissions)),
          post: auth(this.runMid(m.httpCreatePlatformsPermissions)),
        },

        "permissions": {
          get: auth(this.runMid(m.httpGetPlatformsPermissions)),
          // post: auth(this.runMid(m.httpCreatePlatformsPermissions)),

          "my": {
            get: auth(this.runMid(m.httpHandleMyPermission)),
          },
          ":permissionId": {
            delete: auth(this.perms(this.runMid(m.httpDeletePlatformPermission))), // TODO this.httpDeletePlatformPermission
            put: auth(this.runMid(m.httpEditPlatformPermission)), // TODO this.httpEditPlatformPermission
          },
        },
      },

      "permissiontemplate": {
        get: m.httpGetBasePlatformPermisionTemplate,
      },


    } }

    /*
    new Map([
      [
        `platforms`,
        {
          get: auth(this.runMid(m.httpGetUserPlatforms)),
          post: auth(this.runMid(m.httpCreatePlatform)),
        },
      ],

      [
        `/platforms/:platformId/users`,
        {
          get: auth(this.runMid(m.httpGetUsersOfPlatform)),
          post: auth(this.perms(this.runMid(m.httpCreateNewUser))),
        },
      ],

      [
        `/platforms/:platformId/users/:userId`,
        {
          delete: auth(this.perms(this.runMid(m.httpDeleteUserFromPlatform))),
        },
      ],

      [
        `/platforms/:platformId`,
        {
          delete: auth(this.perms(this.runMid(m.httpDeletePlatform))),
        },
      ],
      [
        `/platforms/permissiontemplate`,
        {
         get: m.httpGetBasePlatformPermisionTemplate,
        },
      ],
      [
        `/platforms/:platformId/newpermissions`,
        {
          get: auth(this.runMid(m.httpGetNewPlatformsPermissions)),
          post: auth(this.runMid(m.httpCreatePlatformsPermissions)),
          put: auth(this.runMid(m.httpUpdatePlatformsPermissions))
        },
      ],

      [
        `/platforms/:platformId/permissions`,
        {
          get: auth(this.runMid(m.httpGetPlatformsPermissions)),
          // post: auth(this.runMid(m.httpCreatePlatformsPermissions)),
        },
      ],

      [
        `/platforms/:platformId/permissions/my`,
        {
          get: auth(this.runMid(m.httpHandleMyPermission)),
        },
      ],

      [
        `/platforms/:platformId/permissions/:permissionId`,
        {
          delete: auth(this.perms(this.runMid(m.httpDeletePlatformPermission))), // TODO this.httpDeletePlatformPermission
          put: auth(this.runMid(m.httpEditPlatformPermission)), // TODO this.httpEditPlatformPermission
        },
      ],
    ]);
    */
  }

  httpDeletePlatformPermission = async ({ req, res }) => {
    // can manage roles.
    const { platformId, permissionId } = req.params;
    const client = req.user;

    if (!client.platformPerms.isMaster)
      return res.status(400).json({ code: 234, error: "" }); // TODO: startpoint
  };

  /**
   * @param {(req:Request res:Response next:NextFunction) => void} cb
   * @return {(req:Request res:Response next:NextFunction) => void|Response }
   */
  perms = (cb) => async (req, res, next) => {
    const platformId =
      req.query.platformId || req.params.platformId || req.body.platformId;

    if (!(await this.includePermsIntoReq(req, res, platformId)))
      cb(req, res, next);
  };

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {string} platformId
   */
  async includePermsIntoReq(req, res, platformId) {
    if (!platformId)
      return res.status(400).json(ANSWERS.PLATFORM_PERMS_PE_ID_MISS);

    let newPerms = await this.dbManager.aggregate(
      this.subcollections.newUserPermissions,
     { pipeline: [ {
        $match: {
          $and: [
            {
              userId: {
                $eq: req.user.id
              }
            }, {
              platformId: {
                $eq: platformId
              }
            }
          ]
        }
      }, {
        $lookup: {
          from: this.subcollections.newTemplatePermissions,
          localField: `permissionId`,
          foreignField: `id`,
          as: `perms`
        }
      }, {
        $unwind: {
          path: `$perms`
        }
      }]}
    ).toArray()
    newPerms = newPerms[0]

    const perms = await this.dbManager.findOne(
      this.subcollections.userPermissions,
      {
        $and: [
          { userId: { $eq: req.user.id } },
          { referenceId: { $eq: platformId } },
        ],
      }
    );

    if(!newPerms)
    {
      const platformMember = await this.checkUserAssigned(req.user.id, platformId);

      if (!platformMember)
        return res.status(400).json(ANSWERS.PLATFORM_PERMS_NOT_MEMBER);

      const inDbPermission = await this.getNewPermission(`Student`,platformId)
      req.user.platformPerms = inDbPermission
      req.user.platformPerms.platformId = platformId;
      const connector = new ConnectorPlatformPermissionToUser(platformId,req.user.id,inDbPermission.id)
      await this.saveConnectorPermsToUser(connector)
    } else {
      req.user.newPlatformPerms = newPerms
    }

    if (!perms) {
      const platformMember = this.checkUserAssigned(req.user.id, platformId);

      if (!platformMember)
        return res.status(400).json(ANSWERS.PLATFORM_PERMS_NOT_MEMBER);

      const permissions = new Permissions(platformId, `student`).getProxy();

      req.user.platformPerms = permissions;
      req.user.platformPerms.platformId = platformId;

      await this.dbManager.insertObject(
        this.subcollections.userPermissions,
        permissions
      );
    } else {
      req.user.platformPerms = new Permissions(
        platformId,
        perms.name,
        perms
      ).getProxy();
    }
    //console.log({old:req.user.platformPerms.target,new:req.user.newPlatformPerms})
  }

  /** @param {import("socket.io").Socket} socket */
  socketConfigurator(socket) {
    socket.on(`api.get.platforms`, () => {});
    socket.on(`api.post.platforms`, () => {});
    socket.on(`api.get.platforms.users`, () => {});
    socket.on(`api.delete.platforms.users`, () => {});
  }

  getMyPermission = (userObj, platfromId) => {
    const userAssigned = this.checkUserAssigned(userObj.id, platfromId);
    if (!userAssigned) return null;

    return this.dbManager.findOne(this.subcollections.userPermissions, {
      userId: { $eq: userObj.id },
      referenceId: { $eq: platfromId },
    });
  };

  async deletePlatformCascade(platformId) {
    // co jesli 1 konto jest przypisane do wielu platform.
    let platform = await this.getPlatform(platformId);

    this.dbManager.find(this.basecollectionName, { id: { $eq: platformId } });

    platform = await this.dbManager.findOneAndDelete(this.basecollectionName, {
      id: { $eq: platformId },
    });

    if (!platform) throw new Error("Drop Platform cascade has been refused.");

    console.log({ platform });
    const query = { platformId: { $eq: platformId } };
    const deleteUsersTask = this.dbManager.deleteMany(`userModule`, {
      id: { $in: platform.membersIds },
    });
    const deleteMeetingsTask = this.dbManager.deleteMany(`meetModule`, query);
    const deleteGroupsTask = this.dbManager.deleteMany(`groupModule`, query);
    const deleteNotesTask = this.dbManager.deleteMany(`groupModule.notes`, {
      groupId: { $in: platform.assignedGroups },
    });
    const deletePermissions = this.dbManager.deleteMany(
      this.subcollections.userPermissions,
      query
    );

    return Promise.all([
      deleteUsersTask,
      deleteMeetingsTask,
      deleteGroupsTask,
      deleteNotesTask,
      deletePermissions,
    ]);
  }

  getPermission = (permissionName, platformId) => {
    return this.dbManager.findOne(this.subcollections.templatesPerm, {
      $and: [
        { referenceId: { $eq: platformId } },
        { name: { $eq: permissionName } },
      ],
    });
  };

  platformExist = (id) => {
    return this.dbManager.findObject(this.basecollectionName, {
      id: { $eq: id },
    });
    // return this.dbManager.findObject(`platforms`, { id: { $eq: id } })
  };

  createBaseRoles = (
    platformId,
    student = true,
    lecturer = true,
    owner = true
  ) => {
    const basePerms = [];

    if (student)
      basePerms.push(
        new Permissions(platformId, `student`, { canTeach: true })
      );
    if (lecturer)
      basePerms.push(
        new Permissions(platformId, `lecturer`, {
          isPersonel: true,
          canTeach: true,
        })
      );
    if (owner)
      basePerms.push(new Permissions(platformId, `owner`, { isMaster: true }));

    return this.dbManager.insetMany(
      this.subcollections.templatesPerm,
      basePerms
    );
  };

  createNewBaseRoles = ( platformId ) =>
  {
    return [
        PlatformPermissions.getLecturerPermissions(platformId),
        PlatformPermissions.getOwnerPermissions(platformId),
        PlatformPermissions.getStudentPermissions(platformId)
      ]
  }


  getAllUserPlatforms(userId) {
    return this.dbManager.findManyObjects(this.basecollectionName, {
      membersIds: { $eq: userId },
    });
  }

  canCreatePlatform = async (userId) => {
    const countPlatforms = await this.dbManager
      .findManyObjects(this.basecollectionName, { "owner.id": { $eq: userId } })
      .then(cursor => cursor.length);
    return countPlatforms < MAX_PLATFORM_NUMBER;
  };

  getAllPlatformsInDb() {
    return this.dbManager.getCollection(this.basecollectionName);
    // return this.dbManager.getCollection(this.collectionName)
  }

  async getAllUsersInPlatform(platformId) {
    const platforms = await this.getPlatform(platformId);
    return platforms.membersIds;
  }

  savePlatform = (platform) => {
    return this.dbManager.insertObject(this.basecollectionName, platform);
    //this.dbManager.insertObject(`platforms`, platform)
  };

  updatePlatform = (findSchema, newValues) =>
    this.dbManager.updateObject(this.basecollectionName, findSchema, newValues);

  saveTemplatePermission = (permisionObj) => {
    // TODO: Make use of it.
    this.dbManager.insertObject(
      this.subcollections.templatesPerm,
      permisionObj
    );
  };

  saveUserPermission = (permissionObj) => {
    return this.dbManager.insertObject(
      this.subcollections.userPermissions,
      permissionObj
    );
  };

  getPlatform = (platformId) => {
    return this.dbManager.findOne(this.basecollectionName, {
      id: { $eq: platformId },
    });
  };

  async checkIsOwner(userId, platformId) {
    const result = await this.dbManager.findOne(this.basecollectionName, {
      $and: [{ id: { $eq: platformId } }, { "owner.id": { $eq: userId } }],
    });

    return !!result;
  }

  isUserAssigned(userId, platformObj) {
    const userList = platformObj.membersIds;
    return userList.some((id) => id === userId);
  }

  isPlatformOwner = (userId, platformObj) => userId === platformObj.owner.id;

  getPlatformByGroupId = (groupId) =>
    this.dbManager.findOne(this.basecollectionName, {
      assignedGroups: groupId,
    });

  updatePlatformPermissions = (findShema, newValues) =>
    this.dbManager.findOneAndUpdate(
      this.subcollections.userPermissions,
      findShema,
      newValues
    );

  async checkUserOwner(userId, platformId) {
    const platform = await this.getPlatform(platformId);
    return platform.owner.id === userId;
  }

  async checkUserAssigned(userId, platformId) {
    const platform = await this.getPlatform(platformId); // w platformach sa id userow
    if (!platform) return false;

    return platform.membersIds.some((id) => id === userId);
  }

  getPlatfromByName=(name)=>
  this.dbManager.findOne(this.basecollectionName,{name:{$eq:name}})

  getAllTemplatePerms = (platformId) =>
    this.dbManager.findManyObjects(this.subcollections.templatesPerm, {
      referenceId: { $eq: platformId },
    });

  getNewAllTemplatePerms = (platformId) =>
    this.dbManager.findManyObjects(this.subcollections.newTemplatePermissions, {
      platformId: { $eq: platformId },
  });

  getPermissions = (platformId, userId) =>
    this.dbManager.findOne(this.subcollections.userPermissions, {
      $and: [{ referenceId: platformId }, { userId: userId }],
    });

  getNewPermission = (permissionName, platformId) => {
    return this.dbManager.findOne(this.subcollections.newTemplatePermissions, {
      $and: [
        { platformId: { $eq: platformId } },
        { name: { $eq: permissionName } },
      ],
    });
  };

  updatePlatformPermission = (platformId, permName,update) =>
    this.dbManager.findOneAndUpdate(this.subcollections.newTemplatePermissions,
      {$and:[
        {platformId:{$eq:platformId}},
        {name:{$eq:permName}}
      ]},
      {$set:update},
      { returnOriginal: false }
    )

  saveNewPermissions = (obj)=>
  this.dbManager.insertObject(this.subcollections.newTemplatePermissions, obj)


  saveConnectorPermsToUser =(obj)=>
    this.dbManager.insertObject(this.subcollections.newUserPermissions, obj)

  toString = () => this.constructor.toString();
  static toString = () => "PlatformModule";
}
