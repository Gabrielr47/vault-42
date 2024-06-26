import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environments/environment';

const uri = environment.graphqlApiUrl;
const apiKey = environment.graphqlApi;

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
