import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface BasicInfoProps {
  data: any;
  updateData: (data: any) => void;
}

const FormInput = ({ 
  id, 
  label, 
  required = false, 
  type = "text", 
  placeholder = "", 
  value, 
  onChange 
}: any) => (
  <div className="space-y-2">
    <Label htmlFor={id}>
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    <Input
      id={id}
      type={type}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export const BasicInfo = ({ data, updateData }: BasicInfoProps) => {
  const titles = ["Mr.", "Mrs.", "Miss", "Ms.", "Mx."];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
        <p className="text-muted-foreground">
          Tell us about yourself and your company.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title <span className="text-destructive">*</span></Label>
          <Select 
            value={data.title || ""} 
            onValueChange={(value) => updateData({ title: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select title" />
            </SelectTrigger>
            <SelectContent>
              {titles.map((title) => (
                <SelectItem key={title} value={title}>{title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <FormInput
          id="firstName"
          label="First Name"
          required
          value={data.firstName}
          onChange={(val: string) => updateData({ firstName: val })}
          placeholder="Enter your first name"
        />

        <FormInput
          id="lastName"
          label="Last Name"
          required
          value={data.lastName}
          onChange={(val: string) => updateData({ lastName: val })}
          placeholder="Enter your last name"
        />

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          required
          value={data.email}
          onChange={(val: string) => updateData({ email: val })}
          placeholder="your@email.com"
        />

        <FormInput
          id="phone"
          label="Contact Number"
          type="tel"
          required
          value={data.phone}
          onChange={(val: string) => updateData({ phone: val })}
          placeholder="+1 (555) 000-0000"
        />

        <FormInput
          id="companyName"
          label="Company Name"
          required
          value={data.companyName}
          onChange={(val: string) => updateData({ companyName: val })}
          placeholder="Your Company Ltd."
        />

        <FormInput
          id="corporateId"
          label="Corporate ID Number"
          required
          value={data.corporateId}
          onChange={(val: string) => updateData({ corporateId: val })}
          placeholder="12345678"
        />

        <FormInput
          id="foundingDate"
          label="Founding Date"
          type="date"
          required
          value={data.foundingDate}
          onChange={(val: string) => updateData({ foundingDate: val })}
        />

        <FormInput
          id="website"
          label="Company Website"
          type="url"
          required
          value={data.website}
          onChange={(val: string) => updateData({ website: val })}
          placeholder="https://yourcompany.com"
        />

        <FormInput
          id="streetAddress"
          label="Company Street Address"
          required
          value={data.streetAddress}
          onChange={(val: string) => updateData({ streetAddress: val })}
          placeholder="123 Main Street"
        />

        <FormInput
          id="zipCode"
          label="Company Zip Code"
          required
          value={data.zipCode}
          onChange={(val: string) => updateData({ zipCode: val })}
          placeholder="12345"
        />

        <FormInput
          id="city"
          label="Company City"
          required
          value={data.city}
          onChange={(val: string) => updateData({ city: val })}
          placeholder="San Francisco"
        />

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="country">Company Country <span className="text-destructive">*</span></Label>
          <Select 
            value={data.country || ""} 
            onValueChange={(value) => updateData({ country: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">🇺🇸 United States</SelectItem>
              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="de">🇩🇪 Germany</SelectItem>
              <SelectItem value="fr">🇫🇷 France</SelectItem>
              <SelectItem value="nl">🇳🇱 Netherlands</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="primaryLocation">Primary Location of Operations <span className="text-destructive">*</span></Label>
          <Select 
            value={data.primaryLocation || ""} 
            onValueChange={(value) => updateData({ primaryLocation: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select primary location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">🇺🇸 United States</SelectItem>
              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="de">🇩🇪 Germany</SelectItem>
              <SelectItem value="fr">🇫🇷 France</SelectItem>
              <SelectItem value="nl">🇳🇱 Netherlands</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <FormInput
          id="linkedinFounder1"
          label="LinkedIn Profile, Founder #1"
          type="url"
          required
          value={data.linkedinFounder1}
          onChange={(val: string) => updateData({ linkedinFounder1: val })}
          placeholder="https://linkedin.com/in/..."
        />

        <FormInput
          id="linkedinFounder2"
          label="LinkedIn Profile, Founder #2"
          type="url"
          value={data.linkedinFounder2}
          onChange={(val: string) => updateData({ linkedinFounder2: val })}
          placeholder="https://linkedin.com/in/..."
        />

        <FormInput
          id="linkedinFounder3"
          label="LinkedIn Profile, Founder #3"
          type="url"
          value={data.linkedinFounder3}
          onChange={(val: string) => updateData({ linkedinFounder3: val })}
          placeholder="https://linkedin.com/in/..."
        />

        <FormInput
          id="linkedinCompany"
          label="LinkedIn Page, Company"
          type="url"
          value={data.linkedinCompany}
          onChange={(val: string) => updateData({ linkedinCompany: val })}
          placeholder="https://linkedin.com/company/..."
        />

        <FormInput
          id="twitterCompany"
          label="Twitter Page, Company"
          type="url"
          value={data.twitterCompany}
          onChange={(val: string) => updateData({ twitterCompany: val })}
          placeholder="https://twitter.com/..."
        />

        <FormInput
          id="pitchDeckLink"
          label="Link to Pitch Deck"
          type="url"
          required
          value={data.pitchDeckLink}
          onChange={(val: string) => updateData({ pitchDeckLink: val })}
          placeholder="https://..."
        />

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="meetingLink">Meeting Booking Link <span className="text-destructive">*</span></Label>
          <Input
            id="meetingLink"
            type="url"
            value={data.meetingLink || ""}
            onChange={(e) => updateData({ meetingLink: e.target.value })}
            placeholder="Calendly, Google Calendar, etc."
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder1">
            Professional Experiences & Educational Background, Founder #1{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="experienceFounder1"
            value={data.experienceFounder1 || ""}
            onChange={(e) => updateData({ experienceFounder1: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder2">
            Professional Experiences & Educational Background, Founder #2
          </Label>
          <Textarea
            id="experienceFounder2"
            value={data.experienceFounder2 || ""}
            onChange={(e) => updateData({ experienceFounder2: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder3">
            Professional Experiences & Educational Background, Founder #3
          </Label>
          <Textarea
            id="experienceFounder3"
            value={data.experienceFounder3 || ""}
            onChange={(e) => updateData({ experienceFounder3: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
