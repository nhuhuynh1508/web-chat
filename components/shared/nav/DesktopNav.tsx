"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function DesktopNav() {
  const paths = useNavigation();

  return (
    <TooltipProvider>
      <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-centerlg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-16 lg:px-2 lg:py-3">
        <nav className="w-full">
          <ul className="flex justify-evenly items-center">
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
