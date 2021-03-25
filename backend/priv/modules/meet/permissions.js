import Permissions from "../permissions.js";

/**
 * @typedef {object} PermissionsFields
 * @property {boolean} isMaster
 * @property {boolean} canManageUsers
 * @property {boolean} canEditDetails
 */

export class MeetPermission extends Permissions {
  /**
   * @param {string} permissionName
   * @param {PermissionsFields} perms
   */
  constructor(meetId, permissionName, perms = {}) {
    super(meetId, permissionName, perms);
    this.canManageUsers = perms.canManageUsers ?? false;
    this.canEditDetails = perms.canEditDetails ?? false;
  }
  static  createOwnerTemplate = (meetId) =>
    new MeetPermission(meetId, `owner`, {
      isMaster: true,
      isPersonel: true,
      canManageUsers: true,
      canEditDetails:true,
    });

 static createStudentTemplate = (meetId) => new MeetPermission(meetId, `student`);
}

export class MeetUserPermission extends MeetPermission {
  /**
   * @param {string} userId
   * @param {string} permissionName
   * @param {PermissionsFields} perms
   */
  constructor(userId, meetId, permissionName, perms) {
    super(meetId, permissionName, perms);

    this.userId = userId;
  }

 static createOwnerPerms = (userId, meetId) =>
    new MeetUserPermission(userId, meetId, `owner`, {
      isMaster: true,
      isPersonel: true,
      canManageUsers: true,
      canEditDetails:true,
    });

 static createStudentPerms = (userId, meetId) =>
    new MeetUserPermission(userId, meetId, `student`);
}