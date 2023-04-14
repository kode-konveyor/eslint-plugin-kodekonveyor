import { type Node } from "estree";

export function getNodeOfType(node: Node, type: string): Node | undefined {
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
