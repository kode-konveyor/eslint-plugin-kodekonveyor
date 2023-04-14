import { type Rule } from "eslint";
import { type CallExpression } from "estree";
import { CalleeName } from "./CalleeName";
import { NoLiteralsRuleService } from "./NoLiteralsRuleService";

export class NoLiteralsRuleDelegate {
  CallExpression: (expression: CallExpression) => void;
  constructor(
    readonly context: Rule.RuleContext,
    readonly calleeName = CalleeName.prototype.calleeName
  ) {
    this.CallExpression =
      NoLiteralsRuleService.prototype.noLiteralsRuleService.bind(this);
  }
}
