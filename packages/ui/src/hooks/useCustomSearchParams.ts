export type SearchParamsType = {
    get: (key: string) => string | null;
  };
  
  export interface UseCustomSearchParamsHook {
    (): SearchParamsType;
  }
  
  export const createUseCustomSearchParams = (
    useSearchParamsImpl: UseCustomSearchParamsHook
  ): UseCustomSearchParamsHook => {
    return useSearchParamsImpl;
  };
  
  export const useCustomSearchParams: UseCustomSearchParamsHook = () => {
    throw new Error('useCustomSearchParams must be implemented in the app');
  };
