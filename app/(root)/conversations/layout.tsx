import React, { Children } from "react";

type Props = React.PropsWithChildren<{ name: string }>;

export default function ConversationLayout({children}: Props){
  return (
    <div>{children}</div>
  );
}