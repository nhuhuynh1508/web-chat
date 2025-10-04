import { MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
    const pathName = usePathname();

    const paths = useMemo(() => [
        {
            name: "Conversations",
            href: "/conversations",
            icon: <MessageSquare />,
            active: pathName.startsWith("/conversations")
        }
    ], [pathName]);
    return paths;
}