export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'favicon',
      title: 'Favicon Image',
      type: 'image',
      description: 'Upload a favicon image (recommended size: 32x32 or 64x64)',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'netherlandsOfficeAddress',
      title: 'Netherlands Office Address',
      type: 'text',
    },
    {
      name: 'netherlandsOfficePhone',
      title: 'Netherlands Office Phone',
      type: 'string',
    },
    {
      name: 'bengaluruOfficeAddress',
      title: 'Bengaluru Office Address',
      type: 'text',
    },
    {
      name: 'kolkataOfficeAddress',
      title: 'Kolkata Office Address',
      type: 'text',
    },
    {
      name: 'indiaOfficeAddress',
      title: 'India Office Address',
      type: 'text',
    },
    {
      name: 'indiaOfficePhone',
      title: 'India Office Phone',
      type: 'string',
    },
    {
      name: 'contactFormTitle',
      title: 'Contact Form Title',
      type: 'string',
    },
    {
      name: 'contactFormSubtitle',
      title: 'Contact Form Subtitle',
      type: 'text',
    },
    {
      name: 'testimonialsTitle',
      title: 'Testimonials Section Title',
      type: 'string',
    },
    {
      name: 'testimonialsSubtitle',
      title: 'Testimonials Section Subtitle',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }
  ],
}
