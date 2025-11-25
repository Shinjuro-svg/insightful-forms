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
          <Select 
            value={data.payingCustomers || ""} 
            onValueChange={(value) => updateData({ payingCustomers: value })}
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
          <Label htmlFor="mvp">MVP <span className="text-destructive">*</span></Label>
          <Select 
            value={data.mvp || ""} 
            onValueChange={(value) => updateData({ mvp: value })}
          >
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
            value={data.launchDate || ""}
            onChange={(e) => updateData({ launchDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="traction">Please describe your traction <span className="text-destructive">*</span></Label>
          <Textarea
            id="traction"
            value={data.traction || ""}
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
            value={data.idealCustomer || ""}
            onChange={(e) => updateData({ idealCustomer: e.target.value })}
            placeholder="Describe your target customer profile in detail..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keyKPIs">What are the 2-3 most important KPI's that will help you understand if you are reaching PMF? <span className="text-destructive">*</span></Label>
          <Textarea
            id="keyKPIs"
            value={data.keyKPIs || ""}
            onChange={(e) => updateData({ keyKPIs: e.target.value })}
            placeholder="List your key performance indicators..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goToMarket">What is your go-to-market approach? <span className="text-destructive">*</span></Label>
          <Textarea
            id="goToMarket"
            value={data.goToMarket || ""}
            onChange={(e) => updateData({ goToMarket: e.target.value })}
            placeholder="Describe your strategy for reaching and acquiring customers..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="uglySlide">Tell us about your ugly slide. What keeps you up at night? If you fail, what will be the reason? <span className="text-destructive">*</span></Label>
          <Textarea
            id="uglySlide"
            value={data.uglySlide || ""}
            onChange={(e) => updateData({ uglySlide: e.target.value })}
            placeholder="Be honest about your biggest challenges and risks..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerVsUser">Who is your customer and who is your user (if they are not identical)? <span className="text-destructive">*</span></Label>
          <Textarea
            id="customerVsUser"
            value={data.customerVsUser || ""}
            onChange={(e) => updateData({ customerVsUser: e.target.value })}
            placeholder="Clarify the distinction between who pays and who uses your product..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="competitors">Who are your main competitors? <span className="text-destructive">*</span></Label>
          <Textarea
            id="competitors"
            value={data.competitors || ""}
            onChange={(e) => updateData({ competitors: e.target.value })}
            placeholder="List and describe your main competitors..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="competitiveAdvantage">How are you different from your competitors? What makes you win? <span className="text-destructive">*</span></Label>
          <Textarea
            id="competitiveAdvantage"
            value={data.competitiveAdvantage || ""}
            onChange={(e) => updateData({ competitiveAdvantage: e.target.value })}
            placeholder="Explain your unique value proposition and competitive advantages..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalUsers">How many total members/users/customers do you have right now? <span className="text-destructive">*</span></Label>
          <Textarea
            id="totalUsers"
            value={data.totalUsers || ""}
            onChange={(e) => updateData({ totalUsers: e.target.value })}
            placeholder="Provide current user/customer numbers..."
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};
