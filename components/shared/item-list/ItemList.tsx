"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/useNavigation";
import { useConversation } from "@/hooks/useConversation";

type Props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode;
}>;

export default function ItemList({ title, action, children }: Props) {
    const {isActive} = useConversation();
    return (
        // cn to merge classes conditionally
        // the card is shown on mobile/small screens when active is false and vice versa
    <Card className={cn("hidden w-full h-full lg:flex-none lg:w-80 p-2", {
        "block": !isActive,
        "lg:block": isActive
    })}>
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