declare module "espree" {
  import { type Program } from "estree";
  function parse(code: string): Program;
}
