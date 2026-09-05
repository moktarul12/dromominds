export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page Reference',
      type: 'string',
      description: 'Which page is this hero for (e.g., Home, About)',
    },
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    },
    {
      name: 'heading1',
      title: 'Heading Part 1',
      type: 'string',
    },
    {
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
    },
    {
      name: 'heading2',
      title: 'Heading Part 2',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    },
    {
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
    }
  ],
}
