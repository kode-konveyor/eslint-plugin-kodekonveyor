module.exports =  {
      create: noLiteralsRule()
}

function noLiteralsRule(){
	return function (context) {
	return {
        CallExpression(node) {
      if (node.arguments.some(arg => arg.type === 'Literal' && arg.value!==1 &&  arg.value!==0 )) {
        context.report(node, 'There should be no literals, except 0 and 1.')
      }
    }
        }
	
	}
}