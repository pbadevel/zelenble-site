export async function handleResponse(res: any, actionName: string) {
  if (!res.ok) {
    let errorMessage = `Failed to ${actionName}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.detail || errorData.message || JSON.stringify(errorData);
    } catch {
      const errorText = await res.text();
      errorMessage = errorText || errorMessage;
    }
    throw new Error(errorMessage);
  }
  return res.json();
}