
/* eslint-disable  @typescript-eslint/no-explicit-any */

export function snakeToCamel<T>(data: any): T {
  if (data === null || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => snakeToCamel<any>(item)) as unknown as T;
  }

  return Object.keys(data).reduce((result, key) => {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
      letter.toUpperCase(),
    );

    result[camelKey] = snakeToCamel(data[key]);

    return result;
  }, {} as any) as T;
}

export function camelToSnake<T>(data: any): T {
  if (data === null || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => camelToSnake<any>(item)) as unknown as T;
  }

  return Object.keys(data).reduce((result, key) => {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (letter) => `_${letter.toLowerCase()}`,
    );

    result[snakeKey] = camelToSnake(data[key]);

    return result;
  }, {} as any) as T;
}
