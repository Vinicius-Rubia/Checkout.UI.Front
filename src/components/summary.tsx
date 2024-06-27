import { Copy, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

export const Summary: React.FC = () => {
  return (
    <Card className="overflow-hidden hidden lg:flex h-[calc(100vh-56px)] sticky top-14 flex-col max-w-[400px] rounded-none border-y-transparent">
      <CardHeader className="flex flex-row items-start bg-muted/50 h-24">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg mr-2">
            Cobrança 594857091
            <Button
              size="icon"
              variant="outline"
              className="size-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="size-3" />
              <span className="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Produto: 900 Mega + Canais</CardDescription>
        </div>
        <div className="ml-auto items-center gap-1">
          <Badge className="whitespace-nowrap">Em andamento</Badge>
        </div>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-225px)]">
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Detalhes da Oferta</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Parcelado em <span>4x</span>
                </span>
                <span>R$ 250.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Entrada
                </span>
                <span>R$ 50.00</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">SubTotal</span>
                <span>R$ 799.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Juros</span>
                <span>R$ 52.75</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Desconto</span>
                <span>30%</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>R$ 329.00</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Detalhes do Pagamento</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Método
                </span>
                <span>Boleto</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Vencimento
                </span>
                <span>03/05/2024</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Informações do Cliente</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Nome</dt>
                <dd>Vinicius Rubia</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">E-mail</dt>
                <dd>
                  <a href="mailto:">vinicius.deoliveirarubia@gmail.com</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Celular</dt>
                <dd>
                  <a href="tel:">+55 (11) 91041-2912</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Informações de Pagamento</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
      </ScrollArea>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 py-0 px-6 h-11 mt-auto">
        <div className="text-xs text-primary font-bold flex items-center w-full justify-between">
          <h3>Valor total à pagar:</h3>
          <span>R$ 1458,99</span>
        </div>
      </CardFooter>
    </Card>
  );
};
