import * as zod from "zod";
import { isRequiredNumber } from "libs/validationPattern/isRequiredNumber";

export const validationSchema = zod.object({
  hightOfBody: isRequiredNumber(),
  bodyWeight: isRequiredNumber(),
  age: isRequiredNumber(),
});
