import { type Rule } from "eslint";
import { NoLiteralsRuleDelegate } from "./NoLiteralsRuleDelegate";

export function NoLiteralsRuleFactory(
  context: Rule.RuleContext
): NoLiteralsRuleDelegate {
  return new NoLiteralsRuleDelegate(context);
}
