import { type Expression, type Super, type PrivateIdentifier } from "estree";

export class CalleeName {
  calleeName(callee: Expression | Super | PrivateIdentifier): string {
    switch (callee.type) {
      case "MemberExpression":
        return this.calleeName(callee.property);

      case "Identifier":
        return callee.name;

      case "CallExpression":
        return this.calleeName(callee.callee);

      default:
        return callee.type;
    }
  }
}
