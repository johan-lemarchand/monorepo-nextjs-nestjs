import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { LoadingButton } from "@repo/ui/components/SubmitButton";
import { getServerUrl } from "@/lib/server-url";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { SiteConfig } from "@/site-config";

const FormSchema = z.object({
  email: z.string(),
});

export const MagicLinkForm = () => {
  const form = useZodForm({
    schema: FormSchema,
  });
  const searchParams = useSearchParams();
  const mutation = useMutation({
    mutationFn: async (email: string) => {
      await signIn("resend", {
        callbackUrl: searchParams.get("callbackUrl") ?? `${getServerUrl()}/`,
        redirect: true,
        email,
        siteInfo: {
          title: SiteConfig.title,
          email: SiteConfig.email.contact,
          maker: SiteConfig.maker.name,
        },
      });
    },
  });

  return (
    <>
      <Form
        form={form}
        onSubmit={async (values) => {
          await mutation.mutateAsync(values.email);
        }}
        className="flex w-full items-center gap-2"
      >
        <FormField
          control={form.control}
          name="email"
          defaultValue={searchParams.get("email")?.replace(" ", "+") ?? ""}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl className="w-full">
                <Input className="w-full" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton loading={mutation.isPending} type="submit" size="sm">
          Connexion
        </LoadingButton>
      </Form>
    </>
  );
};
