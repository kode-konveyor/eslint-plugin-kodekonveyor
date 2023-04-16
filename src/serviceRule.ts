import { ServiceRuleFactory } from "./serviceRule/ServiceRuleFactory";

export const serviceRule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Services provide one one functionality and can depend on other services",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: ServiceRuleFactory,
};
