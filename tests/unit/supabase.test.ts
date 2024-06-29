import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { StudentsEntities } from "../../src/types/StudentsEntities";
 
let supabase: SupabaseClient;

beforeAll(() => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL as string;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY as string;

  supabase = createClient(supabaseUrl, supabaseAnonKey);
});

describe("Supabase Integration Test", () => {
  it('should fetch students data correctly', async () => {
    const expectedData: StudentsEntities[] = [
      {
        id: 'e1f604af-6aab-464d-be59-02b066cb339d',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        age: 20
      },
      {
        id: 'fe08fed4-9ceb-45f5-a879-55daf252e26b',
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        age: 22
      },
      {
        id: '2c8d6dba-e8d6-495e-ac34-444d528acbdf',
        first_name: 'Alice',
        last_name: 'Johnson',
        email: 'alice.johnson@example.com',
        age: 24
      },
      {
        id: '2fa70d08-4361-4264-aba4-952828b2ed86',
        first_name: 'Bob',
        last_name: 'Brown',
        email: 'bob.brown@example.com',
        age: 23
      },
      {
        id: 'e884ae9c-9b88-423c-97b4-8338ecaee084',
        first_name: 'Charlie',
        last_name: 'Davis',
        email: 'charlie.davis@example.com',
        age: 21
      }
    ];

    const { data, error } = await supabase
      .from<any, StudentsEntities>('students')
      .select('*');

    expect(error).toBeNull();
    expect(data).toEqual(expect.arrayContaining(expectedData));
    expect(Array.isArray(data)).toBeTruthy();

    // Check each student entity in the data array
    data?.forEach((student: StudentsEntities) => {
      // Check that required fields are defined and not empty
      expect(student.id).toBeDefined();
      expect(student.first_name).toBeDefined();
      expect(student.first_name).not.toEqual(''); // Check if first_name is not an empty string
      expect(student.last_name).toBeDefined();
      expect(student.last_name).not.toEqual(''); // Check if last_name is not an empty string
      expect(student.email).toBeDefined();
      expect(student.email).not.toEqual(''); // Check if email is not an empty string
      expect(student.age).toBeDefined();
      expect(student.age).toBeGreaterThanOrEqual(0); // Check if age is a non-negative number
    });
  });
});