import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { isString } from "libs/validationPattern/isString";
import { supabaseUrl, supabaseAnonKey } from "./const";

export const supabase = createClient(
  isString(supabaseUrl),
  isString(supabaseAnonKey),
  {
    auth: {
      storage: AsyncStorage as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
