"use client";

import { useAppStore } from "@/lib/store/useAppStore";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

export function Topbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center p-4 bg-white/50 backdrop-blur-md border-b sticky top-0 z-10 h-16 w-full justify-between lg:justify-end">
      <div className="lg:hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-none bg-slate-900 w-72">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex w-full justify-end">
        <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition">
          <AvatarImage src="" />
          <AvatarFallback className="bg-indigo-100 text-indigo-700">SF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
