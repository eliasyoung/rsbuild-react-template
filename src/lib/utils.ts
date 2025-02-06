export const isEnumMember = <T>(
  value: unknown,
  enumArg: Record<string | number | symbol, T>,
): value is T => {
  return (Object.values(enumArg) as unknown[]).includes(value)
}
