import { useSearchParams } from 'next/navigation';
import { createUseCustomSearchParams } from '@repo/ui/hooks/useCustomSearchParams';

export const useCustomSearchParams = createUseCustomSearchParams(() => {
  return useSearchParams();
});