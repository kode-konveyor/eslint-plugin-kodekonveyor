import { type AST, type Rule } from "eslint";
import { type Comment } from "estree";

export class NoCommentRuleFixerService {
  noCommentRuleFixer(c: Comment) {
    return function (fixer: Rule.RuleFixer) {
      return fixer.remove(c as unknown as AST.Token);
    };
  }
}
