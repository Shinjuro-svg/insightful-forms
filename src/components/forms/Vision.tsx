import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface VisionProps {
  data: any;
  updateData: (data: any) => void;
}

export const Vision = ({ data, updateData }: VisionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Vision & Purpose</h2>
        <p className="text-muted-foreground">
          Share your vision and the transformative impact you aim to create.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="message">My Message is: <span className="text-destructive">*</span></Label>
          <Textarea
            id="message"
            value={data.message || ""}
            onChange={(e) => updateData({ message: e.target.value })}
            placeholder="What is your core message?"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="purposeVision">Purpose / vision statement <span className="text-destructive">*</span></Label>
          <Textarea
            id="purposeVision"
            value={data.purposeVision || ""}
            onChange={(e) => updateData({ purposeVision: e.target.value })}
            placeholder="Share your company's purpose and vision..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sectorTransformation">How will your idea transform the sector you are working in? <span className="text-destructive">*</span></Label>
          <Textarea
            id="sectorTransformation"
            value={data.sectorTransformation || ""}
            onChange={(e) => updateData({ sectorTransformation: e.target.value })}
            placeholder="Describe the transformative impact on your sector..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="arcOfHistory">Why is the arc of history in your favor <span className="text-destructive">*</span></Label>
          <Textarea
            id="arcOfHistory"
            value={data.arcOfHistory || ""}
            onChange={(e) => updateData({ arcOfHistory: e.target.value })}
            placeholder="Explain why this is the right time for your solution..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
