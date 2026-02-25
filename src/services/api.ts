import { API_BASE } from "../constants/apiBase";
import { ApiError } from "../errors/apiError";

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const url = API_BASE + endpoint;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw await ApiError.fromResponse(response);
  }

  return response.json();
}

export async function get<T>(endpoint: string): Promise<T> {
  return apiFetch<T>(endpoint);
}
