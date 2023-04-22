import { parse } from "@typescript-eslint/parser";
import { getNodeOfType } from "./getNodeOfType";
import { type AsNodeGetters } from "./AsNodeGetters";
import type { TSESTree } from "@typescript-eslint/types";
import { type CallExpression } from "estree";

export function codeToNode<T extends Record<string, string>>(
  codes: T,
  type: string
): AsNodeGetters<T> {
  const ret: Record<string, () => CallExpression> = {};
  for (const key in codes) {
    const parsed: TSESTree.Program = parse(codes[key] as string, {
      ecmaVersion: 2015,
      sourceType: "module",
    });
    ret[key] = () => getNodeOfType(parsed, type) as unknown as CallExpression;
  }
  return ret as AsNodeGetters<T>;
}
