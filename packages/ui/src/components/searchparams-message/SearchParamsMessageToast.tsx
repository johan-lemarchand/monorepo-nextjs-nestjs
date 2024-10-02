import { logger } from "@repo/ui/lib/logger";
import { Suspense, useEffect } from "react";
import { toast } from "sonner";
import { SearchParamsType } from "@repo/ui/hooks/useCustomSearchParams";
import {
  deleteSearchParamsMessageUrl,
  SearchParamsMessageKeys,
} from "./createSearchParamsMessageUrl";

type SearchParamsMessageToastProps = {
  useCustomSearchParams: () => SearchParamsType;
};

const SearchParamsMessageToast = ({ useCustomSearchParams }: SearchParamsMessageToastProps) => {
  const searchParams = useCustomSearchParams();

  useEffect(() => {
    let toastId: string | number | null = null;

    if (searchParams.get(SearchParamsMessageKeys.message)) {
      toastId = toast(
        searchParams.get(SearchParamsMessageKeys.message) as string,
      );
    }
    if (searchParams.get(SearchParamsMessageKeys.success)) {
      toastId = toast.success(
        searchParams.get(SearchParamsMessageKeys.success) as string,
      );
    }
    if (searchParams.get(SearchParamsMessageKeys.error)) {
      toastId = toast.error(
        searchParams.get(SearchParamsMessageKeys.error) as string,
      );
    }

    deleteSearchParamsMessageUrl();
    return () => {
      if (toastId) {
        logger.debug("Clear toast", toastId);
        toast.dismiss(toastId);
      }
    };
  }, [searchParams]);
  return null;
};

export const SearchParamsMessageToastSuspended = ({ useCustomSearchParams }: SearchParamsMessageToastProps) => {
  return (
    <Suspense fallback={null}>
      <SearchParamsMessageToast useCustomSearchParams={useCustomSearchParams} />
    </Suspense>
  );
};
