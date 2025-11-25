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
  keyKPIs: z.string().min(1, "Key KPIs are required").max(2000, "Must be less than 2000 characters"),
  goToMarket: z.string().min(1, "Go-to-market approach is required").max(2000, "Must be less than 2000 characters"),
  uglySlide: z.string().min(1, "Ugly slide description is required").max(2000, "Must be less than 2000 characters"),
  customerVsUser: z.string().min(1, "Customer vs user description is required").max(2000, "Must be less than 2000 characters"),
  competitors: z.string().min(1, "Competitors description is required").max(2000, "Must be less than 2000 characters"),
  competitiveAdvantage: z.string().min(1, "Competitive advantage is required").max(2000, "Must be less than 2000 characters"),
  totalUsers: z.string().min(1, "Total users/customers count is required").max(500, "Must be less than 500 characters"),
});

// Step 7: Startup Description
export const startupDescriptionSchema = z.object({
  descriptionOneSentence: z.string().min(1, "One sentence description is required").max(500, "Must be less than 500 characters"),
  description140: z.string().min(1, "140 character description is required").max(140, "Must be 140 characters or less"),
  description30Words: z.string().min(1, "30 word description is required").max(500, "Must be less than 500 characters"),
  description255: z.string().min(1, "255 character description is required").max(255, "Must be 255 characters or less"),
  description250Words: z.string().min(1, "250 word description is required").max(3000, "Must be less than 3000 characters"),
  descriptionLong: z.string().min(1, "Long description is required").max(5000, "Must be less than 5000 characters"),
  aboutCompany: z.string().min(1, "Company information is required").max(3000, "Must be less than 3000 characters"),
  industrySector: z.string().min(1, "Industry/Sector is required").max(500, "Must be less than 500 characters"),
  b2bComponent: z.string().min(1, "B2B component information is required").max(1000, "Must be less than 1000 characters"),
  technologyTags: z.array(z.string()).min(1, "At least one technology tag is required"),
  softwareProduct: z.string().min(1, "Please select if you're building a software product"),
  problemSolving: z.string().min(1, "Problem description is required").max(2000, "Must be less than 2000 characters"),
  solution: z.string().min(1, "Solution description is required").max(2000, "Must be less than 2000 characters"),
  passion: z.string().min(1, "Passion description is required").max(2000, "Must be less than 2000 characters"),
  businessModel: z.string().min(1, "Business model is required").max(2000, "Must be less than 2000 characters"),
  defensibility: z.string().min(1, "Defensibility description is required").max(2000, "Must be less than 2000 characters"),
  winningSentence: z.string().min(1, "Winning sentence is required").max(500, "Must be less than 500 characters"),
  uniqueTechnology: z.string().min(1, "Unique technology description is required").max(2000, "Must be less than 2000 characters"),
  importantTruth: z.string().min(1, "Important truth is required").max(2000, "Must be less than 2000 characters"),
  greatestChallenges: z.string().min(1, "Greatest challenges are required").max(2000, "Must be less than 2000 characters"),
});

// Step 8: Team
export const teamSchema = z.object({
  teamSize: z.string().min(1, "Team size is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  numberOfFounders: z.string().min(1, "Number of founders is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Must be a valid positive number",
  }),
  femaleFounders: z.string().min(1, "Please select if you have female founders"),
  femaleLeadershipPercentage: z.string().min(1, "Female leadership percentage is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100, {
    message: "Must be a valid percentage between 0 and 100",
  }),
  builtBusinessBefore: z.string().min(1, "Previous business experience is required").max(2000, "Must be less than 2000 characters"),
  standoutExperiences: z.string().min(1, "Standout experiences are required").max(2000, "Must be less than 2000 characters"),
  softwareProductTeam: z.string().min(1, "Software product team experience is required").max(2000, "Must be less than 2000 characters"),
  foundingTeamDetails: z.string().min(1, "Founding team details are required").max(3000, "Must be less than 3000 characters"),
  backgroundInformsProblem: z.string().min(1, "Background information is required").max(2000, "Must be less than 2000 characters"),
});

// Step 9: Vision
export const visionSchema = z.object({
  message: z.string().min(1, "Message is required").max(2000, "Must be less than 2000 characters"),
  purposeVision: z.string().min(1, "Purpose/vision statement is required").max(2000, "Must be less than 2000 characters"),
  sectorTransformation: z.string().min(1, "Sector transformation description is required").max(2000, "Must be less than 2000 characters"),
  arcOfHistory: z.string().min(1, "Arc of history description is required").max(2000, "Must be less than 2000 characters"),
});

// Step 10: Reach Out
export const reachOutSchema = z.object({
  investorsToAvoid: z.string().max(2000, "Must be less than 2000 characters").optional().or(z.literal("")),
  emailCredentials: z.string().max(500, "Must be less than 500 characters").optional().or(z.literal("")),
});
