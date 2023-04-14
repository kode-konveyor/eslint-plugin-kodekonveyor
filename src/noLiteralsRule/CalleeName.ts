import { type Expression, type Super } from "estree";

export class CalleeName {
  calleeName(callee: Expression | Super): string {
    switch (callee.type) {
      case "MemberExpression":
        return this.calleeName(callee.property);

      case "Identifier":
        return callee.name;

      case "CallExpression":
        return this.calleeName(callee.callee);
      default:
        return "<unknown>";
    }
  }
}
