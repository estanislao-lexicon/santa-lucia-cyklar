
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dfgdvazqjziaizlcyqup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZ2R2YXpxanppYWl6bGN5cXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MTIyODUsImV4cCI6MjA0NjI4ODI4NX0.PqdzwZoJL-EzdKWMOW1C-SLSL389y2FigeESDTvoqsE';

export const supabase = createClient(supabaseUrl, supabaseKey);
        