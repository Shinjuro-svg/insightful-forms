import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";

interface FinancialsProps {
  data: any;
  updateData: (data: any) => void;
}

export const Financials = ({ data, updateData }: FinancialsProps) => {
  const revenueTypes = ["Recurring", "Transactional", "Usage-Based / Consumption-Based", "Other"];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Financial Information</h2>
        <p className="text-muted-foreground">
          Share your company's financial details and projections.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="financialModel" className="text-base font-medium">
            Upload your financial model / budget
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
            <Input
              id="financialModel"
              type="file"
              accept=".xlsx,.xls,.csv"
              className="hidden"
              onChange={(e) => updateData({ financialModel: e.target.files?.[0] })}
            />
            <label htmlFor="financialModel" className="cursor-pointer">
              <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm font-medium mb-1">Click to upload financial model</p>
              <p className="text-xs text-muted-foreground">XLSX, XLS, or CSV</p>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="monthlyBurn">Monthly Burn (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="monthlyBurn"
            type="number"
            onChange={(e) => updateData({ monthlyBurn: e.target.value })}
            placeholder="50000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="revenueLastYear">Revenue Last Year (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="revenueLastYear"
            type="number"
            onChange={(e) => updateData({ revenueLastYear: e.target.value })}
            placeholder="500000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="revenueLast12Months">Revenue Last 12 Months (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="revenueLast12Months"
            type="number"
            onChange={(e) => updateData({ revenueLast12Months: e.target.value })}
            placeholder="600000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectedRevenueThisYear">Expected Revenue This Year (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="expectedRevenueThisYear"
            type="number"
            onChange={(e) => updateData({ expectedRevenueThisYear: e.target.value })}
            placeholder="1000000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentMonthlyRevenue">Current Monthly Revenue (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="currentMonthlyRevenue"
            type="number"
            onChange={(e) => updateData({ currentMonthlyRevenue: e.target.value })}
            placeholder="80000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentMRR">Current Monthly Recurring Revenue (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="currentMRR"
            type="number"
            onChange={(e) => updateData({ currentMRR: e.target.value })}
            placeholder="60000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ebitdaLastYear">EBITDA Last Year (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="ebitdaLastYear"
            type="number"
            onChange={(e) => updateData({ ebitdaLastYear: e.target.value })}
            placeholder="-100000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ebitdaThisYear">EBITDA This Year (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="ebitdaThisYear"
            type="number"
            onChange={(e) => updateData({ ebitdaThisYear: e.target.value })}
            placeholder="-50000"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="tam">Total Addressable Market (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="tam"
            type="number"
            onChange={(e) => updateData({ tam: e.target.value })}
            placeholder="10000000000"
          />
        </div>

        <div className="space-y-3 md:col-span-2">
          <Label className="text-base font-medium">Revenue Type <span className="text-destructive">*</span></Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {revenueTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  onCheckedChange={(checked) => {
                    const current = data.revenueTypes || [];
                    if (checked) {
                      updateData({ revenueTypes: [...current, type] });
                    } else {
                      updateData({ revenueTypes: current.filter((t: string) => t !== type) });
                    }
                  }}
                />
                <label
                  htmlFor={type}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
