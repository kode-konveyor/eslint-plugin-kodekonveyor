import { EslintContext } from "EslintContext";

export function noCommentRule() {
  return function (context: EslintContext) {
    return {
      Program(node: { comments: any[]; }) {
        node.comments.forEach(c => {
          context.report({
            node: c,
            message: "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
            fix: fixer(c)
          });
        });
      }
    };
  };
}
function fixer(c: any): (fixer: any) => any {
    return function (fixer) {
        return fixer.remove(c);
    };
}

