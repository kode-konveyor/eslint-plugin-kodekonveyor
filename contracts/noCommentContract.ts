import { Contract } from "cdd-ts";
import { RuleTester } from "eslint";
import { noCommentRule } from "../src/noCommentRule.js";

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
                  "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
              },
              {
                message:
                  "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
              },
            ],
            output,
          },
        ],
      };
    }
  )
  .thenReturn("nemtom", () => undefined);
