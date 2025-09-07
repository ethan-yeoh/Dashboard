// config.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://fcascylnltjslnwsxtpv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYXNjeWxubHRqc2xud3N4dHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyNTM4MTMsImV4cCI6MjA3MjgyOTgxM30.3HrL7XCkhlef8Y7724g4dOCBklLPzOPsH5Gkw4ghKNs"
);

