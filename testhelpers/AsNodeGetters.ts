export type AsNodeGetters<T extends Record<string, string>> = {
  [k in keyof T]: () => Node;
};
