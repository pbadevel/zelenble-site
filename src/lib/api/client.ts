interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

class ProxyClient {
  private basePath: string;

  constructor(basePath: string = '/api/proxy') {
    this.basePath = basePath;
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.basePath}/${endpoint}`;
    
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data as T;
  }

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, { 
      method: 'POST', 
      body: data 
    });
  }

  put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, { 
      method: 'PUT', 
      body: data 
    });
  }

  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const proxyClient = new ProxyClient();