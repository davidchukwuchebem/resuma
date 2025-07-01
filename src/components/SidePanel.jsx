import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import Summary from "./ResumeForm/Summary";
import Skill from "./ResumeForm/Skill";
import Education from "./ResumeForm/Education";
import Work from "./ResumeForm/Work";


const steps = ["personal", "summary", "skill", "education", "work"];

export default function SidePanel({ data, setData }) {
  const [stepIndex, setStepIndex] = useState(0);

  const goToNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const currentStep = steps[stepIndex];

  return (
    <div className="sidebar">
      {currentStep === "personal" && (
        <Personal data={data} setData={setData} goToNextStep={goToNextStep} />
      )}
      {currentStep === "summary" && (
        <Summary data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "skill" && (
        <Skill data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "education" && (
        <Education data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "work" && (
        <Work data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}

    </div>
  );
}
