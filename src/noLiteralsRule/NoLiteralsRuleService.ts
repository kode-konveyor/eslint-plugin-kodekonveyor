import { type Rule } from "eslint";
import { type CallExpression } from "estree";
import { CalleeName } from "./CalleeName";

export class NoLiteralsRuleService {
  constructor(
    readonly context: Rule.RuleContext,
    readonly calleeName = CalleeName.prototype.calleeName
  ) {}

  noLiteralsRuleService(expression: CallExpression): void {
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
        const callee = this.calleeName(expression);
        if (callee === "thenThrow") return false;

        if (arg && index === 0) {
          if (
            callee === "setTitle" ||
            callee === "thenReturn" ||
            callee === "suchThat" ||
            callee === "when" ||
            callee === "meanwhile"
          )
            return false;
        }
        return arg;
      })
    ) {
      this.context.report({
        node: expression,
        message:
          "There should be no literals, except 0, null, false, true and 1. fix it in " +
          this.calleeName(expression),
      });
    }
  }
}
