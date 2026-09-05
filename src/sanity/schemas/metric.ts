export default {
  name: 'metric',
  title: 'Metric',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'E.g., "500+", "0", "40+"',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'E.g., "Systems Validated"',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }
  ],
}
