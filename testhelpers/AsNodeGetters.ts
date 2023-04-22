import { type CallExpression } from "estree";

export type AsNodeGetters<T extends Record<string, string>> = {
  [k in keyof T]: () => CallExpression;
};
