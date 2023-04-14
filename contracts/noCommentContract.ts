import { RuleTester } from "eslint";
import { noCommentRule } from "../src/noCommentRule/noCommentRule.js";
import { Contract } from "cdd-ts/dist/src/contract/Contract";

const ruleTester = new RuleTester();

const input = `
//line comment
foo = 1;
/* 
  block comment
  */
`;

const output = `

foo = 1;

`;

export const noCommentContractParties = [ruleTester.run.bind(ruleTester)];
export const noCommentContract = new Contract()
  .setTitle("no-comment rule")
  .ifCalledWith(
    () => "no-comment",
    () => noCommentRule,
    () => {
      return {
        valid: [
          {
            code: "bar = 2;",
          },
        ],

        invalid: [
          {
            code: input,
            errors: [
              {
                message:
                  "Clean code does not use comments. Use a well-named function instead of them.",
              },
              {
                message:
                  "Clean code does not use comments. Use a well-named function instead of them.",
              },
            ],
            output,
          },
        ],
      };
    }
  )
  .thenReturn("nemtom", () => undefined);
