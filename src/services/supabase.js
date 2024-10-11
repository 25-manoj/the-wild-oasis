import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hcujwuuzusvnxhazocze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjdWp3dXV6dXN2bnhoYXpvY3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2NzM5MDIsImV4cCI6MjA0MzI0OTkwMn0.X-F5sZVTnTiaReTLsvl9eQG6JhQLUpC6oQCzLG4xEHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
