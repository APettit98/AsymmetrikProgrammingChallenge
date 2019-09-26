# Asymmetrik Programming Challenge - Aedan Pettit
## Business Card OCR Problem - A Command-Line Tool Implemented in Node.js
### Requirements
This program requires node/npm to be installed on your machine. 
The following packages and their dependencies are required: 
* fs
* readline
* common-substrings

All packages should be able to be installed using npm.

### Usage
To run the program, navigate to the directory and use the command: 

```node -r esm index.js [-f filename | --file filename] [-m | --manual]```

Using the `-f` or `--filename` commands allow you to import a file to be parsed. 
The `-m` and `--manual` commands allow you to type text into the console in order for that to be parsed.
To signal that you have finished typing, use ctrl + c.
The `-r esm` flag is necessary to enable the use of the common-substrings package, which uses an 'import' statement instead of the typical 'require' syntax.

The output of the program will be three lines of text that display the name, phone number, and email extracted from the given text.
If the program is unable to find any of these items, the output will say "No Valid [item] Found".

#### Example
Input: ```node -r esm index.js -f tests/test1.txt```

Output: 
    Name: Mike Smith
    Phone: 4105551234
    Email: msmith@asymmetrik.com

### Testing
I created a testing script to ensure that the program works with several use cases. 
To run the test script use the command:

```node -r esm ParserTest.js```

This will test the parser against each of the 5 test files contained in the tests folder. 
If the tests pass, the program will explicitly say so, otherwise it will say when it failed, what it expected to receive, and what it actually received.

### Program Structure
#### ContactInfo
The ContactInfo class is fairly simple.
Its constructor takes a name, phone number, and email, which as stored as member variables.
It implements three functions: `getName()`, `getPhoneNumber()`, and `getEmailAddress()`, each of which returns the given class variable.
If the variable is an empty string, the functions will instead return "No Valid [member] Found".

#### BusinessCardParser
This class is where the actual parsing algorithm is implemented.
The constructor takes a type flag and a document value.
The type flag is either 'f' or 'm' depending on the usage type selected by the user. 
If the flag is 'f' then the document value is the filename; the file is then read into a member variable called `document`.
If the flag is 'm' then the document value is the text that was read from stdin, which is then assigned to a member variable called `document`.

The class also implements a `getContactInfo(String document)` function, which is where the parsing occurs. 
This function initializes the name, phone number, and email to an empty string.
Then it iterates through the text line-by-line. 
While iterating, it checks if the line is a phone number or email address.
Every line is checked to see if it is a phone number unless it contains the word "Fax", or the phone number has already been found.
A line is determined to be a phone number if the string of all the numbers in the line is either 10 or 11 characters long.
A line is determined to be an email address if it includes the '@' and '.' characters, and has exactly three characters after the '.'.
Once a line is found to be the phone number or email, the proper value is assigned to the proper variable and the line is removed from the array.

Once the lines have been iterated through, the lines that have not yet been removed are checked to see if they contain the name.
A line is considered to be the name if it has a similar substring of at least 3 characters with first part of the emaill address.

After this is complete, the function returs a ContactInfo object with the parsed values.

#### index.js
The index.js file is what sets the program into motion.
It first checks that the user entered at least 1 additional argument after the script path.
If this is not the case it gives the user instructions on how to use the program, and exits the program with code 1.
The program then checks for the appropriate arguments.
If the user chose to enter text via file, then the a BusinessCardParser object is created with the "f" flag and the filename.
If the user chose to enter text manually, then the readline package is used to retrieve text from stdin.
When the user signals that they are done typing, a BusinessCardParser object is created with the "m" flag, and the string that was read.
In each case, the `getContactInfo` function is then called, and the results are printed to the console.

### Other notes
Just so you are aware, I am not very familiar with Node.js so please take that into consideration when you are assessing my code. I have seen it before, so I was familiar with the syntax, but the only time I've ever used it was during an internship over 2 years ago when I was still just learning how to code. 

Thank you for the opportunity to show you what I can do! This was a really well-done assessment and the open-ended timeline helped make this as low-stress as possible which I really appreciate.

