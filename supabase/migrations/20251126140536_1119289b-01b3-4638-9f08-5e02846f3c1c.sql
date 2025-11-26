-- Drop trigger first, then recreate function with proper search path
DROP TRIGGER IF EXISTS update_form_submissions_updated_at ON public.form_submissions;
DROP FUNCTION IF EXISTS public.update_form_submissions_updated_at();

CREATE OR REPLACE FUNCTION public.update_form_submissions_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON public.form_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_form_submissions_updated_at();