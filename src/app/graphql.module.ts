import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri =
  'https://api.takeshape.io/project/4b8b2586-a2fa-4f21-b0f5-6dcc44894d80/production/graphql';
// only read-only API key
const apiKey = 'ea209dbe6dc24106a374a7f5f1da4dd1';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authHeader = setContext(() => ({
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }));

  const link = ApolloLink.from([authHeader, httpLink.create({ uri })]);
  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
