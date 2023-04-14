import { parse } from "espree";
import { getNodeOfType } from "./getNodeOfType";
import { type AsNodeGetters } from "./AsNodeGetters";

export function codeToNode<T extends Record<string, string>>(
  codes: T,
  type: string
): AsNodeGetters<T> {
  const ret: Record<string, () => Node> = {};
  for (const key in codes) {
    ret[key] = () =>
      getNodeOfType(parse(codes[key] as string), type) as unknown as Node;
  }
  return ret as AsNodeGetters<T>;
}
