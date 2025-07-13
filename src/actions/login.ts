"use server";


// REMEMBER: fetch requests are not cached when: Used inside a Server Action. Because we don't need caching here anyways
export async function login(
  data: FormData,
): Promise<any> {
  try {
    const objectData = Object.fromEntries(data.entries());

    return {
      success: true,
      data: data,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  }
}
