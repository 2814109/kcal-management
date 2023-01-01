export const isString = (argument: unknown) => {
  if (typeof argument !== "string") throw new Error("Expect string");

  return argument;
};
