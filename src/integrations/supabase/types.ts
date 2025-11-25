export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      form_submissions: {
        Row: {
          about_company: string | null
          additional_info_url: string | null
          arc_of_history: string | null
          b2b_component: string | null
          background_informs_problem: string | null
          built_business_before: string | null
          business_model: string | null
          change_challenge: string | null
          city: string | null
          closing_date: string | null
          company_name: string | null
          competitive_advantage: string | null
          competitors: string | null
          corporate_id: string | null
          country: string | null
          created_at: string | null
          current_monthly_revenue: number | null
          current_mrr: number | null
          customer_vs_user: string | null
          defensibility: string | null
          dei_criteria: string | null
          description_140: string | null
          description_250_words: string | null
          description_255: string | null
          description_30_words: string | null
          description_long: string | null
          description_one_sentence: string | null
          ebitda_last_year: number | null
          ebitda_this_year: number | null
          email: string | null
          email_credentials: string | null
          expected_revenue_this_year: number | null
          experience_founder_1: string | null
          experience_founder_2: string | null
          experience_founder_3: string | null
          external_funding: string | null
          female_founders: string | null
          female_leadership_percentage: number | null
          financial_model_url: string | null
          first_name: string | null
          founding_date: string | null
          founding_team_details: string | null
          funding_stages: string[] | null
          fundraising_history: string | null
          go_to_market: string | null
          greatest_challenges: string | null
          id: string
          ideal_customer: string | null
          impact_sentence: string | null
          important_truth: string | null
          industry_sector: string | null
          investor_contribution: string | null
          investors_to_avoid: string | null
          key_kpis: string | null
          last_name: string | null
          launch_date: string | null
          linkedin_company: string | null
          linkedin_founder_1: string | null
          linkedin_founder_2: string | null
          linkedin_founder_3: string | null
          meeting_link: string | null
          message: string | null
          minimum_ticket: number | null
          monthly_burn: number | null
          mvp: string | null
          number_of_founders: number | null
          number_of_previous_rounds: number | null
          other_locations: string[] | null
          passion: string | null
          paying_customers: string | null
          phone: string | null
          pitch_deck_link: string | null
          pitch_deck_url: string | null
          pre_money_valuation_current: number | null
          pre_money_valuation_previous: number | null
          previous_round_amount: number | null
          primary_location: string | null
          primary_sdg: string | null
          problem_solving: string | null
          purpose_vision: string | null
          revenue_last_12_months: number | null
          revenue_last_year: number | null
          revenue_types: string[] | null
          sector_transformation: string | null
          seeking_to_raise: number | null
          software_product: string | null
          software_product_team: string | null
          solution: string | null
          standout_experiences: string | null
          street_address: string | null
          tam: number | null
          team_size: number | null
          technology_tags: string[] | null
          title: string | null
          total_users: string | null
          traction: string | null
          twitter_company: string | null
          ugly_slide: string | null
          unique_technology: string | null
          updated_at: string | null
          website: string | null
          winning_sentence: string | null
          zip_code: string | null
        }
        Insert: {
          about_company?: string | null
          additional_info_url?: string | null
          arc_of_history?: string | null
          b2b_component?: string | null
          background_informs_problem?: string | null
          built_business_before?: string | null
          business_model?: string | null
          change_challenge?: string | null
          city?: string | null
          closing_date?: string | null
          company_name?: string | null
          competitive_advantage?: string | null
          competitors?: string | null
          corporate_id?: string | null
          country?: string | null
          created_at?: string | null
          current_monthly_revenue?: number | null
          current_mrr?: number | null
          customer_vs_user?: string | null
          defensibility?: string | null
          dei_criteria?: string | null
          description_140?: string | null
          description_250_words?: string | null
          description_255?: string | null
          description_30_words?: string | null
          description_long?: string | null
          description_one_sentence?: string | null
          ebitda_last_year?: number | null
          ebitda_this_year?: number | null
          email?: string | null
          email_credentials?: string | null
          expected_revenue_this_year?: number | null
          experience_founder_1?: string | null
          experience_founder_2?: string | null
          experience_founder_3?: string | null
          external_funding?: string | null
          female_founders?: string | null
          female_leadership_percentage?: number | null
          financial_model_url?: string | null
          first_name?: string | null
          founding_date?: string | null
          founding_team_details?: string | null
          funding_stages?: string[] | null
          fundraising_history?: string | null
          go_to_market?: string | null
          greatest_challenges?: string | null
          id?: string
          ideal_customer?: string | null
          impact_sentence?: string | null
          important_truth?: string | null
          industry_sector?: string | null
          investor_contribution?: string | null
          investors_to_avoid?: string | null
          key_kpis?: string | null
          last_name?: string | null
          launch_date?: string | null
          linkedin_company?: string | null
          linkedin_founder_1?: string | null
          linkedin_founder_2?: string | null
          linkedin_founder_3?: string | null
          meeting_link?: string | null
          message?: string | null
          minimum_ticket?: number | null
          monthly_burn?: number | null
          mvp?: string | null
          number_of_founders?: number | null
          number_of_previous_rounds?: number | null
          other_locations?: string[] | null
          passion?: string | null
          paying_customers?: string | null
          phone?: string | null
          pitch_deck_link?: string | null
          pitch_deck_url?: string | null
          pre_money_valuation_current?: number | null
          pre_money_valuation_previous?: number | null
          previous_round_amount?: number | null
          primary_location?: string | null
          primary_sdg?: string | null
          problem_solving?: string | null
          purpose_vision?: string | null
          revenue_last_12_months?: number | null
          revenue_last_year?: number | null
          revenue_types?: string[] | null
          sector_transformation?: string | null
          seeking_to_raise?: number | null
          software_product?: string | null
          software_product_team?: string | null
          solution?: string | null
          standout_experiences?: string | null
          street_address?: string | null
          tam?: number | null
          team_size?: number | null
          technology_tags?: string[] | null
          title?: string | null
          total_users?: string | null
          traction?: string | null
          twitter_company?: string | null
          ugly_slide?: string | null
          unique_technology?: string | null
          updated_at?: string | null
          website?: string | null
          winning_sentence?: string | null
          zip_code?: string | null
        }
        Update: {
          about_company?: string | null
          additional_info_url?: string | null
          arc_of_history?: string | null
          b2b_component?: string | null
          background_informs_problem?: string | null
          built_business_before?: string | null
          business_model?: string | null
          change_challenge?: string | null
          city?: string | null
          closing_date?: string | null
          company_name?: string | null
          competitive_advantage?: string | null
          competitors?: string | null
          corporate_id?: string | null
          country?: string | null
          created_at?: string | null
          current_monthly_revenue?: number | null
          current_mrr?: number | null
          customer_vs_user?: string | null
          defensibility?: string | null
          dei_criteria?: string | null
          description_140?: string | null
          description_250_words?: string | null
          description_255?: string | null
          description_30_words?: string | null
          description_long?: string | null
          description_one_sentence?: string | null
          ebitda_last_year?: number | null
          ebitda_this_year?: number | null
          email?: string | null
          email_credentials?: string | null
          expected_revenue_this_year?: number | null
          experience_founder_1?: string | null
          experience_founder_2?: string | null
          experience_founder_3?: string | null
          external_funding?: string | null
          female_founders?: string | null
          female_leadership_percentage?: number | null
          financial_model_url?: string | null
          first_name?: string | null
          founding_date?: string | null
          founding_team_details?: string | null
          funding_stages?: string[] | null
          fundraising_history?: string | null
          go_to_market?: string | null
          greatest_challenges?: string | null
          id?: string
          ideal_customer?: string | null
          impact_sentence?: string | null
          important_truth?: string | null
          industry_sector?: string | null
          investor_contribution?: string | null
          investors_to_avoid?: string | null
          key_kpis?: string | null
          last_name?: string | null
          launch_date?: string | null
          linkedin_company?: string | null
          linkedin_founder_1?: string | null
          linkedin_founder_2?: string | null
          linkedin_founder_3?: string | null
          meeting_link?: string | null
          message?: string | null
          minimum_ticket?: number | null
          monthly_burn?: number | null
          mvp?: string | null
          number_of_founders?: number | null
          number_of_previous_rounds?: number | null
          other_locations?: string[] | null
          passion?: string | null
          paying_customers?: string | null
          phone?: string | null
          pitch_deck_link?: string | null
          pitch_deck_url?: string | null
          pre_money_valuation_current?: number | null
          pre_money_valuation_previous?: number | null
          previous_round_amount?: number | null
          primary_location?: string | null
          primary_sdg?: string | null
          problem_solving?: string | null
          purpose_vision?: string | null
          revenue_last_12_months?: number | null
          revenue_last_year?: number | null
          revenue_types?: string[] | null
          sector_transformation?: string | null
          seeking_to_raise?: number | null
          software_product?: string | null
          software_product_team?: string | null
          solution?: string | null
          standout_experiences?: string | null
          street_address?: string | null
          tam?: number | null
          team_size?: number | null
          technology_tags?: string[] | null
          title?: string | null
          total_users?: string | null
          traction?: string | null
          twitter_company?: string | null
          ugly_slide?: string | null
          unique_technology?: string | null
          updated_at?: string | null
          website?: string | null
          winning_sentence?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
