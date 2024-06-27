import { Button } from "@/components/ui/button";
import React from "react";

export const PaymentConditions: React.FC = () => {
  return (
    <div className="space-y-2 [&>button]:justify-start">
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        Cartão de crédito
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        Pix
      </Button>
      <Button
        variant="ghost"
        className="border-2 h-fit border-input hover:bg-muted hover:dark:bg-muted/20 w-full p-6 rounded-md"
      >
        Boleto
      </Button>
    </div>
  );
};
