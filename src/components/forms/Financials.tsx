import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, CheckCircle } from "lucide-react";

interface FinancialsProps {
  data: any;
  updateData: (data: any) => void;
}

export const Financials = ({ data, updateData }: FinancialsProps) => {
  const revenueTypes = ["Recurring", "Transactional", "Usage-Based / Consumption-Based", "Other"];
  const hasFinancialModel = data.financialModel;

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
          <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
            hasFinancialModel ? "border-primary bg-accent" : "border-border hover:border-primary"
          }`}>
            <Input
              id="financialModel"
              type="file"
              accept=".xlsx,.xls,.csv"
              className="hidden"
              onChange={(e) => updateData({ financialModel: e.target.files?.[0] })}
            />
            <label htmlFor="financialModel" className="cursor-pointer">
              {hasFinancialModel ? (
                <>
                  <CheckCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium mb-1 text-primary">Financial model uploaded</p>
                  <p className="text-xs text-muted-foreground">Click to change file</p>
                </>
              ) : (
                <>
                  <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Click to upload financial model</p>
                  <p className="text-xs text-muted-foreground">XLSX, XLS, or CSV</p>
                </>
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput id="monthlyBurn" label="Monthly Burn (EUR)" required placeholder="50000" />
        <FormInput id="revenueLastYear" label="Revenue Last Year (EUR)" required placeholder="500000" />
        <FormInput id="revenueLast12Months" label="Revenue Last 12 Months (EUR)" required placeholder="600000" />
        <FormInput id="expectedRevenueThisYear" label="Expected Revenue This Year (EUR)" required placeholder="1000000" />
        <FormInput id="currentMonthlyRevenue" label="Current Monthly Revenue (EUR)" required placeholder="80000" />
        <FormInput id="currentMRR" label="Current Monthly Recurring Revenue (EUR)" required placeholder="60000" />
        <FormInput id="ebitdaLastYear" label="EBITDA Last Year (EUR)" required placeholder="-100000" />
        <FormInput id="ebitdaThisYear" label="EBITDA This Year (EUR)" required placeholder="-50000" />
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="tam">Total Addressable Market (EUR) <span className="text-destructive">*</span></Label>
          <Input
            id="tam"
            type="number"
            value={data.tam || ""}
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
                  checked={data.revenueTypes?.includes(type) || false}
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
