//~ string method practice
let HelloWorld = "HelloWorld"
console.log(HelloWorld.at(0)) // at()
console.log(HelloWorld.at(-1)) // at()
console.log(HelloWorld[0]) // []
console.log(HelloWorld.charAt(1)) // charAt()
console.log(HelloWorld.charAt(HelloWorld.length - 1)) // charAt() Get the last character in a string:
console.log(HelloWorld.charCodeAt(0)) // charCodeAt() Get the Unicode of the first character in a string:
console.log(HelloWorld.charCodeAt(HelloWorld.length - 1)) // charCodeAt() Get the Unicode of the last character in a string:
console.log(HelloWorld.codePointAt(0)) // codePointAt Get code point value at the first position in a string:
console.log(HelloWorld.codePointAt(HelloWorld.length - 1)) // codePointAt Get the Unicode of the last character in a string:
let Programmer = " Programmer";
console.log(HelloWorld.concat(Programmer)) //concat();
console.log(HelloWorld.endsWith("l")) //endsWith(); false
console.log(HelloWorld.endsWith("d")) //endsWith(); true
let text_2 = "Hello world, welcome to the universe.";
console.log(text_2.endsWith("world", 11)); //Check if the 11 first characters of a string ends with "world":
let char = String.fromCharCode(72); //fromCharCode(); H
console.log(char); // fromCharCode();
console.log(text_2.includes("world")); // includes(); true
console.log(text_2.includes("world", 12)); // includes(); false
console.log(text_2.indexOf("welcome")); // indexOf(); 13
console.log(text_2.indexOf("Welcome")); // indexOf(); -1
console.log(text_2.indexOf("o")); // indexOf(); 4
console.log(text_2.indexOf("o", 5)); // indexOf(); 7
let text_3 = "Hello planet earth, you are a great planet.";
console.log(text_3.lastIndexOf("planet")); //lastIndexOf() 36
console.log(text_3.lastIndexOf("planet", 20)); // lastIndexOf(); 6
console.log(text_3.length); // length; 43
let t1 = "h";
let t2 = "H";
console.log(t1.localeCompare(t2)); // The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal). -1
console.log(HelloWorld.match('ll')) // match() ** If the search value is a string, it is converted to a regular expression.
console.log(HelloWorld.match(/L/i)) // match()
console.log(HelloWorld.match(/LL/gi)) // match() null
console.log(HelloWorld.match('LL')) // match() null
let num = "5"
console.log(num.padEnd(3, "x")) // padEnd() 5xx
console.log(num.padStart(3, "x")) // padStart xx5
console.log(HelloWorld.repeat(2)) // repeat() HelloWorldHelloWorld
console.log(HelloWorld.replace("World", Programmer)) // replace() Hello Programmer
console.log(HelloWorld.replaceAll("l", "d")) // replaceAll() HeddoWordd
console.log(HelloWorld.replace(/l/g, 'd')) // replace() HeddoWordd
console.log(HelloWorld.search("e")) // search() 1
console.log(HelloWorld.search(/E/i)) // search() 1
console.log(HelloWorld.search('E')) // search() -1
console.log(HelloWorld.slice(0, 5)); // slice() Hello
console.log(HelloWorld.slice(5)); // slice() world
console.log(HelloWorld.slice(2, 9)); // slice() lloworl
console.log(HelloWorld.slice(0, 1)); // slice() H
console.log(HelloWorld.slice(-1)); // slice() d
console.log(HelloWorld.slice(0)); // slice() HelloWorld

//* split() Method
//! syntax ==> string.split(separator, limit)
let splittext = "How are you doing today?"
console.log(splittext)
console.log(splittext.split(' ')[1]) // split() are  //*plit the words, and return the second word:
console.log(splittext.split(''))
console.log(splittext.split(' ', 3)) // split() [ "How"," are"," you"]
console.log(splittext.split('d')) // split() ["How are you","oing to" ,'ay?'] length of 3
console.log(splittext.split()) // split() ["How are you doing today?"]

//* split() Method
//! syntax ==> string.startsWith(searchValue, start)
splittext = "How are you doing today? How to Learn";
console.log(splittext)
console.log(splittext.startsWith("How")) // startsWith() true
console.log(splittext.startsWith("How", 1)) // startsWith() false


//* sbustring() method
//! synt string.substring(start, end)
console.log(splittext.substring(4, 11)) // substring() are you
console.log(splittext.substring(1)) // substring() ow are you doing today? How to Learn
console.log(HelloWorld.substring(4, 1)) // substring() ell
console.log(HelloWorld.substring(-1)) // substring() If "start" is less than 0, it will start from index 0:
console.log(HelloWorld.substring(0, 1)) // substing() H
console.log(HelloWorld.substring(HelloWorld.length - 1))

console.log(HelloWorld.toLocaleLowerCase())
console.log(HelloWorld.toLocaleUpperCase())
console.log(HelloWorld.toLowerCase())
console.log(HelloWorld.toUpperCase())

//* toString()
//! Every JavaScript object has a toString() method.
// ~The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
// ~Normally, you will not use it in your own code.
console.log(HelloWorld.toString())
console.log(HelloWorld.toString());
/*
!Description
*The toString() method returns a string as a string.
*The toString() method does not change the original string.
*sThe toString() method can be used to convert a string object into a string. */
let HelloText = new String("Hello Sohan")
console.log(HelloText)
console.log(typeof HelloText)
console.log(HelloText.toString())
console.log(typeof HelloText.toString())

// * trim()
let text1 = "       Hello World!        ";
console.log(text1)
console.log(text1.trim()) // trim() remove space
console.log(text1.trimStart()) // trimstart() remove starting space
console.log(text1.trimEnd()) //  trimEnd() remove ending space
console.log(text1.replace(/^\s+|\s+$/gm, '')) // regEx remove space
console.log(HelloWorld.valueOf()) // valueOf() HelloWorld
console.log(HelloText.valueOf()); // valueOF() Hello Sohan