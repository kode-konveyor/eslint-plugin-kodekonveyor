import type { TSESTree } from "@typescript-eslint/types";

export function getNodeOfType(
  node: TSESTree.Node,
  type: string
): TSESTree.Node | undefined {
  if (node.type === type) return node;
  if (node.type === "Program")
    for (const statement of node.body) {
      const ce = getNodeOfType(statement, type);
      if (ce !== undefined) return ce;
    }
  if (node.type === "ExpressionStatement")
    return getNodeOfType(node.expression, type);
  console.log(node);
  return undefined;
}
