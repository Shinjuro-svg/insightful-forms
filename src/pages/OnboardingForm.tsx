import { useState } from "react";
import { FormProgress } from "@/components/FormProgress";
import { TrustBadge } from "@/components/TrustBadge";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PitchInformation } from "@/components/forms/PitchInformation";
import { BasicInfo } from "@/components/forms/BasicInfo";
import { Financials } from "@/components/forms/Financials";
import { Fundraise } from "@/components/forms/Fundraise";
import { Impact } from "@/components/forms/Impact";
import { Operations } from "@/components/forms/Operations";
import { useToast } from "@/hooks/use-toast";

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const { toast } = useToast();

  const steps = [
    "Pitch",
    "Basic Info",
    "Financials",
    "Fundraise",
    "Impact",
    "Operations",
  ];

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    // TODO: Replace with actual R2 bucket integration
    console.log("Form data to be submitted:", formData);
    
    toast({
      title: "Form Submitted Successfully!",
      description: "Your data will be uploaded to R2 bucket (integration pending).",
    });

    // Placeholder for R2 bucket integration
    // Example:
    // const response = await fetch('YOUR_R2_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  const updateFormData = (stepData: any) => {
    setFormData({ ...formData, ...stepData });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PitchInformation data={formData} updateData={updateFormData} />;
      case 2:
        return <BasicInfo data={formData} updateData={updateFormData} />;
      case 3:
        return <Financials data={formData} updateData={updateFormData} />;
      case 4:
        return <Fundraise data={formData} updateData={updateFormData} />;
      case 5:
        return <Impact data={formData} updateData={updateFormData} />;
      case 6:
        return <Operations data={formData} updateData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <TrustBadge />
          <h1 className="text-5xl font-bold mb-4">
            Connect with the{" "}
            <span className="text-primary">Right Investors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            InvestorConnect matches startup founders with relevant investors based
            on industry niche, funding stage, and investment preferences.
          </p>
        </div>

        <FormProgress currentStep={currentStep} totalSteps={6} steps={steps} />

        <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
          {renderStep()}

          <div className="flex justify-between mt-8 pt-8 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            {currentStep < 6 ? (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="gap-2">
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <StatsCard value="500+" label="Startups Funded" />
          <StatsCard value="$50M+" label="Capital Raised" />
          <StatsCard value="1000+" label="Active Investors" />
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
