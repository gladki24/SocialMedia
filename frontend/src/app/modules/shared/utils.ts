export function isDefined(value: any): boolean {
  return value !== null && value !== undefined;
}

export function isEmpty(value: any[]): boolean {
  return !isDefined(value) || value.length === 0;
}

export function isNullOrEmpty(value: string): boolean {
  return value === null || value === undefined || value.length === 0;
}

export function createDateIfDefined(value: string | Date): Date {
  return isDefined(value) ? new Date(value) : null;
}
