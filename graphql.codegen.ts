import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://0.0.0.0:1337/graphql',
  documents: ['graphql/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  // watch: true,
  generates: {
    './generated/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config