export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
    },
    {
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
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
