import { Contract } from "cdd-ts/dist/src/contract/Contract";
import { ServiceRuleFactory } from "../src/serviceRule/ServiceRuleFactory";
import { ContextTestdata } from "../testdata/ContextTestdata";
import { ProgramTestData } from "../testdata/ProgramTestData";
import { ReturnValueTestdata } from "../testdata/ReturnValueTestdata";
import { Mutex } from "cdd-ts/src/util/Mutex";
import { type EnvironmentManipulatorType } from "cdd-ts/dist/src/types/EnvironmentManipulatorType";

export const serviceRuleContractParties = [
  ServiceRuleFactory(ContextTestdata.default).Program,
];

class Manipulator implements EnvironmentManipulatorType {
  constructor(readonly fileName: string) {}

  static mutex = new Mutex();

  setUp = async (): Promise<void> => {
    await Manipulator.mutex.lock();
    ContextTestdata.fileName = this.fileName;
  };

  tearDown = (): void => {
    Manipulator.mutex.unlock();
  };
}

export const serviceRuleContract = new Contract()
  .setTitle(
    "services provide one one functionality and can depend on other services"
  )

  .when(
    "the baseName of the file ends to 'Service', the rules are checked",
    new Manipulator(
      "/home/mag/project/KodeKonveyor/eslint-plugin-kodekonveyor/src//ServiceRuleService.ts"
    )
  )

  .ifCalledWith(ProgramTestData.service)
  .thenReturn(
    "A service is one class with one method of the same name lowercased",
    ReturnValueTestdata.void
  )

  .ifCalledWith(ProgramTestData.serviceMoreitemsInBody)
  .thenThrow(
    "A service can only contain an exported service class",
    "A service can only contain an exported service class"
  )

  .ifCalledWith(ProgramTestData.justImports)
  .thenThrow(
    "A service should contain an exported service class",
    "A service should export exactly one class"
  )

  .ifCalledWith(ProgramTestData.serviceNoName)
  .thenThrow(
    "A service should export the service class with name",
    "Service with no name"
  )

  .ifCalledWith(ProgramTestData.serviceOtherName)
  .thenThrow(
    "A service should export the service class with name",
    "The Service name should be the same as the file base name"
  )

  .ifCalledWith(ProgramTestData.serviceWithNonMethodMember)
  .thenThrow(
    "A service is stateless: should not have non-method member",
    "Service with non-method member"
  )

  .ifCalledWith(ProgramTestData.serviceBadName)
  .thenThrow(
    "If the method name cannot be the lowercased classname because external requirements, use it in a Delegate",
    "Method name of a Service must be the class name lowercased"
  )

  .ifCalledWith(ProgramTestData.serviceWitUnnamedExport)
  .thenThrow(
    "Unnamed exports are forbidden",
    "A service can only contain an exported service class"
  )
  .ifCalledWith(ProgramTestData.serviceWitConst)
  .thenThrow(
    "Constants go to Constant units",
    "A service can only contain an exported service class"
  )
  .when(
    "the baseName of the file does not end to 'Service', the rules aren't checked",
    new Manipulator(
      "/home/mag/project/KodeKonveyor/eslint-plugin-kodekonveyor/src/ServiceRuleSevice.ts"
    )
  )
  .ifCalledWith(ProgramTestData.serviceWitConst)
  .thenReturn("No problem with constants here", ReturnValueTestdata.void);
