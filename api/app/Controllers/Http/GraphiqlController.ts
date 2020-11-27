// import Response from '@ioc:Adonis/Core/Response'
const { graphiqlAdonis } = require('apollo-server-adonis')

export default class GraphiqlController {
  public static get (): any {
    return graphiqlAdonis({
      endpointURL: '/graphql',
    })
  }
}
