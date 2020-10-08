module.exports =  [
    {
      "files": [ "*entity|Entity*" ],
      "rules": {
        "filenames/match-regex": [2, "(^[a-z]+[A-Z]+[a-z]+[Entity]+[.](?:tsx)$).*", true],
        "no-restricted-syntax": ["error", "FunctionExpression", "VariableDeclaration", "ClassDeclaration", "ClassExpression", "ArrowFunctionExpressio"]
      }
    }
  ]