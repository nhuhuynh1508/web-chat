"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const paths = useNavigation();

  return (
    <TooltipProvider>
      <Card className="fixed flex bottom-4 w-[calc(100%-32px)] items-center justify-center h-16 p-2 lg:hidden">
        <nav className="w-full">
          <ul className="flex flex-col gap-4 items-center">
            {paths.map((path, id) => (
              <li key={id} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={path.href}>
                      <Button
                        size="icon"
                        variant={path.active ? "default" : "outline"}
                        className="rounded-full"
                      >
                        {path.icon}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{path.name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </nav>
      </Card>
    </TooltipProvider>
  );
}
