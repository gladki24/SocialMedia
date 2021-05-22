export function isDefined(value: any): boolean {
  return value !== null && value !== undefined;
}

export function isEmpty(value: any[]): boolean {
  return !isDefined(value) || value.length === 0;
}