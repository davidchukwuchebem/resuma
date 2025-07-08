import React, { useState } from "react";
import Personal from "./ResumeForm/Personal";
import Summary from "./ResumeForm/Summary";
import Skill from "./ResumeForm/Skill";
import Education from "./ResumeForm/Education";
import Work from "./ResumeForm/Work";
import Certification from "./ResumeForm/Certification";
import Language from "./ResumeForm/Language";
import Project from "./ResumeForm/Project";
import Volunteer from "./ResumeForm/Volunteer";
import Hobby from "./ResumeForm/Hobby";
import ProgressBar from "../components/ProgressBar";

const steps = [
  "personal", "summary", "skill", "education", "work",
  "certification", "language", "project", "volunteer", "hobby"
];

export default function SidePanel({ data, setData, progressPercentage, onDownloadPDF }) {
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
    <div className="wrapper">
        <ProgressBar percentage={progressPercentage} />

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
      {currentStep === "certification" && (
        <Certification data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "language" && (
        <Language data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "project" && (
        <Project data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "volunteer" && (
        <Volunteer data={data} setData={setData} goBack={goToPreviousStep} goToNextStep={goToNextStep} />
      )}
      {currentStep === "hobby" && (
        <Hobby
          data={data}
          setData={setData}
          goBack={goToPreviousStep}
          goToNextStep={goToNextStep}
          onDownloadPDF={onDownloadPDF} // ✅ pass the function
        />
      )}
    </div>
    </div>
  );
}
