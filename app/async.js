exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred = $.Deferred();
  	setTimeout(function(){deferred.resolve(value)},100);
  	return deferred.promise();
  },

  manipulateRemoteData: function(url) {
  	var str = [];
  	var deferred = $.Deferred();
  	$.get(url, function(response){
  		for(var obj in response.people){
  			str.push(response.people[obj].name);
  		}
  		deferred.resolve(str.sort());
  	});
  	return deferred.promise();
  }
};
