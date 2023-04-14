import { Contract } from "cdd-ts/dist/src/contract/Contract";
import { NoLiteralsRuleDelegate } from "../src/noLiteralsRule/NoLiteralsRuleDelegate";
import { ContextTestdata } from "../testdata/ContextTestdata";
import { CallExpressionTestData } from "testdata/CallExpressionTestData";

export const NoLiteralsRuleFactoryContractParties = [
  new NoLiteralsRuleDelegate(ContextTestdata.default).CallExpression,
];

export const NoLiteralsRuleFactoryContract = new Contract<
  NoLiteralsRuleDelegate["CallExpression"]
>()
  .setTitle("No literals rule")

  .ifCalledWith(CallExpressionTestData.expressionStatementFailing)
  .thenThrow(
    "An expression with a literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in 'log..'"
  )

  .ifCalledWith(CallExpressionTestData.expressionStatementPassing)
  .thenReturn("A passing expression statement passes", () => undefined)

  .ifCalledWith(CallExpressionTestData.thenReturnFailing)
  .thenThrow(
    "thenReturn with the second argument as literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in 'thenReturn"
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
  .thenReturn("meanWhile with first arg as literal passes", () => undefined);
