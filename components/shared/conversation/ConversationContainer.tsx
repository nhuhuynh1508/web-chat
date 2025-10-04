import { Card } from "@/components/ui/card";
import React from "react";

// container for when a conversation is active

type Props = React.PropsWithChildren<{}>;

export default function ConversationContainer({ children }: Props) {
  return (
    <Card className="h-[calc(100vh-32px)] w-full lg:h-full p-2 flex flex-col">
      {children}

    </Card>
  )
}