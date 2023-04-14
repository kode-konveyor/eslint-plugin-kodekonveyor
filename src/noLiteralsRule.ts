import { type Rule } from "eslint";
import { type CallExpression, type Expression, type Super } from "estree";

function calleeName(callee: Expression | Super): string {
  switch (callee.type) {
    case "MemberExpression":
      return calleeName(callee.property);

    case "Identifier":
      return callee.name;

    case "CallExpression":
      return calleeName(callee.callee);
    default:
      return "<unknown>";
  }
}

function noLiteralsRuleCreator(context: Rule.RuleContext): {
  CallExpression: (expression: CallExpression) => void;
} {
  return {
    CallExpression(expression: CallExpression) {
      const argmap = expression.arguments.map(
        (arg) =>
          arg.type === "Literal" &&
          arg.value !== 1 &&
          arg.value !== 0 &&
          arg.value !== true &&
          arg.value !== false &&
          arg.value !== null
      );
      if (
        argmap.some((arg, index) => {
          if (arg && index === 0) {
            const callee = calleeName(expression);
            if (
              callee === "setTitle" ||
              callee === "thenReturn" ||
              callee === "suchThat" ||
              callee === "meanwhile" ||
              callee === "thenThrow"
            )
              return false;
          }
          return arg;
        })
      ) {
        context.report({
          node: expression,
          message:
            "There should be no literals, except 0, null, false, true and 1. fix it in '" +
            calleeName(expression) +
            "()'",
        });
      }
    },
  };
}

export const noLiteralsRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "No literals allowed",
    },
    fixable: "code",
    schema: [],
  },
  create: noLiteralsRuleCreator,
};
