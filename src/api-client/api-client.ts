type RequestSuccess<T> = {
  status: number;
  data: T;
  message: string | undefined;
  sucess: true;
};

type RequestFailure = {
  status: number;
  errorMessage: string;
  sucess: false;
};

export class ApiClient {
  private readonly baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<RequestSuccess<T> | RequestFailure> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        // credentials: "include",
        // cache: "no-cache",
      });

      if (!response.ok) {
        return {
          status: response.status,
          errorMessage: response.statusText,
          sucess: false,
        };
      }

      const data = await response.json();

      return {
        status: response.status,
        data: data ?? {},
        message: data.message,
        sucess: true,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";

      return {
        status: 0,
        errorMessage,
        sucess: false,
      };
    }
  }

  public get<T>(
    endpoint: string,
    options?: {
      headers?: HeadersInit;
      request?: RequestInit;
    }
  ): Promise<RequestSuccess<T> | RequestFailure> {
    return this.request<T>(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options?.request,
    });
  }

  public post<T, B = unknown>(
    endpoint: string,
    body: B,
    headers?: HeadersInit
  ): Promise<RequestSuccess<T> | RequestFailure> {
    return this.request<T>(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  public patch<T, B = unknown>(
    endpoint: string,
    body: B,
    headers?: HeadersInit
  ): Promise<RequestSuccess<T> | RequestFailure> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  public delete<T>(
    endpoint: string,
    headers?: HeadersInit
  ): Promise<RequestSuccess<T> | RequestFailure> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }
}
