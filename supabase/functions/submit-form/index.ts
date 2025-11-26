import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { S3Client, PutObjectCommand } from "https://esm.sh/@aws-sdk/client-s3@3.478.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize R2 client
function getR2Client() {
  const accountId = Deno.env.get('R2_ACCOUNT_ID');
  const accessKeyId = Deno.env.get('R2_ACCESS_KEY_ID');
  const secretAccessKey = Deno.env.get('R2_SECRET_ACCESS_KEY');
  const endpoint = Deno.env.get('R2_ENDPOINT') || `https://${accountId}.r2.cloudflarestorage.com`;

  return new S3Client({
    region: 'auto',
    endpoint: endpoint,
    credentials: {
      accessKeyId: accessKeyId || '',
      secretAccessKey: secretAccessKey || '',
    },
  });
}

// Upload file to R2 and return the public URL
async function uploadToR2(file: File, folder: string): Promise<string> {
  const r2Client = getR2Client();
  const bucketName = Deno.env.get('R2_BUCKET_NAME') || '';
  const accountId = Deno.env.get('R2_ACCOUNT_ID') || '';
  
  // Generate unique filename
  const timestamp = Date.now();
  const randomId = crypto.randomUUID();
  const extension = file.name.split('.').pop() || '';
  const fileName = `${folder}/${timestamp}-${randomId}.${extension}`;
  
  // Convert file to ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: uint8Array,
    ContentType: file.type,
  });

  await r2Client.send(command);
  
  // Return the public URL (you may need to adjust this based on your R2 configuration)
  // If using custom domain: return `https://your-custom-domain.com/${fileName}`;
  // If using R2 public bucket: return `https://pub-${accountId}.r2.dev/${fileName}`;
  return `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${fileName}`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing form submission...');
    
    const formData = await req.formData();
    
    // Extract files
    const pitchDeckFile = formData.get('pitchDeck') as File | null;
    const additionalInfoFile = formData.get('additionalInfo') as File | null;
    const financialModelFile = formData.get('financialModel') as File | null;
    
    // Extract JSON data
    const jsonDataStr = formData.get('formData') as string;
    const jsonData = JSON.parse(jsonDataStr);
    
    console.log('Received form data:', Object.keys(jsonData));
    
    // Upload files to R2
    let pitchDeckUrl = null;
    let additionalInfoUrl = null;
    let financialModelUrl = null;
    
    if (pitchDeckFile && pitchDeckFile.size > 0) {
      console.log('Uploading pitch deck...');
      pitchDeckUrl = await uploadToR2(pitchDeckFile, 'pitch-decks');
      console.log('Pitch deck uploaded:', pitchDeckUrl);
    }
    
    if (additionalInfoFile && additionalInfoFile.size > 0) {
      console.log('Uploading additional info...');
      additionalInfoUrl = await uploadToR2(additionalInfoFile, 'additional-info');
      console.log('Additional info uploaded:', additionalInfoUrl);
    }
    
    if (financialModelFile && financialModelFile.size > 0) {
      console.log('Uploading financial model...');
      financialModelUrl = await uploadToR2(financialModelFile, 'financial-models');
      console.log('Financial model uploaded:', financialModelUrl);
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Prepare data for insertion
    const submissionData = {
      // Pitch Information (Group 1)
      pitch_deck_url: pitchDeckUrl,
      additional_info_url: additionalInfoUrl,
      
      // Basic Info (Group 2)
      title: jsonData.title || null,
      first_name: jsonData.firstName || null,
      last_name: jsonData.lastName || null,
      email: jsonData.email || null,
      phone: jsonData.phone || null,
      company_name: jsonData.companyName || null,
      corporate_id: jsonData.corporateId || null,
      founding_date: jsonData.foundingDate || null,
      website: jsonData.website || null,
      street_address: jsonData.streetAddress || null,
      zip_code: jsonData.zipCode || null,
      city: jsonData.city || null,
      country: jsonData.country || null,
      primary_location: jsonData.primaryLocation || null,
      other_locations: jsonData.otherLocations || null,
      linkedin_founder_1: jsonData.linkedinFounder1 || null,
      linkedin_founder_2: jsonData.linkedinFounder2 || null,
      linkedin_founder_3: jsonData.linkedinFounder3 || null,
      linkedin_company: jsonData.linkedinCompany || null,
      twitter_company: jsonData.twitterCompany || null,
      pitch_deck_link: jsonData.pitchDeckLink || null,
      meeting_link: jsonData.meetingLink || null,
      experience_founder_1: jsonData.experienceFounder1 || null,
      experience_founder_2: jsonData.experienceFounder2 || null,
      experience_founder_3: jsonData.experienceFounder3 || null,
      
      // Financials (Group 3)
      financial_model_url: financialModelUrl,
      monthly_burn: jsonData.monthlyBurn ? parseFloat(jsonData.monthlyBurn) : null,
      revenue_last_year: jsonData.revenueLastYear ? parseFloat(jsonData.revenueLastYear) : null,
      revenue_last_12_months: jsonData.revenueLast12Months ? parseFloat(jsonData.revenueLast12Months) : null,
      expected_revenue_this_year: jsonData.expectedRevenueThisYear ? parseFloat(jsonData.expectedRevenueThisYear) : null,
      current_monthly_revenue: jsonData.currentMonthlyRevenue ? parseFloat(jsonData.currentMonthlyRevenue) : null,
      current_mrr: jsonData.currentMRR ? parseFloat(jsonData.currentMRR) : null,
      ebitda_last_year: jsonData.ebitdaLastYear ? parseFloat(jsonData.ebitdaLastYear) : null,
      ebitda_this_year: jsonData.ebitdaThisYear ? parseFloat(jsonData.ebitdaThisYear) : null,
      tam: jsonData.tam ? parseFloat(jsonData.tam) : null,
      revenue_types: jsonData.revenueTypes || null,
      
      // Fundraise (Group 4)
      funding_stages: jsonData.fundingStages || null,
      seeking_to_raise: jsonData.seekingToRaise ? parseFloat(jsonData.seekingToRaise) : null,
      external_funding: jsonData.externalFunding || null,
      previous_round_amount: jsonData.previousRoundAmount ? parseFloat(jsonData.previousRoundAmount) : null,
      number_of_previous_rounds: jsonData.numberOfPreviousRounds ? parseInt(jsonData.numberOfPreviousRounds) : null,
      pre_money_valuation_current: jsonData.preMoneyValuationCurrent ? parseFloat(jsonData.preMoneyValuationCurrent) : null,
      pre_money_valuation_previous: jsonData.preMoneyValuationPrevious ? parseFloat(jsonData.preMoneyValuationPrevious) : null,
      closing_date: jsonData.closingDate || null,
      minimum_ticket: jsonData.minimumTicket ? parseFloat(jsonData.minimumTicket) : null,
      fundraising_history: jsonData.fundraisingHistory || null,
      investor_contribution: jsonData.investorContribution || null,
      
      // Impact (Group 5)
      impact_sentence: jsonData.impactSentence || null,
      primary_sdg: jsonData.primarySDG || null,
      dei_criteria: jsonData.deiCriteria || null,
      change_challenge: jsonData.changeChallenge || null,
      
      // Operations (Group 6)
      paying_customers: jsonData.payingCustomers || null,
      mvp: jsonData.mvp || null,
      launch_date: jsonData.launchDate || null,
      traction: jsonData.traction || null,
      ideal_customer: jsonData.idealCustomer || null,
      key_kpis: jsonData.keyKPIs || null,
      go_to_market: jsonData.goToMarket || null,
      ugly_slide: jsonData.uglySlide || null,
      customer_vs_user: jsonData.customerVsUser || null,
      competitors: jsonData.competitors || null,
      competitive_advantage: jsonData.competitiveAdvantage || null,
      total_users: jsonData.totalUsers || null,
      
      // Startup Description (Group 7)
      description_one_sentence: jsonData.descriptionOneSentence || null,
      description_140: jsonData.description140 || null,
      description_30_words: jsonData.description30Words || null,
      description_255: jsonData.description255 || null,
      description_250_words: jsonData.description250Words || null,
      description_long: jsonData.descriptionLong || null,
      about_company: jsonData.aboutCompany || null,
      industry_sector: jsonData.industrySector || null,
      b2b_component: jsonData.b2bComponent || null,
      technology_tags: jsonData.technologyTags || null,
      software_product: jsonData.softwareProduct || null,
      problem_solving: jsonData.problemSolving || null,
      solution: jsonData.solution || null,
      passion: jsonData.passion || null,
      business_model: jsonData.businessModel || null,
      defensibility: jsonData.defensibility || null,
      winning_sentence: jsonData.winningSentence || null,
      unique_technology: jsonData.uniqueTechnology || null,
      important_truth: jsonData.importantTruth || null,
      greatest_challenges: jsonData.greatestChallenges || null,
      
      // Team (Group 8)
      team_size: jsonData.teamSize ? parseInt(jsonData.teamSize) : null,
      number_of_founders: jsonData.numberOfFounders ? parseInt(jsonData.numberOfFounders) : null,
      female_founders: jsonData.femaleFounders || null,
      female_leadership_percentage: jsonData.femaleLeadershipPercentage ? parseFloat(jsonData.femaleLeadershipPercentage) : null,
      built_business_before: jsonData.builtBusinessBefore || null,
      standout_experiences: jsonData.standoutExperiences || null,
      software_product_team: jsonData.softwareProductTeam || null,
      founding_team_details: jsonData.foundingTeamDetails || null,
      background_informs_problem: jsonData.backgroundInformsProblem || null,
      
      // Vision (Group 9)
      message: jsonData.message || null,
      purpose_vision: jsonData.purposeVision || null,
      sector_transformation: jsonData.sectorTransformation || null,
      arc_of_history: jsonData.arcOfHistory || null,
      
      // Reach Out (Group 10)
      investors_to_avoid: jsonData.investorsToAvoid || null,
      email_credentials: jsonData.emailCredentials || null,
    };

    console.log('Inserting data into Supabase...');
    
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([submissionData])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('Form submission saved with ID:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: data.id,
        fileUrls: {
          pitchDeck: pitchDeckUrl,
          additionalInfo: additionalInfoUrl,
          financialModel: financialModelUrl,
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in submit-form function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred while processing the form';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
