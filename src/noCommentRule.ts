import { type AST, type Rule } from "eslint";
import { type Program, type Comment, type Node } from "estree";

const GENERATED = "@generated";
const ESLINT_DISABLE = "eslint-disable";
const SHEBANG = "Shebang";

function fixer(c: Comment) {
  return function (fixer: Rule.RuleFixer) {
    return fixer.remove(c as unknown as AST.Token);
  };
}

function noCommentRulecreator(context: Rule.RuleContext): {
  Program: (node: Program) => void;
} {
  return {
    Program: function (node: Program) {
      node.comments?.forEach((c: Comment) => {
        if (
          !(
            c.value.includes(GENERATED) ||
            c.value.includes(ESLINT_DISABLE) ||
            (c.type === SHEBANG && c.loc?.start.line === 1)
          )
        ) {
          context.report({
            node: c as unknown as Node,
            message:
              "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
            fix: fixer(c),
          });
        }
      });
    },
  };
}

export const noCommentRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "No literals allowed",
    },
    fixable: "code",
    schema: [],
  },
  create: noCommentRulecreator,
};
