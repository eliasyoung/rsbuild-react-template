export const isEnumMember = <T>(
  value: unknown,
  enumArg: Record<string | number | symbol, T>,
): value is T => {
  return (Object.values(enumArg) as unknown[]).includes(value)
}

export const isConstObjectValue = <T extends readonly unknown[]>(
  value: unknown,
  objectValues: T,
) => {
  return objectValues.includes(value as T[])
}
