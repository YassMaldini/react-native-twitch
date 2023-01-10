import * as yup from 'yup';
import { TypedSchema } from 'yup/lib/util/types';

export type RemoveIndex<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P];
};

export type TypeFromYupSchema<YupSchemaGetter extends (...params: any) => TypedSchema> =
  RemoveIndex<yup.TypeOf<ReturnType<YupSchemaGetter>>>;

export type ValidTypeFromYupSchema<YupSchemaGetter extends (...params: any) => TypedSchema> =
  RemoveIndex<yup.InferType<ReturnType<YupSchemaGetter>>>;
