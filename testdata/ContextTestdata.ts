import { type Rule } from "eslint";

export const ContextTestdata = {
  default: {
    report: (descriptor: Rule.ReportDescriptor) => {
      throw new Error((descriptor as { message: string }).message);
    },
  } as unknown as Rule.RuleContext,
};
