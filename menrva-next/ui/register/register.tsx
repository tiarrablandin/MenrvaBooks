"use client";

import { Button, Step, Stepper } from "@/providers/coreProviders";
import React from "react";
import DataSelections from "./dataSelections";
import ProfileInfo from "./profileInfo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Confirmation from "./confirmation";

const stepTypes = ["profile", "genres", "subgenres", "keywords", "tags", "confirmation"];

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const searchParams = useSearchParams();
  const subscription = searchParams.get("subscription");

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // TODO refactor this component to use the new stepper component

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        {stepTypes.map((_, index) => (
          <Step key={index} className="h-4 w-4" onClick={() => setActiveStep(index)} />
        ))}
      </Stepper>
      <div className="mt-8">
        {activeStep === 0 && <ProfileInfo />}
        {activeStep > 0 && activeStep < 5 && <DataSelections type={stepTypes[activeStep]} />}
        {activeStep === 5 && <Confirmation />}
      </div>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        {!isLastStep ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          (() => {
            switch (subscription) {
              case "Bookworm":
                return (
                  <Link href="https://square.link/u/12DC4ZOw">
                    <Button>Submit</Button>
                  </Link>
                );
                default:
                  return (
                  // TODO: Add the correct link
                  <Link href="userHome">
                    <Button className="">Submit</Button>
                  </Link>
                );
            }
          })()
        )}
      </div>
    </div>
  );
};

export default Register;
