import { FC } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger
        className="md:hidden pr-4 hover: opacity-75 transition"
        aria-controls="radix-:R2mqcq:"
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
