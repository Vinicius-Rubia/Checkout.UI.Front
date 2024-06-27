import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type InvoiceStatus = "Pendente" | "Vencido";

interface Invoice {
  id: string;
  value: string;
  discount?: number;
  dueDate: string;
  status: InvoiceStatus;
}

const invoices: Invoice[] = [
  {
    id: "694837698",
    value: "R$ 142,71",
    discount: 5,
    dueDate: "10/05/2024",
    status: "Pendente",
  },
  {
    id: "779584765",
    value: "R$ 237,22",
    discount: 2,
    dueDate: "11/05/2024",
    status: "Pendente",
  },
  {
    id: "097296837",
    value: "R$ 94,20",
    dueDate: "02/12/2023",
    status: "Vencido",
  },
  {
    id: "858905731",
    value: "R$ 1139,69",
    discount: 10,
    dueDate: "28/07/2024",
    status: "Pendente",
  },
];

export const DisplayNegotiations: React.FC = () => {
  const [invoicesForPayment, setInvoicesForPayment] = useState<Invoice[]>([]);

  const handleSelectedInvoice = (invoice: Invoice) => {
    if (invoicesForPayment?.some((item) => item.id === invoice.id)) {
      setInvoicesForPayment(invoicesForPayment?.filter((value) => value !== invoice));
    } else {
      setInvoicesForPayment([...invoicesForPayment, invoice]);
    }
  };

  return (
    <div className="space-y-2">
      {invoices.map((invoice) => {
        const hasSelectedInvoice = invoicesForPayment?.some((item) => item.id === invoice.id);
        return (
          <React.Fragment key={invoice.id}>
            <Button
              variant="ghost"
              onClick={() => handleSelectedInvoice(invoice)}
              className={`${hasSelectedInvoice && "!border-primary/40"} relative border-2 h-fit border-input font-normal hover:bg-muted hover:dark:bg-muted/20 w-full block p-6 rounded-md`}
            >
              <span
                className={`${hasSelectedInvoice ? "block" : "hidden"} bg-primary uppercase text-[9px] px-2 py-1 rounded-tr-md rounded-bl-md text-primary-foreground font-semibold absolute -right-[2px] -top-[2px]`}
              >
                Selecionado
              </span>
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <h4 className="flex flex-col items-center gap-1 mx-auto">
                  Valor da fatura <strong>{invoice.value}</strong>
                </h4>
                <h4 className="flex flex-col items-center gap-1 mx-auto w-[100px]">
                  {invoice.discount ? (
                    <>
                      Desconto <Badge className="bg-green-200 text-green-600 hover:text-primary-foreground">{invoice.discount}%</Badge>
                    </>
                  ) : (
                    <Badge>Sem desconto</Badge>
                  )}
                </h4>
                <h4 className="flex flex-col items-center gap-1 mx-auto">
                  Vencimento <strong>{invoice.dueDate}</strong>
                </h4>
                <Badge
                  className={`${
                    invoice.status === "Pendente"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-500"
                  } mx-auto hover:text-primary-foreground`}
                >
                  {invoice.status}
                </Badge>
              </div>
            </Button>
          </React.Fragment>
        );
      })}

      <p className="text-center text-sm pt-2">
        Oferta valida para pagamentos até: <strong>28/07/2024</strong>
      </p>
    </div>
  );
};
