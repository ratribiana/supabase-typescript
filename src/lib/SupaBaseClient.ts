import { createClient } from "@supabase/supabase-js";
import { StudentsEntities } from "@/types/StudentsEntities";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getStudents = async () => {
  try {
    const response = await supabase.from("students").select("*");
    return response.data as StudentsEntities[];
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
