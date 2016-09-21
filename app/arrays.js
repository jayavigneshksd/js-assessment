exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
    var total = 0;
    $.each(arr,function(index, value){
      total += value;
    });
    return total;
  },

  remove: function(arr, item) {
    var index = arr.indexOf(item);
    while(index>-1){arr.splice(index,1);index = arr.indexOf(item);}
  },

  removeWithoutCopy: function(arr, item) {
      var index = arr.indexOf(item);
    while(index>-1){arr.splice(index,1);index = arr.indexOf(item);}
  },

  append: function(arr, item) {
    arr.push(item);
    console.log(arr);
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
