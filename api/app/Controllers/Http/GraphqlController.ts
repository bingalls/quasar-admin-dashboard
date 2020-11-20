import resolvers from 'App/data/resolvers'
import Response from '@ioc:Adonis/Core/Response'
import typeDefs from 'App/data/schema'

const { graphqlAdonis } = require('apollo-server-adonis')
const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Argument of type 'ResponseConstructorContract' is not assignable to parameter of type 'RouteHandler'.
//   Type 'ResponseConstructorContract' is not assignable to type '(ctx: HttpContextContract) => Promise<any>'.
//     Type 'ResponseConstructorContract' provides no match for the signature '(ctx: HttpContextContract): Promise<any>'


export default class GraphqlController {

  public static post (): typeof Response {
    return graphqlAdonis({
      schema: schema,
    })
  }
}
