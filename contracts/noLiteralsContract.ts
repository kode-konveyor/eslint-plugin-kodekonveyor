import { Contract } from "cdd-ts/dist/src/contract/Contract";
import { ContextTestdata } from "../testdata/ContextTestdata";
import { CallExpressionTestData } from "testdata/CallExpressionTestData";
import { NoLiteralsRuleFactory } from "../src/noLiteralsRule/NoLiteralsRuleFactory";
import { type NoLiteralsRuleDelegate } from "../src/noLiteralsRule/NoLiteralsRuleDelegate";

export const noLiteralsContractParties = [
  NoLiteralsRuleFactory(ContextTestdata.default).CallExpression,
];

export const noLiteralsContract = new Contract<
  NoLiteralsRuleDelegate["CallExpression"]
>()
  .setTitle("No literals rule")

  .ifCalledWith(CallExpressionTestData.expressionStatementFailing)
  .thenThrow(
    "An expression with a literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in log"
  )

  .ifCalledWith(CallExpressionTestData.expressionStatementPassing)
  .thenReturn("A passing expression statement passes", () => undefined)

  .ifCalledWith(CallExpressionTestData.thenReturnFailing)
  .thenThrow(
    "thenReturn with the second argument as literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in thenReturn"
  )

  .ifCalledWith(CallExpressionTestData.thenReturnPassing)
  .thenReturn(
    "Thenreturn with just the first argument as literal passes",
    () => undefined
  )

  .ifCalledWith(CallExpressionTestData.thenThrowPassing)
  .thenReturn(
    "thenThrow with both arguments as literal passes",
    () => undefined
  )

  .ifCalledWith(CallExpressionTestData.setTitlePassing)
  .thenReturn("setTitle passes", () => undefined)

  .ifCalledWith(CallExpressionTestData.suchThatPassing)
  .thenReturn("suchThat with first arg as literal passes", () => undefined)

  .ifCalledWith(CallExpressionTestData.meanWhilePassing)
  .thenReturn("meanWhile with first arg as literal passes", () => undefined)

  .ifCalledWith(CallExpressionTestData.zero)
  .thenReturn("zero is an accepted literal", () => undefined)

  .ifCalledWith(CallExpressionTestData.one)
  .thenReturn("one is an accepted literal", () => undefined)

  .ifCalledWith(CallExpressionTestData.true)
  .thenReturn("true is an accepted literal", () => undefined)

  .ifCalledWith(CallExpressionTestData.false)
  .thenReturn("false is an accepted literal", () => undefined)

  .ifCalledWith(CallExpressionTestData.null)
  .thenReturn("null is an accepted literal", () => undefined)

  .ifCalledWith(CallExpressionTestData.unnamed)
  .thenThrow(
    "If there is no name for the calle, then its type is in the error message",
    "There should be no literals, except 0, null, false, true and 1. fix it in ArrowFunctionExpression"
  );
