// console.log("Hello World")

const name = "Hitesh";
const repoCount = 50;

// console.log(name + repoCount + "Valule")
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sohan-hc-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 4);
console.log(newString); // Soha

const anotherString = gameName.slice(-12, 5);
console.log(anotherString); //

const anotherStr = name.slice(-6, 1)
console.log(anotherStr)

const newStringOne = "   Sohan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20coudhar";
console.log(url.replace("%20", "-"));
console.log(url.includes("sohan"));
gameName.split("-").forEach((str) => {
    console.log(str.repeat(5));
});

//* String
//~A JavaScript string is zero or more characters written inside quotes.
let text = "John Doe";
console.log(text);

//~ You can use single or double quotes:
let carName1 = "Volvo SC90"; // * Double quotes
let carName2 = "Volvo SC90"; // * Single quotes
console.log(carName1, carName2);

//! Note
// ~ Strings created with single or double quotes works the same.
// ~ There is no difference between the two.

//* Quotes Inside Quotes
//~ You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let answer1 = "It's alright";
let answer2 = "He is call 'Johnny'";
let answer3 = 'He is call "Johnny"';
console.log(answer1, answer2, answer3);

//*Template Strings
//~ Templates were introduced with ES6 (JavaScript 2016).
//~ Templates are strings enclosed in backticks (`This is a template string`).
//~ Templates allow single and double quotes inside a string:

let text1 = `He's often called "Johnny"`;
console.log(text1);

//* String Length
//~ To find the length of a string, use the built-in length property:

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text2.length;
console.log(length);

//* Escape Characters
//~ Because strings must be written within quotes, JavaScript will misunderstand this string:

// let text3 = "We are the so-called "Vikings" from the north.";

//~ The string will be chopped to "We are the so-called ".
//~ To solve this problem, you can use an backslash escape character.
//~ The backslash escape character (\) turns special characters into string characters:

//*Examples
//~ \" inserts a double quote in a string:

let text3 = 'We are the so-called "Vikings" from the north.';
console.log(text3);

//~ \' inserts a single quote in a string:

let text4 = "It's alright.";
console.log(text4);

//~ \\ inserts a backslash in a string:

let text5 = "The character \\ is called backslash.";
console.log(text5);

//*Template Strings
//~ Templates were introduced with ES6 (JavaScript 2016).
//~ Templates are strings enclosed in backticks (`This is a template string`).
//~ Templates allow multiline strings:

let text6 =
    `The quick
 brown fox
 jumps over
 the lazy dog`;
console.log(text6, `Templates allow multiline strings:`)

//*JavaScript Strings as Objects
//~ Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
//~ But strings can also be defined as objects with the keyword new:
let y = new String("John");

//* Example
let x1 = "John"; //x1 is a string
let y1 = new String("John") // y1 is an object
console.log(typeof x1, typeof y1)

//!Do not create Strings objects.
//! The new keyword complicates the code and slows down execution speed.
//! String objects can produce unexpected results:

//~ When using the == operator, x and y are equal:
console.log(x1 == y1, `"x1 == y1" Strings and objects cannot be safely compared.`) // output is true

//~ When using the === operator, x and y are not equal:
console.log(x1 === y1, `"x1 === y1" Strings and objects cannot be safely compared.`) // output is false

//! Note the difference between (x==y) and (x===y).

let x2 = new String("Sohan"); // x2 is an object
let y2 = new String("Sohan"); // y2 is an object
console.log(x2 == y2, `"x2 == y2" JavaScript objects cannot be compared.`);
console.log(x2 === y2, `"x2 === y2" JavaScript objects cannot be compared.`);
//!Comparing two JavaScript objects always returns false
console.log(`Comparing two JavaScript objects 'always' returns 'false'`)


const mytext = "javaSCRIPT javaScript";

let pattern = /javaScript/i;
let newtext = mytext.replace(pattern, "JS")
console.log(newtext)

pattern = /javaScript/gi;
newtext = mytext.replace(pattern, "JS")
console.log(newtext)
console.log(mytext)

var str = "JavaScript";
var index = str.indexOf("a");
var index2 = str.lastIndexOf("a");
// console.log(index);
console.log(index2);
console.log(str.indexOf("a", 1 + 1));
console.log(str.indexOf("a", index + 1) === index2);

let str2 = "sohan mohan singh"
let m = str2.split();
console.log(m)


console.log("***************************");

//* Basic String Methods

//~Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

//* JavaScript String Length
let myName = "Hello My Name is Sohan";
console.log(myName)
console.log(`The length of the string is: ${myName.length}`);

//* Extracting String Characters
//~ There are 4 methods for extracting string characters:
//^ The at(position) Method
//^ The charAt(position) Method
//^ The charCodeAt(position) Method
//^ Using property access [] like in arrays

//^ 1 JavaScript String charAt()
//~The charAt() method returns the character at a specified index (position) in a string:

let character = myName.charAt(0)
console.log(`The charAt() method returns the character at a given position in a string: ${character}`)

//^2 JavaScript String charCodeAt()
//~The charCodeAt() method returns the code of the character at a specified index in a string:
//~The method returns a UTF-16 code (an integer between 0 and 65535).
let charCodeAT = myName.charCodeAt(0)
console.log(`The charCodeAt() method returns the unicode of the character at a given position in a string: ${charCodeAT}`)

//^ JavaScript String at()
//~The at() method returns the character at a specified index (position) in a string.
//~ES2022 introduced the string method at():
let letter = myName.at(7);
let letter1 = myName.at(-5);
// letter = myName[1]
console.log(`The bracked notation [] returns an indexed element from a string: ${letter}, ${letter1}`)


myName[0] = "A"; // Gives no error, but does not work
console.log(myName)

//* Extracting String Parts
// ~ There are 3 methods for extracting a part of a string:
//~  slice(start, end)
// ~ substring(start, end)
// ~ substr(start, length)

//* JavaScript String slice()
//~slice() extracts a part of a string and returns the extracted part in a new string.
//~ The method takes 2 parameters: start position, and end position (end not included).
//!JavaScript counts positions from zero.
// ~ First position is 0.
// ~ Second position is 1.
let part = myName.slice(0, 6)
part = myName.slice(6)
part = myName.slice(-5)
part = myName.slice(-13, -5)
console.log("The sliced (extracted) part of the string is:", part);

//* JavaScript String substring()
//~substring() is similar to slice().
// ~The difference is that start and end values less than 0 are treated as 0 in substring().
part = myName.substring(0, 14)
console.log('The substring() method extract a part of a string and returns the extracted parts in a new string:', part);
//~ If you omit the second parameter, substring() will slice out the rest of the string.

//* JavaScript String substr()
//~substr() is similar to slice().
//~ The difference is that the second parameter specifies the length of the extracted part.
part = myName.substr(6, 16)
part = myName.substr(10)
console.log('The substr() method extract a part of a string and returns the extracted parts in a new string:', part);
//~If you omit the second parameter, substr() will slice out the rest of the string.


//*Converting to Upper and Lower Case
//*A string is converted to upper case with toUpperCase():
//* A string is converted to lower case with toLowerCase():
part = myName.toLowerCase();
console.log('Convert string to lower case:', part)
part = myName.toUpperCase();
console.log("Convert string to upper case:", part)

//* JavaScript String concat()

//~ concat() joins two or more strings:
let firstName = "Sohan Singh";
let scondName = "Rajput";
console.log('The concat() method joins two or more strings:', firstName.concat(" ", scondName))

//* JavaScript String trim()
//~ The trim() method removes whitespace from both sides of a string:
let Hello = "        Hello Wordl        ";
let Hello$ = Hello.trim();
let Hello_$ = Hello.trimStart();
let Hello$_ = Hello.trimEnd();
console.log('Length Hello =', Hello.length, Hello)
console.log('Length Hello$ =', Hello$.length, Hello$)
console.log('Length Hello_$ =', Hello_$.length, Hello_$)
console.log('Length Hello$_ =', Hello$_.length, Hello$_)

//*JavaScript String Padding
//~ ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

//* JavaScript String padStart()
//~ The padStart() method pads a string from the start.
//~ It pads a string with another string(multiple times) until it reaches a given length.

let Padding = '5';
let padded = Padding.padStart(4, "0")
padded = Padding.padStart(5, 'x')
console.log('It pads the string with another string (multiple times) until it reaches a given length.', padded)

//!Note
//~ The padStart() method is a string method.
//~ To pad a number, convert the number to a string first.
//~ See the example below.

let numb = '8270';
let numbs = "6354"
let pad = numb.toString();
console.log(pad.padStart(10, 'x'), numb)
console.log(pad.padStart(10, 'x'), numb)
console.log(numbs.padEnd(10, 'x'), numbs)

//* JavaScript String repeat()
// ~ The repeat() method returns a string with a number of copies of a string.
// ~ The repeat() method returns a new string.
// ~ The repeat() method does not change the original string.

let coder = "Hay Coderes !";
console.log(coder.repeat(2));
console.log(coder.repeat(4));

//* Syntax
// string.repeat(count)
// * Parameters
// Parameter	Description
// count	   Required. The number of copies wanted.
// *Return Value
// Type	Description
// String	A new string containing the copies.

//*Replacing String Content
//~ The replace() method replaces a specified value with another value in a string:
let mytexts = "My Name is Replaces!"
let newmytext = mytexts.replace("Replaces", "Sohan")
console.log(mytexts)
console.log(newmytext)

//!Note
// ~The replace() method does not change the string it is called on.

// ~The replace() method returns a new string.

// ~The replace() method replaces only the first match

// ~If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

//! By default, the replace() method replaces only the first match:

let _text = "Please visit Microsoft and Microsoft!";
let newText = _text.replace("Microsoft", "W3Schools");
console.log(_text)
console.log(newText)

//! By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

console.log('The replace() method is case sensitive. MICROSOFT (with upper-case) will not be replaced.', _text.replace("MICROSOFT", "W3SCHOOLS"))

//! To replace case insensitive, use a regular expression with an /i flag (insensitive):

console.log('To replace case insensitive, use a regular expression with an /i flag (insensitive):', _text.replace(/MICROSOFT/i, "W3SCHOOLS"))

//! To replace all matches, use a regular expression with a /g flag (global match):
console.log('To replace case insensitive, use a regular expression with an /i flag (insensitive):', _text.replace(/MICROSOFT/gi, "W3SCHOOLS"))

//* JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():
let tex_t = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(tex_t)
tex_t = tex_t.replaceAll("Cats", "Dogs")
tex_t = tex_t.replaceAll("cats", "dogs")
console.log(tex_t)

//* Converting a String to an Array
//~A string can be converted to an array with the split() method
let names = "sohan singh chadana"
console.log(names.split())
console.log(names.split(''))
console.log(names.split(' '))
console.log(names.split('|'))
console.log(names.split(','))

//If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

///* JavaScript String Search

//* JavaScript String indexOf()
//~ The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

let textinx = "Please locate where 'locate' occurs!";
console.log(textinx)
console.log(`The position of the first occurrence of "locate" is: `, textinx.indexOf("locate"))

//* JavaScript String lastIndexOf()
//~ The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

console.log('The position of the last occurrence of "locate" is: ', textinx.lastIndexOf("locate"))

//* JavaScript String search()
// ~The search() method searches a string for a string (or a regular expression) and returns the position of the match:

console.log('The position of the first occurrence of "locate" is: ', textinx.search('locate'))
console.log('The position of the first occurrence of "locate" is: ', textinx.search(/Locate/i))

/* //*Did You Notice?
~The two methods, indexOf() and search(), are equal?

~They accept the same arguments (parameters), and return the same value?

~The two methods are NOT equal. These are the differences:

~The search() method cannot take a second start position argument.
~The indexOf() method cannot take powerful search values (regular expressions).
~You will learn more about regular expressions in a later chapter.*/

//* JavaScript String includes()
// ~The includes() method returns true if a string contains a specified value.

//~ Otherwise it returns false.


function isString(input) {
    return typeof input === "string"
}
console.log(isString("w3resource"))
console.log(isString([1, 2, 3, 4, 0]))

function isBlank(blank) {
    return blank.trim() === "";
}
console.log(isBlank(' '))
console.log(isBlank('abc'))

function string_to_array(arrgu) {
    return arrgu.split(" ")
}
console.log(string_to_array("Robin Singh"))

//?29. Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

function search_word(stR, word) {
    // let count = 0;
    // const words = stR.split(" ");
    // for (let i = 0; i <= words.length; i++) {
    //     if (words[i] === word[0]) {
    //         count++;
    //     }
    // }

    const regex = new RegExp(word, "g");
    const matches = stR.match(regex);
    return `${word} was found ${matches ? matches.length : 0} times.`;
    // return `'${word}' was found ${count} times.`
}

console.log(search_word("The quick brown fox", "fox"))
console.log(search_word('aa, bb, cc, dd, aa', 'aa'))

// function search_word(str, word) {
//     const regex = new RegExp('\\b' + word + '\\b', 'g');
//     const matches = str.match(regex);

//     if (matches) {
//         return `'${word}' was found ${matches.length} times.`;
//     } else {
//         return `'${word}' was not found.`;
//     }
// }

// Test case
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));


// Test cases
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));


let first = "The complete JavaScript Course Complete !";
let matches = first.match(/Complete/gi);
// let matches = first.match(/Complete/gi);
console.log(matches)