interface UseMergedStatesFromFetchersOptions {
  loadings?: boolean[];
  errors?: (Error | null)[];
}

interface UseMergedStatesFromFetchersResult {
  isLoading: boolean;
  error: Error | null;
}

export type UseMergedStatesFromFetchers = (
  options: UseMergedStatesFromFetchersOptions
) => UseMergedStatesFromFetchersResult;
