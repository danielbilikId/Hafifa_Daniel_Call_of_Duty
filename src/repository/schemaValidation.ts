import * as z from 'zod';

const soldierSchema = z.object({
  _id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a number string',
  }).regex(/^\d+$/).transform(Number),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(1),
  rank: z.string({
    required_error: 'rank is required',
    invalid_type_error: 'rank must be a string',
  }).min(1),
  limitations: z.array(z.string({
    required_error: 'limitations is required',
    invalid_type_error: 'limitations must be a string array',
  })),
});

export default soldierSchema;
