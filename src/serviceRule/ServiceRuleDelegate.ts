import { type Rule } from "eslint";
import { ServiceRuleService } from "./ServiceRuleService";

export class ServiceRuleDelegate {
  constructor(
    readonly context: Rule.RuleContext,
    readonly Program = ServiceRuleService.prototype.serviceRule
  ) {
    this.Program = Program.bind(this);
  }
}
