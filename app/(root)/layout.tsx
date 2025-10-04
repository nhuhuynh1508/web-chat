import React, { Children } from "react";

type Props = React.PropsWithChildren<{ name: string }>;

export default function Layout({children}: Props){
  return (
    <div>{children}</div>
  );
}