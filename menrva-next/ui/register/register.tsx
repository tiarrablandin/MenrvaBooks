"use client";

import { Button, Step, Stepper } from "@/providers/coreProviders";
import React from "react";
import DataSelections from "./dataSelections";
import ProfileInfo from "./profileInfo";

const stepTypes = ["profile", "genres", "subgenres", "keywords", "tags"];

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
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
        {activeStep > 0 && <DataSelections type={stepTypes[activeStep]} />}
      </div>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Register;
