import { Header } from "@/features/layouts/Header";
import { Page404 } from "@repo/ui/components/page/Page404";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <Page404 />
      </div>
    </div>
  );
}
