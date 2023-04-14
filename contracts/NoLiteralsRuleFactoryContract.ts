import { Contract } from "cdd-ts/dist/src/contract/Contract";
import { NoLiteralsRuleDelegate } from "../src/noLiteralsRule/NoLiteralsRuleDelegate";
import { type Rule } from "eslint";
import { parse } from "espree";
import { type CallExpression } from "estree";
import { type SideEffectCheckerType } from "cdd-ts/dist/src/types/SideEffectChecker";
import { Mutex } from "cdd-ts/src/util/Mutex";

class Checker implements SideEffectCheckerType {
  mutex: Mutex;
  currentDescriptor?: Rule.ReportDescriptorMessage;

  constructor(readonly message: string) {
    this.mutex = new Mutex();
  }

  async setUp(): Promise<void> {
    await this.mutex.lock();
  }

  check(): Rule.ReportDescriptorMessage | undefined {
    if (this.currentDescriptor?.message !== this.message)
      return this.currentDescriptor;
    return undefined;
  }

  tearDown(): void {
    this.mutex.unlock();
  }

  context = {
    report: (descriptor: Rule.ReportDescriptor) => {
      this.currentDescriptor = descriptor;
    },
  } as unknown as Rule.RuleContext;
}

const checker = new Checker(
  "There should be no literals, except 0, null, false, true and 1. fix it in 'log()'"
);

const code = "console.log('hello')";
const ast: CallExpression = parse(code).body[0].expression;

export const NoLiteralsRuleFactoryContractParties = [
  new NoLiteralsRuleDelegate(checker.context).CallExpression,
];

export const NoLiteralsRuleFactoryContract = new Contract<
  NoLiteralsRuleDelegate["CallExpression"]
>()
  .setTitle("No literals rule")
  .ifCalledWith(() => ast)
  .meanwhile("got it", checker)
  .thenReturn("aa", () => undefined);
