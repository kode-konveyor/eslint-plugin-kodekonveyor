export const CodeTestData = {
  expressionStatementFailing: "console.log('hello')",
  expressionStatementPassing: "console.log(a)",
  thenReturnFailing: "IfCalledWith(1).thenReturn('exp','hehe')",
  thenReturnPassing: "IfCalledWith(1).thenReturn('exp',false)",
  thenThrowPassing: "IfCalledWith(1).thenThrow('exp','hehe')",
  setTitlePassing: "setTitle('exp')",
  suchThatPassing: "IfCalledWith(1).suchThat('exp',false)",
  meanWhilePassing: "IfCalledWith(1).meanwhile('exp',false)",
  whenPassing: "IfCalledWith(1).when('exp',false)",
  zero: "console.log(0)",
  one: "console.log(1)",
  true: "console.log(true)",
  false: "console.log(false)",
  null: "console.log(null)",
  unnamed: `(()=>2)('hello')`,
  service: `
  import { foo } from "bar"
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    serviceRule(): void {}
  }`,
  serviceOtherName: `
  import { foo } from "bar"
  export class CommentRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    commentRule(): void {}
  }`,
  serviceNoName: `
  import { foo } from "bar"
  export class {
    constructor(readonly context: Rule.RuleContext) {}
    serviceRule(): void {}
  }`,
  serviceBadName: `
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    ServiceRule(): void {}
  }`,
  justImports: `import { foo } from "bar"`,
  serviceMoreitemsInBody: `
  const foo = 1
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    ServiceRule(): void {}
  }
  `,
  serviceWitUnnamedExport: `
  export {foo}
  export const bar = 1
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    ServiceRule(): void {}
  }
  `,
  serviceWitConst: `
  export const bar = 1
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    ServiceRule(): void {}
  }
  `,
  serviceWithNonMethodMember: `
  import { foo } from "bar"
  export class ServiceRuleService {
    constructor(readonly context: Rule.RuleContext) {}
    foo = 1
    serviceRule(): void {}
  }`,
};
