import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, CheckCircle } from "lucide-react";

interface PitchInformationProps {
  data: any;
  updateData: (data: any) => void;
}

export const PitchInformation = ({ data, updateData }: PitchInformationProps) => {
  const hasPitchDeck = data.pitchDeck && data.pitchDeck.length > 0;
  const hasAdditionalInfo = data.additionalInfo && data.additionalInfo.length > 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Pitch Information</h2>
        <p className="text-muted-foreground">
          Upload your pitch deck and any additional information about your business.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pitchDeck" className="text-base font-medium">
            Upload your pitch deck <span className="text-destructive">*</span>
          </Label>
          <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            hasPitchDeck ? "border-primary bg-accent" : "border-border hover:border-primary"
          }`}>
            <Input
              id="pitchDeck"
              type="file"
              accept=".pdf,.ppt,.pptx"
              className="hidden"
              onChange={(e) => updateData({ pitchDeck: e.target.files })}
            />
            <label htmlFor="pitchDeck" className="cursor-pointer">
              {hasPitchDeck ? (
                <>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-sm font-medium mb-1 text-primary">File uploaded successfully</p>
                  <p className="text-xs text-muted-foreground">Click to change file</p>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Click to upload your pitch deck</p>
                  <p className="text-xs text-muted-foreground">PDF, PPT, or PPTX (max 20MB)</p>
                </>
              )}
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo" className="text-base font-medium">
            Upload any other relevant information <span className="text-destructive">*</span>
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Product/Service descriptions, technical descriptions or anything else our AI can use to understand your business better
          </p>
          <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            hasAdditionalInfo ? "border-primary bg-accent" : "border-border hover:border-primary"
          }`}>
            <Input
              id="additionalInfo"
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              multiple
              className="hidden"
              onChange={(e) => updateData({ additionalInfo: e.target.files })}
            />
            <label htmlFor="additionalInfo" className="cursor-pointer">
              {hasAdditionalInfo ? (
                <>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-sm font-medium mb-1 text-primary">{data.additionalInfo.length} file(s) uploaded</p>
                  <p className="text-xs text-muted-foreground">Click to change files</p>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Click to upload additional documents</p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, or TXT (max 20MB each)</p>
                </>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
