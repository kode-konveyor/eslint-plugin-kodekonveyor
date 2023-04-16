import { type Rule } from "eslint";
import { ServiceRuleDelegate } from "./ServiceRuleDelegate";

export function ServiceRuleFactory(
  context: Rule.RuleContext
): ServiceRuleDelegate {
  return new ServiceRuleDelegate(context);
}
