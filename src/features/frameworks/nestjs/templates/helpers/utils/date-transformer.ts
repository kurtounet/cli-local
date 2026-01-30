// utils/date-transformer.ts
export function transformToISOString({
  value,
}: {
  value: string | Date | undefined;
}): string | undefined {
  if (!value) return value;

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string") {
    const date = new Date(value);
    return isNaN(date.getTime()) ? value : date.toISOString();
  }

  return value;
}

// // Dans votre DTO
// @ApiProperty({ example: '2023-01-01T00:00:00.000Z', required: false })
// @Transform(transformToISOString)
// updated_at?: Date;
