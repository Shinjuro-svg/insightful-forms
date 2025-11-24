import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface FundraiseProps {
  data: any;
  updateData: (data: any) => void;
}

export const Fundraise = ({ data, updateData }: FundraiseProps) => {
  const fundingStages = ["Pre-Seed", "Seed", "Series A", "Growth", "Bridge", "Other"];

  const FormInput = ({ id, label, required = false, placeholder = "", type = "number" }: any) => (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        value={data[id] || ""}
        onChange={(e) => updateData({ [id]: e.target.value })}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Fundraise Information</h2>
        <p className="text-muted-foreground">
          Tell us about your fundraising goals and history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3 md:col-span-2">
          <Label className="text-base font-medium">Funding Stage / Investment Round <span className="text-destructive">*</span></Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fundingStages.map((stage) => (
              <div key={stage} className="flex items-center space-x-2">
                <Checkbox
                  id={stage}
                  checked={data.fundingStages?.includes(stage) || false}
                  onCheckedChange={(checked) => {
                    const current = data.fundingStages || [];
                    if (checked) {
                      updateData({ fundingStages: [...current, stage] });
                    } else {
                      updateData({ fundingStages: current.filter((s: string) => s !== stage) });
                    }
                  }}
                />
                <label
                  htmlFor={stage}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {stage}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <FormInput 
            id="seekingToRaise" 
            label="How much are you seeking to raise? (EUR)" 
            required 
            placeholder="1000000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="externalFunding">Have you raised external funding before in your company? <span className="text-destructive">*</span></Label>
          <Select 
            value={data.externalFunding || ""} 
            onValueChange={(value) => updateData({ externalFunding: value })}
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

        <FormInput 
          id="previousRoundAmount" 
          label="How much did you raise in previous round? (EUR)" 
          required 
          placeholder="500000"
        />

        <FormInput 
          id="numberOfPreviousRounds" 
          label="Number of previous rounds" 
          required 
          placeholder="2"
        />

        <FormInput 
          id="preMoneyValuationCurrent" 
          label="Pre-money valuation, this round? (EUR)" 
          required 
          placeholder="5000000"
        />

        <FormInput 
          id="preMoneyValuationPrevious" 
          label="Pre-money valuation, previous round (EUR)" 
          required 
          placeholder="2000000"
        />

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="closingDate">Estimated date for closing the round <span className="text-destructive">*</span></Label>
          <Input
            id="closingDate"
            type="date"
            value={data.closingDate || ""}
            onChange={(e) => updateData({ closingDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <FormInput 
            id="minimumTicket" 
            label="Minimum ticket size per investor" 
            required 
            placeholder="50000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="fundraisingHistory">Tell us about your fundraising targets and history <span className="text-destructive">*</span></Label>
          <Textarea
            id="fundraisingHistory"
            value={data.fundraisingHistory || ""}
            onChange={(e) => updateData({ fundraisingHistory: e.target.value })}
            placeholder="Describe your fundraising journey, targets, and milestones..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="investorContribution">What do you want your investors to contribute if they invest in your business? <span className="text-destructive">*</span></Label>
          <Textarea
            id="investorContribution"
            value={data.investorContribution || ""}
            onChange={(e) => updateData({ investorContribution: e.target.value })}
            placeholder="Describe what value you're looking for beyond capital (e.g., industry expertise, network, mentorship)..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
