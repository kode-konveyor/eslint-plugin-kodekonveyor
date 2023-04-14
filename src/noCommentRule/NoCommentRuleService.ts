import { type Rule } from "eslint";
import { type Program, type Comment, type Node } from "estree";
import { GENERATED, ESLINT_DISABLE, SHEBANG } from "./Constants";
import { NoCommentRuleFixerService } from "./NoCommentRuleFixerService";

export class NoCommentRuleService {
  constructor(
    readonly context: Rule.RuleContext,
    readonly noCommentRuleFixer = NoCommentRuleFixerService.prototype
      .noCommentRuleFixer
  ) {}

  noCommentRule(node: Program): void {
    node.comments?.forEach((c: Comment) => {
      if (
        !(
          c.value.includes(GENERATED) ||
          c.value.includes(ESLINT_DISABLE) ||
          (c.type === SHEBANG && c.loc?.start.line === 1)
        )
      ) {
        this.context.report({
          node: c as unknown as Node,
          message:
            "Clean code does not use comments. Use a well-named function instead of them.",
          fix: this.noCommentRuleFixer(c),
        });
      }
    });
  }
}
