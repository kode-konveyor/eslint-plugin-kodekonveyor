
function fixer (c) {
  return function (fixer) {
      return fixer.remove(c);
  };
}

module.exports =  {
      meta: {
        fixable: "code",
      },
      create: noCommentRule()
    }

function noCommentRule() {
    return function (context) {
      return {
        Program(node) {
          node.comments.forEach(c => {
            if(!(
              c.value.includes("@generated") ||
              c.value.includes("eslint-disable-next-line") ||
            )) {
              context.report({
                node: c,
                message: "Clean code does not use comments. Put it to a well-named function if you would need a comment.",
                fix: fixer(c)
              });
            }
          });
        }
      };
    };
  }


