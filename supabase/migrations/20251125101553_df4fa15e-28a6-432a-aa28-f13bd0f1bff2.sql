-- Create form submissions table
CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Pitch Information (Group 1)
  pitch_deck_url TEXT,
  additional_info_url TEXT,
  
  -- Basic Info (Group 2)
  title TEXT,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  company_name TEXT,
  corporate_id TEXT,
  founding_date DATE,
  website TEXT,
  street_address TEXT,
  zip_code TEXT,
  city TEXT,
  country TEXT,
  primary_location TEXT,
  other_locations TEXT[],
  linkedin_founder_1 TEXT,
  linkedin_founder_2 TEXT,
  linkedin_founder_3 TEXT,
  linkedin_company TEXT,
  twitter_company TEXT,
  pitch_deck_link TEXT,
  meeting_link TEXT,
  experience_founder_1 TEXT,
  experience_founder_2 TEXT,
  experience_founder_3 TEXT,
  
  -- Financials (Group 3)
  financial_model_url TEXT,
  monthly_burn DECIMAL,
  revenue_last_year DECIMAL,
  revenue_last_12_months DECIMAL,
  expected_revenue_this_year DECIMAL,
  current_monthly_revenue DECIMAL,
  current_mrr DECIMAL,
  ebitda_last_year DECIMAL,
  ebitda_this_year DECIMAL,
  tam DECIMAL,
  revenue_types TEXT[],
  
  -- Fundraise (Group 4)
  funding_stages TEXT[],
  seeking_to_raise DECIMAL,
  external_funding TEXT,
  previous_round_amount DECIMAL,
  number_of_previous_rounds INTEGER,
  pre_money_valuation_current DECIMAL,
  pre_money_valuation_previous DECIMAL,
  closing_date DATE,
  minimum_ticket DECIMAL,
  fundraising_history TEXT,
  investor_contribution TEXT,
  
  -- Impact (Group 5)
  impact_sentence TEXT,
  primary_sdg TEXT,
  dei_criteria TEXT,
  change_challenge TEXT,
  
  -- Operations (Group 6)
  paying_customers TEXT,
  mvp TEXT,
  launch_date DATE,
  traction TEXT,
  ideal_customer TEXT,
  key_kpis TEXT,
  go_to_market TEXT,
  ugly_slide TEXT,
  customer_vs_user TEXT,
  competitors TEXT,
  competitive_advantage TEXT,
  total_users TEXT,
  
  -- Startup Description (Group 7)
  description_one_sentence TEXT,
  description_140 TEXT,
  description_30_words TEXT,
  description_255 TEXT,
  description_250_words TEXT,
  description_long TEXT,
  about_company TEXT,
  industry_sector TEXT,
  b2b_component TEXT,
  technology_tags TEXT[],
  software_product TEXT,
  problem_solving TEXT,
  solution TEXT,
  passion TEXT,
  business_model TEXT,
  defensibility TEXT,
  winning_sentence TEXT,
  unique_technology TEXT,
  important_truth TEXT,
  greatest_challenges TEXT,
  
  -- Team (Group 8)
  team_size INTEGER,
  number_of_founders INTEGER,
  female_founders TEXT,
  female_leadership_percentage DECIMAL,
  built_business_before TEXT,
  standout_experiences TEXT,
  software_product_team TEXT,
  founding_team_details TEXT,
  background_informs_problem TEXT,
  
  -- Vision (Group 9)
  message TEXT,
  purpose_vision TEXT,
  sector_transformation TEXT,
  arc_of_history TEXT,
  
  -- Reach Out (Group 10)
  investors_to_avoid TEXT,
  email_credentials TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit forms"
ON public.form_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for authenticated users to view all submissions
CREATE POLICY "Authenticated users can view all submissions"
ON public.form_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create index on created_at for faster queries
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_form_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON public.form_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_form_submissions_updated_at();