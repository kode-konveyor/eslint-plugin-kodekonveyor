const noCommentRule = require("./noCommentRule")

console.log(noCommentRule)
module.exports = {
  rules : {
    'no-comment': {
      meta: {
        fixable: "code",
      },
      create: noCommentRule()
    }
  }
}
