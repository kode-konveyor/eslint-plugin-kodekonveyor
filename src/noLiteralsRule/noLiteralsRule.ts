import { NoLiteralsRuleFactory } from "./NoLiteralsRuleFactory";

export const noLiteralsRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "No literals allowed",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: NoLiteralsRuleFactory,
};
