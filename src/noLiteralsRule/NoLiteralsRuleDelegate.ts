import { type Rule } from "eslint";
import { CalleeName } from "./CalleeName";
import { NoLiteralsRuleService } from "./NoLiteralsRuleService";

export class NoLiteralsRuleDelegate {
  constructor(
    readonly context: Rule.RuleContext,
    readonly calleeName = CalleeName.prototype.calleeName,
    readonly CallExpression = NoLiteralsRuleService.prototype.noLiteralsRule
  ) {
    this.CallExpression = CallExpression.bind(this);
  }
}
