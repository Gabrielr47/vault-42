import type { CodegenConfig } from '@graphql-codegen/cli';
import { environment } from './src/environments/environment';

const config: CodegenConfig = {
  schema: environment.graphqlApiUrl,
  headers: {
    Authorization: 'Bearer ' + environment.graphqlApi,
  },
  documents: './src/**/*.ts',
  generates: {
    'src/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations'],
      config: { withHooks: true },
    },
  },
} as CodegenConfig;
export default config;
