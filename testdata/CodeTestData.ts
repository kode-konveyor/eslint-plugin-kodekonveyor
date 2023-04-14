export const CodeTestData = {
  expressionStatementFailing: "console.log('hello')",
  expressionStatementPassing: "console.log(a)",
  thenReturnFailing: "IfCalledWith(1).thenReturn('exp','hehe')",
  thenReturnPassing: "IfCalledWith(1).thenReturn('exp',false)",
  thenThrowPassing: "IfCalledWith(1).thenThrow('exp','hehe')",
  setTitlePassing: "setTitle('exp')",
  suchThatPassing: "IfCalledWith(1).suchThat('exp',false)",
  meanWhilePassing: "IfCalledWith(1).meanwhile('exp',false)",
};
