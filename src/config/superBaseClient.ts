import { createClient } from '@supabase/supabase-js';

// Fetch environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
