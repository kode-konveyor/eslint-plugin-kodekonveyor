import { type Rule } from "eslint";
import { serialize } from "cdd-ts/src/util/serialize";

export const ContextTestdata = {
  fileName: "ServiceRuleService.ts",
  default: {
    report: (descriptor: Rule.ReportDescriptor) => {
      throw new Error(
        (descriptor as { message: string }).message + serialize(descriptor)
      );
    },
    getFilename: () => ContextTestdata.fileName,
  } as unknown as Rule.RuleContext,
};
