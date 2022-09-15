let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? : our matching text starts with http or https
// :\/\/ :  //
// '(?:)' : non-capturing group : which means the words between parenthess must be matched but not included in the result
// [-\w]+ : one or more of ('-' then a word character)
// \. : '.'
// ? : to refer that the words before "?" may be there or not
// \.\w+ : '.' then one word character or more
// \/?.* :  may be there is '/' or not , then may be there are more than one of '.' or may be there is not at all. 