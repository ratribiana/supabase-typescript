import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Mock Supabase client
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(),
}));

describe('Supabase End-to-End Tests', () => {
  let supabase: SupabaseClient;

  beforeAll(() => {
    // Mock createClient to return a mocked Supabase client instance
    supabase = {
      from: jest.fn(() => ({
        select: jest.fn(() => ({
          // Mocking a successful response
          data: [
            {
              id: 'e1f604af-6aab-464d-be59-02b066cb339d',
              first_name: 'John',
              last_name: 'Doe',
              email: 'john.doe@example.com',
              age: 20,
            },
            // Add more mock data as needed
          ],
          error: null, // Mocking no error
        })),
      })),
    } as unknown as SupabaseClient;

    // Mock createClient to return the mocked Supabase client
    (createClient as jest.Mock).mockReturnValue(supabase);
  });

  it('should fetch students data correctly', async () => {
    const expectedData = [
      {
        id: 'e1f604af-6aab-464d-be59-02b066cb339d',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        age: 20,
      },
      // Include more expected data
    ];

    // Simulate interaction with Supabase client
    const { data, error } = await supabase
      .from('students')
      .select('*');

    // Assert expected behavior
    expect(error).toBeNull();
    expect(data).toEqual(expectedData);
  });
});