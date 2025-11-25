import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface StartupDescriptionProps {
  data: any;
  updateData: (data: any) => void;
}

export const StartupDescription = ({ data, updateData }: StartupDescriptionProps) => {
  const technologyTags = [
    "AI/ML",
    "AR/VR",
    "Blockchain/Web3",
    "Cloud&Infra",
    "Digital & software",
    "Electronics",
    "IoT",
    "NanoTech",
    "New Materials",
    "Quantum",
    "Robotics",
    "Sensors & computer vision",
    "Telco",
    "Other"
  ];

  const handleTechTagToggle = (tag: string) => {
    const currentTags = data.technologyTags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter((t: string) => t !== tag)
      : [...currentTags, tag];
    updateData({ technologyTags: updatedTags });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Startup Description</h2>
        <p className="text-muted-foreground">
          Describe your startup in detail from various perspectives.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="descriptionOneSentence">Startup Description (short, one sentence) <span className="text-destructive">*</span></Label>
          <Textarea
            id="descriptionOneSentence"
            value={data.descriptionOneSentence || ""}
            onChange={(e) => updateData({ descriptionOneSentence: e.target.value })}
            placeholder="Describe your startup in one sentence..."
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description140">Startup Description (short, 140 characters) <span className="text-destructive">*</span></Label>
          <Textarea
            id="description140"
            value={data.description140 || ""}
            onChange={(e) => updateData({ description140: e.target.value })}
            placeholder="Max 140 characters..."
            rows={2}
            maxLength={140}
          />
          <p className="text-xs text-muted-foreground">{(data.description140 || "").length}/140 characters</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description30Words">Startup Description (short, 30 words) <span className="text-destructive">*</span></Label>
          <Textarea
            id="description30Words"
            value={data.description30Words || ""}
            onChange={(e) => updateData({ description30Words: e.target.value })}
            placeholder="Approximately 30 words..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description255">Startup Description (short, 255 incl. spaces characters) <span className="text-destructive">*</span></Label>
          <Textarea
            id="description255"
            value={data.description255 || ""}
            onChange={(e) => updateData({ description255: e.target.value })}
            placeholder="Max 255 characters including spaces..."
            rows={4}
            maxLength={255}
          />
          <p className="text-xs text-muted-foreground">{(data.description255 || "").length}/255 characters</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description250Words">Startup Description (short, 250 words) <span className="text-destructive">*</span></Label>
          <Textarea
            id="description250Words"
            value={data.description250Words || ""}
            onChange={(e) => updateData({ description250Words: e.target.value })}
            placeholder="Approximately 250 words..."
            rows={6}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="descriptionLong">Startup Description (long) <span className="text-destructive">*</span></Label>
          <Textarea
            id="descriptionLong"
            value={data.descriptionLong || ""}
            onChange={(e) => updateData({ descriptionLong: e.target.value })}
            placeholder="Comprehensive description of your startup..."
            rows={8}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="aboutCompany">Tell us about your company <span className="text-destructive">*</span></Label>
          <p className="text-sm text-muted-foreground mb-2">
            What problem are you solving? What unique selling points will or have you created and have you built up any traction to date?
          </p>
          <Textarea
            id="aboutCompany"
            value={data.aboutCompany || ""}
            onChange={(e) => updateData({ aboutCompany: e.target.value })}
            placeholder="Tell us about your company..."
            rows={6}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="industrySector">Industry / Sector <span className="text-destructive">*</span></Label>
          <Textarea
            id="industrySector"
            value={data.industrySector || ""}
            onChange={(e) => updateData({ industrySector: e.target.value })}
            placeholder="What industry or sector does your startup operate in?"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="b2bComponent">Are you a B2B company, or have a B2B component? <span className="text-destructive">*</span></Label>
          <Textarea
            id="b2bComponent"
            value={data.b2bComponent || ""}
            onChange={(e) => updateData({ b2bComponent: e.target.value })}
            placeholder="Describe your B2B aspect..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>Technology tag <span className="text-destructive">*</span></Label>
          <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {technologyTags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={`tech-${tag}`}
                  checked={(data.technologyTags || []).includes(tag)}
                  onCheckedChange={() => handleTechTagToggle(tag)}
                />
                <label htmlFor={`tech-${tag}`} className="text-sm cursor-pointer">{tag}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="softwareProduct">Are you building a software product? <span className="text-destructive">*</span></Label>
          <Select 
            value={data.softwareProduct || ""} 
            onValueChange={(value) => updateData({ softwareProduct: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="problemSolving">What problem do you solve <span className="text-destructive">*</span></Label>
          <Textarea
            id="problemSolving"
            value={data.problemSolving || ""}
            onChange={(e) => updateData({ problemSolving: e.target.value })}
            placeholder="Describe the problem you're solving..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="solution">What is your solution to the problem? <span className="text-destructive">*</span></Label>
          <Textarea
            id="solution"
            value={data.solution || ""}
            onChange={(e) => updateData({ solution: e.target.value })}
            placeholder="Describe your solution..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passion">What do you love about solving this problem? <span className="text-destructive">*</span></Label>
          <Textarea
            id="passion"
            value={data.passion || ""}
            onChange={(e) => updateData({ passion: e.target.value })}
            placeholder="What drives your passion for this problem?"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessModel">Business model (short description) <span className="text-destructive">*</span></Label>
          <Textarea
            id="businessModel"
            value={data.businessModel || ""}
            onChange={(e) => updateData({ businessModel: e.target.value })}
            placeholder="Describe your business model..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="defensibility">Defensibility <span className="text-destructive">*</span></Label>
          <p className="text-sm text-muted-foreground mb-2">
            Patents, Trade secrets, complex product, network effects, proprietary data, 1st mover advantage, founder-market-fit
          </p>
          <Textarea
            id="defensibility"
            value={data.defensibility || ""}
            onChange={(e) => updateData({ defensibility: e.target.value })}
            placeholder="What makes your solution defensible?"
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="winningSentence">In one sentence, why is your solution winning? <span className="text-destructive">*</span></Label>
          <Textarea
            id="winningSentence"
            value={data.winningSentence || ""}
            onChange={(e) => updateData({ winningSentence: e.target.value })}
            placeholder="One sentence that captures why you'll win..."
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="uniqueTechnology">What makes your technology unique and defensible? <span className="text-destructive">*</span></Label>
          <Textarea
            id="uniqueTechnology"
            value={data.uniqueTechnology || ""}
            onChange={(e) => updateData({ uniqueTechnology: e.target.value })}
            placeholder="Describe what makes your technology unique..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="importantTruth">What important truth do very few people agree with you on, related to the problem you are solving (or considering solving)? <span className="text-destructive">*</span></Label>
          <Textarea
            id="importantTruth"
            value={data.importantTruth || ""}
            onChange={(e) => updateData({ importantTruth: e.target.value })}
            placeholder="Share your contrarian insight..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="greatestChallenges">What are your greatest challenges in your journey forward? <span className="text-destructive">*</span></Label>
          <Textarea
            id="greatestChallenges"
            value={data.greatestChallenges || ""}
            onChange={(e) => updateData({ greatestChallenges: e.target.value })}
            placeholder="Describe your biggest challenges ahead..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
