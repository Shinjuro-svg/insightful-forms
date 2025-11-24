import { z } from "zod";

// Step 1: Pitch Information
export const pitchInformationSchema = z.object({
  pitchDeck: z.any().refine((files) => files && files.length > 0, {
    message: "Pitch deck is required",
  }),
  additionalInfo: z.any().refine((files) => files && files.length > 0, {
    message: "Additional information is required",
  }),
});

// Step 2: Basic Info
export const basicInfoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  firstName: z.string().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().min(1, "Contact number is required").regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number format"),
  companyName: z.string().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  corporateId: z.string().min(1, "Corporate ID is required"),
  foundingDate: z.string().min(1, "Founding date is required"),
  website: z.string().url("Invalid website URL").max(500, "URL must be less than 500 characters"),
  streetAddress: z.string().min(1, "Street address is required").max(300, "Address must be less than 300 characters"),
  zipCode: z.string().min(1, "Zip code is required").max(20, "Zip code must be less than 20 characters"),
  city: z.string().min(1, "City is required").max(100, "City must be less than 100 characters"),
  country: z.string().min(1, "Country is required"),
  primaryLocation: z.string().min(1, "Primary location of operations is required"),
  linkedinFounder1: z.string().url("Invalid LinkedIn URL").max(500, "URL must be less than 500 characters"),
  linkedinFounder2: z.string().url("Invalid LinkedIn URL").max(500, "URL must be less than 500 characters").optional().or(z.literal("")),
  linkedinFounder3: z.string().url("Invalid LinkedIn URL").max(500, "URL must be less than 500 characters").optional().or(z.literal("")),
  linkedinCompany: z.string().url("Invalid LinkedIn URL").max(500, "URL must be less than 500 characters").optional().or(z.literal("")),
  twitterCompany: z.string().url("Invalid Twitter URL").max(500, "URL must be less than 500 characters").optional().or(z.literal("")),
  pitchDeckLink: z.string().url("Invalid URL").max(500, "URL must be less than 500 characters"),
  meetingLink: z.string().url("Invalid meeting link URL").max(500, "URL must be less than 500 characters"),
  experienceFounder1: z.string().min(1, "Founder #1 experience is required").max(2000, "Experience must be less than 2000 characters"),
  experienceFounder2: z.string().max(2000, "Experience must be less than 2000 characters").optional().or(z.literal("")),
  experienceFounder3: z.string().max(2000, "Experience must be less than 2000 characters").optional().or(z.literal("")),
});

// Step 3: Financials
export const financialsSchema = z.object({
  monthlyBurn: z.string().min(1, "Monthly burn is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  revenueLastYear: z.string().min(1, "Revenue last year is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  revenueLast12Months: z.string().min(1, "Revenue last 12 months is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  expectedRevenueThisYear: z.string().min(1, "Expected revenue is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  currentMonthlyRevenue: z.string().min(1, "Current monthly revenue is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  currentMRR: z.string().min(1, "Current MRR is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  ebitdaLastYear: z.string().min(1, "EBITDA last year is required").refine((val) => !isNaN(Number(val)), {
    message: "Must be a valid number",
  }),
  ebitdaThisYear: z.string().min(1, "EBITDA this year is required").refine((val) => !isNaN(Number(val)), {
    message: "Must be a valid number",
  }),
  tam: z.string().min(1, "Total addressable market is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  revenueTypes: z.array(z.string()).min(1, "At least one revenue type is required"),
});

// Step 4: Fundraise
export const fundraiseSchema = z.object({
  fundingStages: z.array(z.string()).min(1, "At least one funding stage is required"),
  seekingToRaise: z.string().min(1, "Amount seeking to raise is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  externalFunding: z.string().min(1, "Please select if you've raised external funding"),
  previousRoundAmount: z.string().min(1, "Previous round amount is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  numberOfPreviousRounds: z.string().min(1, "Number of previous rounds is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0 && Number.isInteger(Number(val)), {
    message: "Must be a valid whole number",
  }),
  preMoneyValuationCurrent: z.string().min(1, "Current pre-money valuation is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  preMoneyValuationPrevious: z.string().min(1, "Previous pre-money valuation is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Must be a valid positive number",
  }),
  closingDate: z.string().min(1, "Closing date is required"),
  minimumTicket: z.string().min(1, "Minimum ticket size is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  fundraisingHistory: z.string().min(1, "Fundraising history is required").max(2000, "Must be less than 2000 characters"),
  investorContribution: z.string().min(1, "Investor contribution expectations are required").max(2000, "Must be less than 2000 characters"),
});

// Step 5: Impact
export const impactSchema = z.object({
  impactSentence: z.string().min(1, "Impact sentence is required").max(500, "Must be less than 500 characters"),
  primarySDG: z.string().min(1, "Primary SDG is required"),
  deiCriteria: z.string().max(2000, "Must be less than 2000 characters").optional().or(z.literal("")),
  changeChallenge: z.string().min(1, "Change/challenge description is required").max(2000, "Must be less than 2000 characters"),
});

// Step 6: Operations
export const operationsSchema = z.object({
  payingCustomers: z.string().min(1, "Please select if you have paying customers"),
  mvp: z.string().min(1, "Please select if you have an MVP"),
  launchDate: z.string().min(1, "Launch date is required"),
  traction: z.string().min(1, "Traction description is required").max(2000, "Must be less than 2000 characters"),
  idealCustomer: z.string().min(1, "Ideal customer description is required").max(2000, "Must be less than 2000 characters"),
});
