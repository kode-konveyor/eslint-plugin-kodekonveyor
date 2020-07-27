
function fixer (c) {
  return function (fixer) {
      return fixer.remove(c);
  };
}

module.exports =  
  () => {
    return function (context) {
      return {
        Program(node) {
          node.comments.forEach(c => {
            context.report({
              node: c,
              message: "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
              fix: fixer(c)
            });
          });
        }
      };
    };
  }


