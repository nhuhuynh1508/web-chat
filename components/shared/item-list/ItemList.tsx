"use client";

import React, { use, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useConversation } from "@/hooks/useConversation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

type Props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode;
}>;

export default function ItemList({ title, action, children }: Props) {
    const {isActive} = useConversation();
    const router = useRouter();
    const [newConversationID, setNewConversationID] = useState(0);

    const handleCreateConversation = async () => {
        try {
            const nextConversationID = newConversationID + 1;
            setNewConversationID(nextConversationID);

            // Navigate to the new conversation page
            router.push(`/conversations/${nextConversationID}`);
        } catch (error) {
        console.error("Failed to create conversation:", error);
        }
    };

    return (
        // cn to merge classes conditionally
        // the card is shown on mobile/small screens when active is false and vice versa
        <Card className={cn("hidden w-full h-full lg:flex-none lg:w-80 p-2", {
            "block": !isActive,
            "lg:block": isActive
        })}>
        <div className="mb-4 flex items-center justify-between">
            <h1 className="font-bold text-xl">{title}</h1>
            {action ? action : null}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" className="border border-black/20 cursor-pointer" onClick={handleCreateConversation}>
                        <Plus />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add new conversation</p>
                </TooltipContent>
            </Tooltip>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            {children}
        </div>
    </Card>
  );
}