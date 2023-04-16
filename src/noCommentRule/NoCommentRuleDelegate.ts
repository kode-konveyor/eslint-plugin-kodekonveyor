import { type Rule } from "eslint";
import { type Program } from "estree";
import { NoCommentRuleFixerService } from "./NoCommentRuleFixerService";
import { NoCommentRuleService } from "./NoCommentRuleService";

export class NoCommentRuleDelegate {
  Program: (node: Program) => void;
  constructor(
    readonly context: Rule.RuleContext,
    readonly noCommentRuleFixerService = NoCommentRuleFixerService.prototype
      .noCommentRuleFixerService
  ) {
    this.Program =
      NoCommentRuleService.prototype.noCommentRuleService.bind(this);
  }
}
