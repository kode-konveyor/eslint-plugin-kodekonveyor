import { type Rule } from "eslint";
import type { TSESTree } from "@typescript-eslint/types";
import { type Node } from "estree";
import { SERVICE, TYPESCRIPT_EXTENSION } from "./Constants";
import { basename } from "path";

export class ServiceRuleService {
  constructor(readonly context: Rule.RuleContext) {}
  serviceRule(program: TSESTree.Program): void {
    const fileName = basename(this.context.getFilename(), TYPESCRIPT_EXTENSION);
    const specifier = fileName.substring(
      fileName.length - SERVICE.length,
      fileName.length
    );
    if (specifier !== SERVICE) return;
    const stuff = program.body.filter(
      (item) => item.type !== "ImportDeclaration"
    );
    for (const item of stuff) {
      if (
        !(
          item.type === "ExportNamedDeclaration" &&
          item.declaration !== null &&
          item.declaration.type === "ClassDeclaration"
        )
      ) {
        this.context.report({
          node: item as Node,
          message: "A service can only contain an exported service class",
        });
        return;
      }
    }
    if (stuff.length !== 1) {
      this.context.report({
        node: program as Node,
        message: "A service should export exactly one class",
      });
      return;
    }
    const serviceClass = (stuff[0] as TSESTree.ExportNamedDeclaration)
      .declaration as TSESTree.ClassDeclaration;
    if (serviceClass.id === null) {
      this.context.report({
        node: serviceClass as Node,
        message: "Service with no name",
      });
      return;
    }

    const className = serviceClass.id.name;
    if (className !== fileName) {
      this.context.report({
        node: serviceClass as Node,
        message: "The Service name should be the same as the file base name",
      });
      return;
    }

    const classNameLowercased =
      (className[0] as string).toLowerCase() + className.slice(1);
    const classNameLowercasedWithoutService = classNameLowercased.substring(
      0,
      classNameLowercased.length - SERVICE.length
    );
    for (const member of serviceClass.body.body) {
      if (member.type !== "MethodDefinition")
        this.context.report({
          node: member as Node,
          message: "Service with non-method member",
        });

      const methodDefinition = member as TSESTree.MethodDefinition;
      if (
        methodDefinition.kind !== "constructor" &&
        (methodDefinition.key as TSESTree.Identifier).name !==
          classNameLowercasedWithoutService
      )
        this.context.report({
          node: member as Node,
          message:
            "Method name of a Service must be the class name lowercased without 'Service'",
        });
    }
  }
}
