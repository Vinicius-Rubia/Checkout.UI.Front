import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-card h-14 flex items-center sticky top-0 z-20 border-b">
      <div className="container flex items-center justify-between">
        <h1 className="font-semibold text-lg">LOGO EMPRESA</h1>
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Moon className="absolute size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Mudar tema</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-[1.2rem]" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-start">Olá, Vinicius</SheetTitle>
                <SheetDescription className="text-start">
                  Sinta-se à vontade em nossa plataforma.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
