import { $axios, setBaseUrl, setHeader } from "@/lib/Http";
import { StudentsEntities } from "@/types/StudentsEntities";

setBaseUrl($axios, import.meta.env.VITE_SUPABASE_URL);
setHeader($axios, "Content-Type", "application/json");

export const getStudents = async () => {
  try {
    const response = await $axios.get<StudentsEntities[]>(
      "/functions/v1/students/",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
