import { Card } from "@/components/ui/card";
import React from "react";

// fallback when no conversation is active

export default function ConversationFallback() {
  return (
    <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center">
      <p>Select/start a conversation!</p>
    </Card>
  )
}