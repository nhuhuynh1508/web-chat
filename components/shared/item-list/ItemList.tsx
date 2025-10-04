import React from "react";
import { Card } from "@/components/ui/card";

type Props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode;
}>;

export default function ItemList({ title, action, children }: Props) {
  return (
    <Card className="w-full h-full lg:flex-npne lg:w-80 p-2">
        <div className="mb-4 flex items-center justify-between">
            <h1>{title}</h1>
            {action ? action : null}
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            {children}
        </div>
    </Card>
  );
}