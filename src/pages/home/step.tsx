import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { DisplayNegotiations } from "./display-negotiations";
import { PaymentConditions } from "./payment-conditions";
import { PaymentMethods } from "./payment-methods";

const allSteps = [
  { element: <DisplayNegotiations />, title: "Escolha as faturas que deseja negociar", stepNumber: 1 },
  { element: <PaymentConditions />, title: "Escolha uma forma de pagamento", stepNumber: 2 },
  { element: <PaymentMethods />, title: "Escolha como pagar", stepNumber: 3 },
];

export const Step: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep + 1);
      setProgress((prev) => prev + 50);
      setLoading(false);
    }, 1000);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setProgress((prev) => prev - 50);
  };

  return (
    <motion.main
      className="flex-1 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between w-full relative z-10 bg-card p-4 rounded-md border">
        {allSteps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index === 0
                ? "justify-start"
                : index === allSteps.length - 1
                ? "justify-end"
                : "justify-center"
            } w-full`}
          >
            <Button
              tabIndex={-1}
              className={`rounded-full ${
                currentStep + 1 > step.stepNumber
                  ? "bg-green-600 hover:bg-green-500"
                  : "hover:bg-none"
              }`}
              size="icon"
              variant={currentStep + 1 >= step.stepNumber ? "default" : "outline"}
            >
              {currentStep + 1 > step.stepNumber ? (
                <Check className="size-5 text-white" />
              ) : currentStep + 1 === step.stepNumber && loading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                `${step.stepNumber}`
              )}
            </Button>
          </div>
        ))}
        <Progress
          value={progress}
          className="rounded-none h-1 absolute -z-10 w-[calc(100%-32px)] mx-auto"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="font-semibold text-xl mt-10 mb-5">{allSteps[currentStep].title}</h1>
        {currentStep + 1 === 4 ? (
          <div className="animate-pulse">
            <h1>Checkout Concluído :)</h1>
          </div>
        ) : (
          <div className="bg-card rounded-md p-4 border">
            {allSteps[currentStep].element}
          </div>
        )}
      </motion.div>

      {currentStep + 1 !== 4 && (
        <div className="w-full flex items-center justify-end gap-4 h-9 mt-5">
          <Button
            size="sm"
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 0 || loading}
          >
            Voltar
          </Button>
          <Button size="sm" onClick={handleNextStep} disabled={loading}>
            {currentStep === allSteps.length - 1 && !loading && (
              <DollarSign className="size-4 mr-2" />
            )}
            {loading && <Loader2 className="animate-spin size-4 mr-2" />}
            {loading
              ? "Aguarde"
              : currentStep === allSteps.length - 1
              ? "Finalizar"
              : "Avançar"}
              {currentStep !== allSteps.length - 1 && !loading && (
                <ArrowRight className="size-4 ml-2" />
              )}
          </Button>
        </div>
      )}
    </motion.main>
  );
};
