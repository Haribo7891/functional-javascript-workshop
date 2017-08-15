function countWords(inputWords) {
    var answer = inputWords.reduce(function (obj, item) {
        obj.hasOwnProperty(item) ?
        obj[item] += 1 : obj[item] = 1;
        console.log(obj);
        return obj;
    }, {})
return answer;
  }

  module.exports = countWords