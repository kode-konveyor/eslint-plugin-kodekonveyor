
import assert from "assert";
import {RuleTester} from "eslint"
const noCommentRule = require("rules").rules["no-comment"];

console.log(noCommentRule)
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

ruleTester.run("no-comment", noCommentRule, {
  valid: [
    {
      code: "bar = 2;"
    }
  ],

  invalid: [
    {
      code: input,
      errors: [
        { message: "Clean code does not use comments. Put it to a well-named function if you would need a comment." },
        { message: "Clean code does not use comments. Put it to a well-named function if you would need a comment." }
      ],
      output
    },
  ]
});
