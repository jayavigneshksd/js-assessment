exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  		return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
  		constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	  	var keys = Object.keys(obj);
	  	var str = [];
	  	for(var key in obj){
	  		if(obj.hasOwnProperty(key))
	  			str.push(key+": "+obj[key]);
	  	}
	  	return str;
	}
};
