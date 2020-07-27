const noCommentRule = require("./noCommentRule")

console.log(noCommentRule)
module.exports = {
    'no-comment': {
      meta: {
        fixable: "code",
      },
      create: noCommentRule()
    }
}
