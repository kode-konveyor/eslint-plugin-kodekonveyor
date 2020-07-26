
export type EslintContext = {
  report: (arg0: {
    node: any;
    message: string;
    fix: (fixer: any) => any;
  }) => void;
};
