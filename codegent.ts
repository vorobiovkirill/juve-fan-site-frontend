
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://0.0.0.0:1337/graphql",
  documents: "graphql/**/*.{gql,graphql}",
  generates: {
    "generated/types-and-hooks.tsx": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    },

  }
};

export default config;
