import { number, object, string } from 'yup';

export const filterSchema = object({
  brand: string().trim(),
  price: number().min(0),
  mileageFrom: number().min(0),
  mileageTo: number().min(0),
});
