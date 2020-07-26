import { noCommentRule } from "noCommentRule";

export const rules = {
  'no-comment': {
    meta: {
      fixable: "code",
    },
    create: noCommentRule()
  }
}

