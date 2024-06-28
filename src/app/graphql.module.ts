import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { environment } from '../environments/environment';
import { ToastController } from '@ionic/angular';

const uri = environment.graphqlApiUrl;
const apiKey = environment.graphqlApi;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  let resultMessage = '';

  if (graphQLErrors)
    graphQLErrors.map(
      ({ message }) =>
        (resultMessage += `[GraphQL error]: Message: ${message}`),
    );

  if (networkError) {
    resultMessage += `[Network error]: ${networkError.message}`;
  }

  if (!resultMessage) {
    return;
  }

  const toast = new ToastController();
  toast
    .create({
      message: resultMessage,
      duration: 5000,
    })
    .then((toast) => toast.present());
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authHeader = setContext(() => ({
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }));

  const link = ApolloLink.from([authHeader, httpLink.create({ uri })]);
  return {
    link: errorLink.concat(link),
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
