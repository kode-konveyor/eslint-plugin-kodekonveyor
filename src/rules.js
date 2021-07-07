'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

module.exports = {
  rules: {
    'no-comment': require('./noCommentRule')
  },
  configs: {
    recommended: {
	    plugins: [
		    "@kode-konveyor"
	    ],
	    extends: [
    		'eslint:recommended',
    		'plugin:@typescript-eslint/recommended',
    		"plugin:react/recommended",
  	    ],
	    env: {
		    "browser": true,
		    "jest": true,
		    "es6": true,
	    },
  	    rules: {
    	    	'@kode-konveyor/no-comment': 2
  	    },
    }
  }
const rules = exports.rules = {
  'no-comment': require('./noCommentRule'),
  'no-literals': require('./noLiteralsRule')
}
