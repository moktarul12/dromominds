export default {
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'authorType',
      title: 'Author Type',
      type: 'string',
      options: {
        list: [
          { title: 'Guests', value: 'Guests' },
          { title: 'Members', value: 'Members' },
          { title: 'Consultant', value: 'Consultant' }
        ],
        layout: 'radio'
      }
    }
  ],
}
