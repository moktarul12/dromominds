export default {
  name: 'whitepaper',
  title: 'Whitepaper',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'type',
      title: 'Type (e.g., Template, Framework, Case Study)',
      type: 'string',
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
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
