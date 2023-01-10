import * as yup from 'yup';

export const getSearchInputSchema = () =>
  yup.object().shape({
    search: yup
      .string()
      .required(),
  });