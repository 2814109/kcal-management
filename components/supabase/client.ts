import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { isString } from "libs/isString";
const supabaseUrl = process?.env?.REACT_NATIVE_SUPABASE_URL;
const supabaseAnonKey = process?.env?.REACT_NATIVE_SUPABASE_ANON_KEY;

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
