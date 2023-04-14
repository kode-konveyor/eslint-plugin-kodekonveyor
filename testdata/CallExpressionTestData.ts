import { CodeTestData } from "./CodeTestData";
import { codeToNode } from "../testhelpers/codeToNode";
import { CALL_EXPRESSION } from "../testhelpers/Constants";

export const CallExpressionTestData = codeToNode(CodeTestData, CALL_EXPRESSION);
