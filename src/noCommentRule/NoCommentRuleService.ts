import { type Rule } from "eslint";
import { type Program, type Comment, type Node } from "estree";
import {
  GENERATED,
  ESLINT_DISABLE,
  SHEBANG,
  TS_EXPECT_ERROR,
} from "./Constants";
import { NoCommentRuleFixerService } from "./NoCommentRuleFixerService";

export class NoCommentRuleService {
  constructor(
    readonly context: Rule.RuleContext,
    readonly noCommentRuleFixer = NoCommentRuleFixerService.prototype
      .noCommentRuleFixer
  ) {}

  noCommentRule(node: Program): void {
    (node.comments as Array<Comment>).forEach((c: Comment) => {
      if (
        !(
          c.value.includes(GENERATED) ||
          c.value.includes(ESLINT_DISABLE) ||
          c.value.includes(TS_EXPECT_ERROR) ||
          // @ts-expect-error the type definition does not include Shebang
          c.type === SHEBANG
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
