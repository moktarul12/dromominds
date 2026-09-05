import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Dromominds Studio',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "vvop3ax4",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
