import { NoCommentRuleFactory } from "./noCommentRule/NoCommentRuleFactory";

export const noCommentRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "No comments allowed",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: NoCommentRuleFactory,
};
