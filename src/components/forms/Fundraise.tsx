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
          <Label htmlFor="seekingToRaise">How much are you seeking to raise? (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="seekingToRaise"
            type="number"
            onChange={(e) => updateData({ seekingToRaise: e.target.value })}
            placeholder="1000000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="externalFunding">Have you raised external funding before in your company? <span className="text-destructive">*</span></Label>
          <Select onValueChange={(value) => updateData({ externalFunding: value })}>
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
          <Label htmlFor="previousRoundAmount">How much did you raise in previous round? (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="previousRoundAmount"
            type="number"
            onChange={(e) => updateData({ previousRoundAmount: e.target.value })}
            placeholder="500000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="numberOfPreviousRounds">Number of previous rounds <span className="text-destructive">*</span></Label>
          <Input
            id="numberOfPreviousRounds"
            type="number"
            onChange={(e) => updateData({ numberOfPreviousRounds: e.target.value })}
            placeholder="2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preMoneyValuationCurrent">Pre-money valuation, this round? (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="preMoneyValuationCurrent"
            type="number"
            onChange={(e) => updateData({ preMoneyValuationCurrent: e.target.value })}
            placeholder="5000000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preMoneyValuationPrevious">Pre-money valuation, previous round (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="preMoneyValuationPrevious"
            type="number"
            onChange={(e) => updateData({ preMoneyValuationPrevious: e.target.value })}
            placeholder="2000000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="closingDate">Estimated date for closing the round <span className="text-destructive">*</span></Label>
          <Input
            id="closingDate"
            type="date"
            onChange={(e) => updateData({ closingDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minimumTicket">Minimum ticket size per investor <span className="text-destructive">*</span></Label>
          <Input
            id="minimumTicket"
            type="number"
            onChange={(e) => updateData({ minimumTicket: e.target.value })}
            placeholder="50000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="fundraisingHistory">Tell us about your fundraising targets and history <span className="text-destructive">*</span></Label>
          <Textarea
            id="fundraisingHistory"
            onChange={(e) => updateData({ fundraisingHistory: e.target.value })}
            placeholder="Describe your fundraising journey, targets, and milestones..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="investorContribution">What do you want your investors to contribute if they invest in your business? <span className="text-destructive">*</span></Label>
          <Textarea
            id="investorContribution"
            onChange={(e) => updateData({ investorContribution: e.target.value })}
            placeholder="Describe what value you're looking for beyond capital (e.g., industry expertise, network, mentorship)..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
