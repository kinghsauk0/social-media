import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lrbwvpgcwdgecncozmhc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYnd2cGdjd2RnZWNuY296bWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyODE2NTEsImV4cCI6MjA0OTg1NzY1MX0.wNPhKicJWRmD8GeU9mV5PR9a7kNK7L-QjY6gMPgqWeA"

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON KEY is not defined in the environment variables.");
  }



export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase