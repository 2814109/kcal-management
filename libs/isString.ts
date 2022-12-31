export const isString = (argument: any) => {
  if (typeof argument !== "string") throw new Error();

  return argument;
};
