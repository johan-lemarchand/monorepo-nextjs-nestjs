import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { IconProps } from "@repo/ui/types/iconProps";

// ===============================================================
interface ServiceCardProps {
  title: string | ReactNode;
  linkType: string;
  description: string | ReactNode;
  learnMore: string | ReactNode;
  cardClassName?: string;
  iconClassName?: string;
  // eslint-disable-next-line no-unused-vars
  Icon: (props: IconProps) => JSX.Element;
}
// ===============================================================

export default function ServiceCard({
  title,
  Icon,
  linkType,
  description,
  learnMore,
  cardClassName,
  iconClassName,
}: ServiceCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg ${cardClassName || ''}`}>
      <div className="flex flex-col items-center p-6">
        <div className={`bg- mb-4 flex size-20 items-center justify-center rounded-full${linkType}-100 ${iconClassName || ''}`}>
          <Icon className={`text- size-12${linkType}-500`} />
        </div>
        <div className="mb-2 text-center text-xl font-semibold">
          {typeof title === 'string' ? title : title}
        </div>
        <div className="mb-4 text-center text-sm text-gray-600">
          {typeof description === 'string' ? (
            <>
              <p>{description.split("<br/>")[0]}</p>
              <p>{description.split("<br/>")[1]}</p>
            </>
          ) : (
            description
          )}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className={`text-${linkType}-500 hover:text-${linkType}-600 text-sm font-medium`}>
              En savoir plus
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                {typeof title === 'string' ? title : title}
              </DialogTitle>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <DialogDescription asChild>
                  {typeof learnMore === 'string' ? (
                    <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: learnMore }} />
                  ) : (
                    <div className="text-sm text-gray-500">{learnMore}</div>
                  )}
                </DialogDescription>
              </ScrollArea>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
