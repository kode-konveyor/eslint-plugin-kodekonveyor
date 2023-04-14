import { type Rule } from "eslint";
import { NoCommentRuleDelegate } from "./NoCommentRuleDelegate";

export function NoCommentRuleFactory(
  context: Rule.RuleContext
): NoCommentRuleDelegate {
  return new NoCommentRuleDelegate(context);
}
