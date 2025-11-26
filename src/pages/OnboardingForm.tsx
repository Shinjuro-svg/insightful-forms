import { useState } from "react";
import { FormProgress } from "@/components/FormProgress";
import { TrustBadge } from "@/components/TrustBadge";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertCircle, Loader2 } from "lucide-react";
import { PitchInformation } from "@/components/forms/PitchInformation";
import { BasicInfo } from "@/components/forms/BasicInfo";
import { Financials } from "@/components/forms/Financials";
import { Fundraise } from "@/components/forms/Fundraise";
import { Impact } from "@/components/forms/Impact";
import { Operations } from "@/components/forms/Operations";
import { StartupDescription } from "@/components/forms/StartupDescription";
import { Team } from "@/components/forms/Team";
import { Vision } from "@/components/forms/Vision";
import { ReachOut } from "@/components/forms/ReachOut";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import {
  pitchInformationSchema,
  basicInfoSchema,
  financialsSchema,
  fundraiseSchema,
  impactSchema,
  operationsSchema,
  startupDescriptionSchema,
  teamSchema,
  visionSchema,
  reachOutSchema,
} from "@/lib/validationSchemas";

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const steps = [
    "Pitch",
    "Basic Info",
    "Financials",
    "Fundraise",
    "Impact",
    "Operations",
    "Description",
    "Team",
    "Vision",
    "Reach Out",
  ];

  const validateCurrentStep = (): boolean => {
    setValidationErrors([]);
    
    try {
      switch (currentStep) {
        case 1:
          pitchInformationSchema.parse(formData);
          break;
        case 2:
          basicInfoSchema.parse(formData);
          break;
        case 3:
          financialsSchema.parse(formData);
          break;
        case 4:
          fundraiseSchema.parse(formData);
          break;
        case 5:
          impactSchema.parse(formData);
          break;
        case 6:
          operationsSchema.parse(formData);
          break;
        case 7:
          startupDescriptionSchema.parse(formData);
          break;
        case 8:
          teamSchema.parse(formData);
          break;
        case 9:
          visionSchema.parse(formData);
          break;
        case 10:
          reachOutSchema.parse(formData);
          break;
      }
      return true;
    } catch (error: any) {
      if (error.errors) {
        const errors = error.errors.map((err: any) => err.message);
        setValidationErrors(errors);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast({
        title: "Validation Error",
        description: "Please fix the errors before proceeding.",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < 10) {
      setCurrentStep(currentStep + 1);
      setValidationErrors([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationErrors([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for multipart upload
      const submitFormData = new FormData();
      
      // Append files if they exist
      if (formData.pitchDeck && formData.pitchDeck[0]) {
        submitFormData.append('pitchDeck', formData.pitchDeck[0]);
      }
      if (formData.additionalInfo && formData.additionalInfo[0]) {
        submitFormData.append('additionalInfo', formData.additionalInfo[0]);
      }
      if (formData.financialModel && formData.financialModel[0]) {
        submitFormData.append('financialModel', formData.financialModel[0]);
      }
      
      // Append JSON data (excluding file objects)
      const jsonData = { ...formData };
      delete jsonData.pitchDeck;
      delete jsonData.additionalInfo;
      delete jsonData.financialModel;
      submitFormData.append('formData', JSON.stringify(jsonData));

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: submitFormData,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast({
        title: "Form Submitted Successfully!",
        description: `Your application has been received. Submission ID: ${data.submissionId}`,
      });

      // Optionally reset form or redirect
      console.log("Submission successful:", data);
      
    } catch (error: unknown) {
      console.error("Submission error:", error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while submitting the form';
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      case 7:
        return <StartupDescription data={formData} updateData={updateFormData} />;
      case 8:
        return <Team data={formData} updateData={updateFormData} />;
      case 9:
        return <Vision data={formData} updateData={updateFormData} />;
      case 10:
        return <ReachOut data={formData} updateData={updateFormData} />;
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

        <FormProgress currentStep={currentStep} totalSteps={10} steps={steps} />

        <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
          {validationErrors.length > 0 && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="font-semibold mb-2">Please fix the following errors:</div>
                <ul className="list-disc list-inside space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index} className="text-sm">{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
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
            {currentStep < 10 ? (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
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
