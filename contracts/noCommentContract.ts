import { RuleTester } from "eslint";
import { noCommentRule } from "../src/noCommentRule/noCommentRule.js";
import { Contract } from "cdd-ts/dist/src/contract/Contract";

const ruleTester = new RuleTester();

const input = `#!/bin/bash
//line comment
// @ts-expect-error
 foo = 1;
// @generated
 bar = 2
/* 
  block comment
  */
`;

const output = `#!/bin/bash

// @ts-expect-error
 foo = 1;
// @generated
 bar = 2

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
          {
            code: "#!hehe\nbar = 2;",
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
