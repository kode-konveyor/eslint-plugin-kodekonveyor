import { Contract } from "cdd-ts/dist/src/contract/Contract";
import { ContextTestdata } from "../testdata/ContextTestdata";
import { NoLiteralsRuleFactory } from "../src/noLiteralsRule/NoLiteralsRuleFactory";
import { type NoLiteralsRuleDelegate } from "../src/noLiteralsRule/NoLiteralsRuleDelegate";
import { ReturnValueTestdata } from "../testdata/ReturnValueTestdata";
import { CallExpressionTestData } from "../testdata/CallExpressionTestData";

export const noLiteralsRuleContractParties = [
  NoLiteralsRuleFactory(ContextTestdata.default).CallExpression,
];

export const noLiteralsRuleContract = new Contract<
  NoLiteralsRuleDelegate["CallExpression"]
>()
  .setTitle("No literals rule")

  .ifCalledWith(CallExpressionTestData.expressionStatementFailing)
  .thenThrow(
    "An expression with a literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in log"
  )

  .ifCalledWith(CallExpressionTestData.expressionStatementPassing)
  .thenReturn("A passing expression statement passes", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.thenReturnFailing)
  .thenThrow(
    "thenReturn with the second argument as literal fails",
    "There should be no literals, except 0, null, false, true and 1. fix it in thenReturn"
  )

  .ifCalledWith(CallExpressionTestData.thenReturnPassing)
  .thenReturn(
    "Thenreturn with just the first argument as literal passes",
    ReturnValueTestdata.void
  )

  .ifCalledWith(CallExpressionTestData.thenThrowPassing)
  .thenReturn(
    "thenThrow with both arguments as literal passes",
    ReturnValueTestdata.void
  )

  .ifCalledWith(CallExpressionTestData.setTitlePassing)
  .thenReturn("setTitle passes", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.suchThatPassing)
  .thenReturn(
    "suchThat with first arg as literal passes",
    ReturnValueTestdata.void
  )

  .ifCalledWith(CallExpressionTestData.meanWhilePassing)
  .thenReturn(
    "meanWhile with first arg as literal passes",
    ReturnValueTestdata.void
  )

  .ifCalledWith(CallExpressionTestData.whenPassing)
  .thenReturn("when with first arg as literal passes", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.zero)
  .thenReturn("zero is an accepted literal", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.one)
  .thenReturn("one is an accepted literal", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.true)
  .thenReturn("true is an accepted literal", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.false)
  .thenReturn("false is an accepted literal", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.null)
  .thenReturn("null is an accepted literal", ReturnValueTestdata.void)

  .ifCalledWith(CallExpressionTestData.unnamed)
  .thenThrow(
    "If there is no name for the calle, then its type is in the error message",
    "There should be no literals, except 0, null, false, true and 1. fix it in ArrowFunctionExpression"
  );
