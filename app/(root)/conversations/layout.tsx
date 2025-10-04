import ItemList from "@/components/shared/item-list/ItemList";
import React, { Children } from "react";

type Props = React.PropsWithChildren<{ name: string }>;

export default function ConversationLayout({children}: Props){
  return (
    <>
        <ItemList title="Conversations">
            Conversations Page
        </ItemList>
        {children}
    </>
  );
}