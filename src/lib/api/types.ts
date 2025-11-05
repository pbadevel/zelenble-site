
/* eslint-disable  @typescript-eslint/no-explicit-any */

export interface ApiResponse<T> {
  data?: T;
  errorData?: any;
  status: number;
  message?: string;
}
