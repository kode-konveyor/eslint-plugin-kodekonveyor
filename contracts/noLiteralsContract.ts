import { Contract } from "cdd-ts";
import { RuleTester } from "eslint";
import { noLiteralsRule } from "../src/noLiteralsRule.js";

const ruleTester = new RuleTester();

export const noLiteralsContractParties = [ruleTester.run.bind(ruleTester)];
export const noLiteralsContract = new Contract()
  .setTitle("no-literals rule")
  .ifCalledWith(
    () => "no-literal",
    () => noLiteralsRule,
    () => {
      return {
        valid: [
          "console.log(1)",
          "console.log(0,1)",
          "ifcalledWith(true).thenReturn('exp',1)",
          "console.log(null)",
          "console.log(true)",
          "console.log(false)",
          "a",
          "b",
        ],

        invalid: [
          {
            code: "console.log('Hello')",
            errors: [
              {
                message:
                  "There should be no literals, except 0, null, false, true and 1. fix it in 'log()'",
              },
            ],
          },
          {
            code: "ifcalledWith(true).thenReturn('exp','hehe')",
            errors: [
              {
                message:
                  "There should be no literals, except 0, null, false, true and 1. fix it in 'thenReturn()'",
              },
            ],
          },
        ],
      };
    }
  )
  .thenReturn("nemtom", () => undefined);
