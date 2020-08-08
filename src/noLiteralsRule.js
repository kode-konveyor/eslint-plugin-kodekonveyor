module.exports =  {
      create: noLiteralsRule()
}

function noLiteralsRule(){
	return function (context) {
	return {
        CallExpression(node) {
        var callee = node.callee.name;
      if (node.arguments.some(arg => arg.type === 'Literal' && arg.value!==1 &&  arg.value!==0 )  && callee !== "it" && callee !== "describe") {
        context.report(node, 'There should be no literals, except 0 and 1.')
      }
    }
        }
	
	}
}