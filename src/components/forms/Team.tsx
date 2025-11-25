import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface TeamProps {
  data: any;
  updateData: (data: any) => void;
}

export const Team = ({ data, updateData }: TeamProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Team Information</h2>
        <p className="text-muted-foreground">
          Tell us about your team composition and background.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="teamSize">Team size <span className="text-destructive">*</span></Label>
          <Input
            id="teamSize"
            type="number"
            value={data.teamSize || ""}
            onChange={(e) => updateData({ teamSize: e.target.value })}
            placeholder="Total number of team members"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="numberOfFounders">Number of founders? <span className="text-destructive">*</span></Label>
          <Input
            id="numberOfFounders"
            type="number"
            value={data.numberOfFounders || ""}
            onChange={(e) => updateData({ numberOfFounders: e.target.value })}
            placeholder="Number of founders"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="femaleFounders">Any female founders? <span className="text-destructive">*</span></Label>
          <Select 
            value={data.femaleFounders || ""} 
            onValueChange={(value) => updateData({ femaleFounders: value })}
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
          <Label htmlFor="femaleLeadershipPercentage">What percentage of leaders are female? <span className="text-destructive">*</span></Label>
          <Input
            id="femaleLeadershipPercentage"
            type="number"
            value={data.femaleLeadershipPercentage || ""}
            onChange={(e) => updateData({ femaleLeadershipPercentage: e.target.value })}
            placeholder="Percentage (0-100)"
            min="0"
            max="100"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="builtBusinessBefore">Have you built a business before? <span className="text-destructive">*</span></Label>
          <Textarea
            id="builtBusinessBefore"
            value={data.builtBusinessBefore || ""}
            onChange={(e) => updateData({ builtBusinessBefore: e.target.value })}
            placeholder="Describe any previous business ventures..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="standoutExperiences">Team, Any particular standout experiences? <span className="text-destructive">*</span></Label>
          <Textarea
            id="standoutExperiences"
            value={data.standoutExperiences || ""}
            onChange={(e) => updateData({ standoutExperiences: e.target.value })}
            placeholder="Highlight impressive experiences of your team..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="softwareProductTeam">Has one of the founders been part of a software product team before? If so, where and in what role? <span className="text-destructive">*</span></Label>
          <Textarea
            id="softwareProductTeam"
            value={data.softwareProductTeam || ""}
            onChange={(e) => updateData({ softwareProductTeam: e.target.value })}
            placeholder="Describe software product experience..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="foundingTeamDetails">Tell us about your founding team <span className="text-destructive">*</span></Label>
          <p className="text-sm text-muted-foreground mb-2">
            What are some of the impressive things the founders and team have done? We want to know what you'll bring to the table, as well as what knowledge and capital gaps we can help you bridge
          </p>
          <Textarea
            id="foundingTeamDetails"
            value={data.foundingTeamDetails || ""}
            onChange={(e) => updateData({ foundingTeamDetails: e.target.value })}
            placeholder="Provide detailed information about your founding team..."
            rows={6}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="backgroundInformsProblem">How does your professional / personal background inform the problem you are working on or thinking about? <span className="text-destructive">*</span></Label>
          <Textarea
            id="backgroundInformsProblem"
            value={data.backgroundInformsProblem || ""}
            onChange={(e) => updateData({ backgroundInformsProblem: e.target.value })}
            placeholder="Explain the connection between your background and the problem you're solving..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
