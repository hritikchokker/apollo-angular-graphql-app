import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS, NamedOptions } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';

const uri = 'https://48p1r2roz4.sse.codesandbox.io'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): NamedOptions {
  return {
    defaultType: {
      link: httpLink.create({ uri }),
      cache: new InMemoryCache(),
    },
    newClientName: {
      // <-- this settings will be saved by name: newClientName
      cache: new InMemoryCache(),
      link: httpLink.create({
        uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql',
      }),
    },
  };
}

@NgModule({
  providers: [
    {
      // provide: APOLLO_OPTIONS,
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
