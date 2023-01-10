import { useMemo } from 'react';

import { UseMergedStatesFromFetchers } from './useMergedStatesFromFetchers.types';

export const useMergedStatesFromFetchers: UseMergedStatesFromFetchers = ({ loadings, errors }) => {
  const stringifiedLoadings = useMemo(() => loadings?.toString(), [loadings]);
  const stringifiedErrors = useMemo(() => errors?.toString(), [errors]);

  return useMemo(
    () => ({
      isLoading: Boolean(loadings?.includes(true)),
      error: errors?.find((error) => Boolean(error?.message)) || null,
    }),
    // eslint-disable-next-line
    [stringifiedLoadings, stringifiedErrors]
  );
};
