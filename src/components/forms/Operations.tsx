import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface OperationsProps {
  data: any;
  updateData: (data: any) => void;
}

export const Operations = ({ data, updateData }: OperationsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Operations & Traction</h2>
        <p className="text-muted-foreground">
          Tell us about your operational status and market traction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <Label htmlFor="payingCustomers">Do you have paying customers? <span className="text-destructive">*</span></Label>
          <Select onValueChange={(value) => updateData({ payingCustomers: value })}>
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
          <Label htmlFor="mvp">MVP <span className="text-destructive">*</span></Label>
          <Select onValueChange={(value) => updateData({ mvp: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Do you have a Minimum Viable Product?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="launchDate">When did you launch? <span className="text-destructive">*</span></Label>
          <Input
            id="launchDate"
            type="date"
            onChange={(e) => updateData({ launchDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="traction">Please describe your traction <span className="text-destructive">*</span></Label>
          <Textarea
            id="traction"
            onChange={(e) => updateData({ traction: e.target.value })}
            placeholder="Describe your key metrics, user growth, revenue growth, partnerships, etc..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="idealCustomer">Please describe your ideal customer <span className="text-destructive">*</span></Label>
          <p className="text-sm text-muted-foreground mb-2">
            E.g. company size (if B2B), demographics, attitude
          </p>
          <Textarea
            id="idealCustomer"
            onChange={(e) => updateData({ idealCustomer: e.target.value })}
            placeholder="Describe your target customer profile in detail..."
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
