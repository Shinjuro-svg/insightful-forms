import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface ReachOutProps {
  data: any;
  updateData: (data: any) => void;
}

export const ReachOut = ({ data, updateData }: ReachOutProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Investor Outreach</h2>
        <p className="text-muted-foreground">
          Help us understand your investor preferences and provide necessary contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="investorsToAvoid">Which investors should we NOT reach out to?</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Are there investors you know you do NOT want us to reach out to? Maybe your current investors (if you have any), 
            some that you have already been in contact with or some where you have a warm intro that you will contact on your own?
          </p>
          <Textarea
            id="investorsToAvoid"
            value={data.investorsToAvoid || ""}
            onChange={(e) => updateData({ investorsToAvoid: e.target.value })}
            placeholder="List investors we should not contact..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emailCredentials">Provide us with email credentials</Label>
          <p className="text-sm text-muted-foreground mb-2">
            Since we need to send the material from a company account please provide the credentials
          </p>
          <Input
            id="emailCredentials"
            type="text"
            value={data.emailCredentials || ""}
            onChange={(e) => updateData({ emailCredentials: e.target.value })}
            placeholder="Email credentials or access information..."
          />
        </div>
      </div>
    </div>
  );
};
