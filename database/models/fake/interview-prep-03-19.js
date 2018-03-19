let input = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']
let answer = ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']


//iterate through array and for each vowel splice a duplicate into the input array

let doubleVowels = function(array) {
  for (var i = 0; i < array.length; i++) {
    let char = array[i];
    if ((char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') &&
        (array[i - 1] !== char)) {
      array.splice(i, 0, char);
    }
    
  }
  return array;
}

let test = function(input, result) {
  let stringifiedInput = JSON.stringify(input);
  let stringifiedResult = JSON.stringify(answer);
  
  if (stringifiedInput === stringifiedResult) {
    return 'Test is passing';
  } else {
    return 'Test is failing';
  }
}

test(doubleVowels(input), answer);
