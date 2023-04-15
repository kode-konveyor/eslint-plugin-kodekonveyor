declare module "espree" {
  import { type Program } from "estree";
  interface Options {
    range?: boolean;
    loc?: boolean;
    comment?: boolean;
    tokens?: boolean;
    ecmaVersion?: number;

    allowReserved?: boolean;
    sourceType?: "script" | "module" | "commonjs";

    ecmaFeatures?: {
      jsx?: boolean;

      globalReturn?: boolean;

      impliedStrict?: boolean;
    };
  }
  function parse(code: string, options: Options): Program;
}
