import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql"
// import { userModule, UserType } from "./models.js";
import mongoose from "mongoose"
import { processArgs } from "../graphql.js"


const clear = obj => Object.fromEntries( Object.entries( obj ).filter( ([ _, v ]) => v != null ) )


export default ({ UserModel, UserType }, { isMailValid }) => ({
  /** @type {import("graphql").GraphQLFieldConfigMap} */
  queryObj: {

    user: {
      type: UserType,
      args: processArgs({
        id: GraphQLID,
        name: GraphQLString,
        surname: GraphQLString,
      }),
      resolve( parent, args ) {
        if (mongoose.Types.ObjectId.isValid( args.id ))
          return UserModel.findById( args.id )
        if (args.name && args.surname)
          return UserModel.find({ name:args.name, surname:args.surname })
        return ``
      },
    },

    users: {
      type: GraphQLList( UserType ),
      args: {},
      resolve: () => UserModel.find({}),
    },

  },

  /** @type {import("graphql").GraphQLFieldConfigMap} */
  mutationObj: {

    updateUser: {
      type: UserType,
      args: processArgs({
        id: GraphQLNonNull( GraphQLID ),
        name: GraphQLString,
        surname: GraphQLString,
        login: GraphQLString,
        password: GraphQLString,
        email: GraphQLString,
        activated: GraphQLBoolean,
        avatar: {
          defaultValue: `/media/image/avatarDefault.jpg`,
          type: GraphQLString,
        },
      }),
      resolve( parent, args ) {
        const userId = args.id
        delete args.id
        return UserModel.findOneAndUpdate( { _id:userId }, args, { new:true } )
      },
    },

    addUser: {
      type: UserType,
      args: processArgs({
        name: GraphQLNonNull( GraphQLString ),
        surname: GraphQLNonNull( GraphQLString ),
        login: GraphQLNonNull( GraphQLString ),
        password: GraphQLNonNull( GraphQLString ),
        email: GraphQLNonNull( GraphQLString ),
        activated: {
          defaultValue: false,
          type: GraphQLBoolean,
        },
        avatar: {
          defaultValue: `/media/image/avatarDefault.jpg`,
          type: GraphQLString,
        },
        createdDatetime: {
          defaultValue: Date.now().valueOf(),
          type: GraphQLInt,
        },
      }),
      resolve( parent, args ) {
        // console.log({ parent, args });
        let user = new UserModel({
          name: args.name,
          surname: args.surname,
          login: args.login,
          password: args.password,
          activated: args.activated,
          email: args.email,
          avatar: args.avatar,
          createdDatetime: args.createdDatetime,
        })
        // console.log(user)
        return user.save()
      },
    },

    deleteUser: {
      type: UserType,
      args: processArgs({
        id: GraphQLNonNull( GraphQLID ),
      }),
      resolve( parent, args ) {
        if (!mongoose.isValidObjectId( args.id )) return `Bad request.`
        return UserModel.findOneAndDelete({ _id:args.id })
      },
    },

  },
})