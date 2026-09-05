export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Used on the homepage cards',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'icon',
      title: 'Hero Icon (Lucide)',
      type: 'string',
      description: 'Name of the Lucide icon to use (e.g., Activity, ShieldCheck)',
    },
    {
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }
  ],
}
