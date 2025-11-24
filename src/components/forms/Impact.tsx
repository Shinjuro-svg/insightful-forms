import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ImpactProps {
  data: any;
  updateData: (data: any) => void;
}

export const Impact = ({ data, updateData }: ImpactProps) => {
  const sdgs = [
    "1. No Poverty",
    "2. Zero Hunger",
    "3. Good Health and Well-being",
    "4. Quality Education",
    "5. Gender Equality",
    "6. Clean Water and Sanitation",
    "7. Affordable and Clean Energy",
    "8. Decent Work and Economic Growth",
    "9. Industry, Innovation and Infrastructure",
    "10. Reduced Inequalities",
    "11. Sustainable Cities and Communities",
    "12. Responsible Consumption and Production",
    "13. Climate Action",
    "14. Life Below Water",
    "15. Life on Land",
    "16. Peace, Justice and Strong Institutions",
    "17. Partnerships for the Goals",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Impact & Purpose</h2>
        <p className="text-muted-foreground">
          Share the impact your company creates and the change you want to drive.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="impactSentence">In one sentence, what impact are you generating? <span className="text-destructive">*</span></Label>
          <Textarea
            id="impactSentence"
            value={data.impactSentence || ""}
            onChange={(e) => updateData({ impactSentence: e.target.value })}
            placeholder="Describe the core impact your company creates..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primarySDG">What is your primary SDG? <span className="text-destructive">*</span></Label>
          <Select 
            value={data.primarySDG || ""} 
            onValueChange={(value) => updateData({ primarySDG: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your primary Sustainable Development Goal" />
            </SelectTrigger>
            <SelectContent>
              {sdgs.map((sdg) => (
                <SelectItem key={sdg} value={sdg}>{sdg}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deiCriteria">Which Diversity, Equity and Inclusion criteria does your founder team fit to?</Label>
          <p className="text-sm text-muted-foreground mb-2">
            This could be anything within the following DEI categories: Gender & Sexual Orientation, Ethnicity & Race, 
            Disability & Neurodiversity, Socioeconomic Background, Migration & Refugee Status, Age & Experience and/or 
            other categories like Veteran or military service background, Religious or cultural minority or Founders 
            with caregiving responsibilities (e.g. single parents)
          </p>
          <Textarea
            id="deiCriteria"
            value={data.deiCriteria || ""}
            onChange={(e) => updateData({ deiCriteria: e.target.value })}
            placeholder="Describe relevant DEI aspects of your founding team..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="changeChallenge">What do you want to change or challenge with your business concept? <span className="text-destructive">*</span></Label>
          <Textarea
            id="changeChallenge"
            value={data.changeChallenge || ""}
            onChange={(e) => updateData({ changeChallenge: e.target.value })}
            placeholder="Describe the status quo you're challenging and the change you want to drive..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
