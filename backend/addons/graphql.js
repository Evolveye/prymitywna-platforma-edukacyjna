import { GraphQLScalarType, Kind } from "graphql"

export const GraphQLTypeDate = new GraphQLScalarType({
  name: `Date`,
  description: `Date custom scalar type`,
  serialize: value => value,
  parseValue: value => new Date(value),
  parseLiteral: ast => ast.kind === Kind.INT ? parseInt( ast.value, 10 ) : null,
})
