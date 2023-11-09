import { defineConfig } from '@sanity/pkg-utils'

export default defineConfig({
  minify: !!process.env.GITHUB_ACTIONS,
  extract: {
    bundledPackages: ['channels', 'visual-editing-helpers'],
    rules: {
      'ae-forgotten-export': 'warn',
      'ae-incompatible-release-tags': 'warn',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'warn',
    },
  },
  tsconfig: 'tsconfig.build.json',
})
