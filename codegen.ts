import type { CodegenConfig } from '@graphql-codegen/cli';
import { environment } from './src/environments/environment';

const config: CodegenConfig = {
  schema: environment.graphqlApiUrl,
  headers: {
    Authorization: 'Bearer ' + environment.graphqlApi,
  },
  documents: './src/**/*.ts',
  generates: {
    './src/app/graphql.generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
  },
} as CodegenConfig;
export default config;
