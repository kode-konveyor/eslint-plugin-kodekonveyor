import { noCommentRule } from "./noCommentRule";
import { noLiteralsRule } from "./noLiteralsRule";
import { serviceRule } from "./serviceRule";

export const rules = {
  "no-comment": noCommentRule,
  "no-literals": noLiteralsRule,
  service: serviceRule,
};
