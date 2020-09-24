import assert from "assert";
import {RuleTester} from "eslint"
const noLiteralsRule = require("rules").rules["no-literals"];

console.log(noLiteralsRule)
const ruleTester = new RuleTester();

const greet = 'Hello'; 
const input = console.log(greet);
const a = it("empty input, empty output", () => {});
const b = describe("MakeScheduleSelectionsService", () => {});

ruleTester.run("no-literal", noLiteralsRule, {
  valid: [	"input",
			"console.log(1)",
			"console.log(0)",
			"console.log(null)",
			"a",
			"b"		
  ],

  invalid: [
    {
      code: "console.log('Hello')",
      errors: [
        { message: "There should be no literals, except 0, null and 1." },
       ],
    },
  ]
});
