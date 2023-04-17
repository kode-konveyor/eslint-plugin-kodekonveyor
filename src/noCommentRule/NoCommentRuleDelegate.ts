import { type Rule } from "eslint";
import { type Program } from "estree";
import { NoCommentRuleFixerService } from "./NoCommentRuleFixerService";
import { NoCommentRuleService } from "./NoCommentRuleService";

export class NoCommentRuleDelegate {
  Program: (node: Program) => void;
  constructor(
    readonly context: Rule.RuleContext,
    readonly noCommentRuleFixerService = NoCommentRuleFixerService.prototype
      .noCommentRuleFixer
  ) {
    this.Program = NoCommentRuleService.prototype.noCommentRule.bind(this);
  }
}
