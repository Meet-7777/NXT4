import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://odfwyxgewncynkavudeh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZnd5eGdld25jeW5rYXZ1ZGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NzAwODUsImV4cCI6MjAzOTE0NjA4NX0.Djtb7hrpYRSdF_uvND3hONxQPGP6gjwPBKqiOfFMNXU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase