import { Summary } from "@/components/summary";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronUp } from "lucide-react";
import React from "react";
import { Step } from "./step";

export const Home: React.FC = () => {
  return (
    <div className="flex gap-8 relative">
      <Step />
      <Summary />
      <Drawer>
        <DrawerTrigger asChild className="lg:hidden">
          <Button variant="default" className="bg-primary hover:bg-primary text-primary-foreground shadow fixed bottom-0 left-0 right-0 h-14 px-4 flex items-center justify-between lg:hidden border-none rounded-none">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">Valor à pagar:</h4>
              <p className="font-bold">R$ 1458,99</p>
            </div>
            <ChevronUp className="size-7 rounded-md" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Resumo da negociação</DrawerTitle>
              <DrawerDescription>
                Cobrança 594857091
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
