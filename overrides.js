module.exports =  [
    {
      "files": [ "*service|Service*" ],
      "rules": {
        "filenames/match-regex": [2, "(^[a-z]+[A-Z]+[a-z]+[Service]+[.](?:tsx)$).*", true],
        "no-restricted-syntax": ["error", "VariableDeclaration", "ClassDeclaration", "ClassExpression"]
      }
    }
  ]