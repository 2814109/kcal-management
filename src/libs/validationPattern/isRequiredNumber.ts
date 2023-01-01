import * as zod from "zod";

export const isRequiredNumber = () =>
  zod
    .string()
    .min(1, { message: "Required" })
    .refine((value) => {
      return !isNaN(Number(value));
    }, "It is not a numerical value.")
    .transform((value) => Number(value));
