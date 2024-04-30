interface APIResponse<T> {
    data: T | null;
    error: string | null;
  }
  
  export const fetchData = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> => {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data: T = await response.json();
      return { data, error: null };
    } catch (error) {
      let errorMessage = "Something went wrong";
  
      if (error instanceof Error) {
        errorMessage = error.message;
      }
  
      return { data: null, error: errorMessage };
    }
  };
  