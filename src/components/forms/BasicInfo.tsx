import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface BasicInfoProps {
  data: any;
  updateData: (data: any) => void;
}

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
          <Select onValueChange={(value) => updateData({ title: value })}>
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

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
          <Input
            id="firstName"
            onChange={(e) => updateData({ firstName: e.target.value })}
            placeholder="Enter your first name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
          <Input
            id="lastName"
            onChange={(e) => updateData({ lastName: e.target.value })}
            placeholder="Enter your last name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
          <Input
            id="email"
            type="email"
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Contact Number <span className="text-destructive">*</span></Label>
          <Input
            id="phone"
            type="tel"
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name <span className="text-destructive">*</span></Label>
          <Input
            id="companyName"
            onChange={(e) => updateData({ companyName: e.target.value })}
            placeholder="Your Company Ltd."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="corporateId">Corporate ID Number <span className="text-destructive">*</span></Label>
          <Input
            id="corporateId"
            onChange={(e) => updateData({ corporateId: e.target.value })}
            placeholder="12345678"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="foundingDate">Founding Date <span className="text-destructive">*</span></Label>
          <Input
            id="foundingDate"
            type="date"
            onChange={(e) => updateData({ foundingDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Company Website <span className="text-destructive">*</span></Label>
          <Input
            id="website"
            type="url"
            onChange={(e) => updateData({ website: e.target.value })}
            placeholder="https://yourcompany.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="streetAddress">Company Street Address <span className="text-destructive">*</span></Label>
          <Input
            id="streetAddress"
            onChange={(e) => updateData({ streetAddress: e.target.value })}
            placeholder="123 Main Street"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipCode">Company Zip Code <span className="text-destructive">*</span></Label>
          <Input
            id="zipCode"
            onChange={(e) => updateData({ zipCode: e.target.value })}
            placeholder="12345"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Company City <span className="text-destructive">*</span></Label>
          <Input
            id="city"
            onChange={(e) => updateData({ city: e.target.value })}
            placeholder="San Francisco"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="country">Company Country <span className="text-destructive">*</span></Label>
          <Select onValueChange={(value) => updateData({ country: value })}>
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
          <Select onValueChange={(value) => updateData({ primaryLocation: value })}>
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

        <div className="space-y-2">
          <Label htmlFor="linkedinFounder1">LinkedIn Profile, Founder #1 <span className="text-destructive">*</span></Label>
          <Input
            id="linkedinFounder1"
            type="url"
            onChange={(e) => updateData({ linkedinFounder1: e.target.value })}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinFounder2">LinkedIn Profile, Founder #2</Label>
          <Input
            id="linkedinFounder2"
            type="url"
            onChange={(e) => updateData({ linkedinFounder2: e.target.value })}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinFounder3">LinkedIn Profile, Founder #3</Label>
          <Input
            id="linkedinFounder3"
            type="url"
            onChange={(e) => updateData({ linkedinFounder3: e.target.value })}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinCompany">LinkedIn Page, Company</Label>
          <Input
            id="linkedinCompany"
            type="url"
            onChange={(e) => updateData({ linkedinCompany: e.target.value })}
            placeholder="https://linkedin.com/company/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="twitterCompany">Twitter Page, Company</Label>
          <Input
            id="twitterCompany"
            type="url"
            onChange={(e) => updateData({ twitterCompany: e.target.value })}
            placeholder="https://twitter.com/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pitchDeckLink">Link to Pitch Deck <span className="text-destructive">*</span></Label>
          <Input
            id="pitchDeckLink"
            type="url"
            onChange={(e) => updateData({ pitchDeckLink: e.target.value })}
            placeholder="https://..."
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="meetingLink">Meeting Booking Link <span className="text-destructive">*</span></Label>
          <Input
            id="meetingLink"
            type="url"
            onChange={(e) => updateData({ meetingLink: e.target.value })}
            placeholder="Calendly, Google Calendar, etc."
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder1">Professional Experiences & Educational Background, Founder #1 <span className="text-destructive">*</span></Label>
          <Textarea
            id="experienceFounder1"
            onChange={(e) => updateData({ experienceFounder1: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder2">Professional Experiences & Educational Background, Founder #2</Label>
          <Textarea
            id="experienceFounder2"
            onChange={(e) => updateData({ experienceFounder2: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experienceFounder3">Professional Experiences & Educational Background, Founder #3</Label>
          <Textarea
            id="experienceFounder3"
            onChange={(e) => updateData({ experienceFounder3: e.target.value })}
            placeholder="Describe professional experiences and educational background..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
