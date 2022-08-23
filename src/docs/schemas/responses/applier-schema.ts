export const applierSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    }
  },
  required: ['id', 'name'],
};
