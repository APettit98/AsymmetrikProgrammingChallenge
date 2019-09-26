# Asymmetrik Programming Challenge - Aedan Pettit
## Business Card OCR Problem - Implemented in Node.js
### Requirements
This program requires node/npm to be installed on your machine. 
The following packages and their dependencies are required: 
* fs
* readline
* common-substrings

Both packages should be able to be installed using npm.

### Usage
To run the program, navigate to the directory and use the command: 

```node -r esm index.js [-f filename | --file filename] [-m | --manual]```

Using the `-f` or `--filename` commands allow you to import a file to be parsed. 
The `-m` and `--manual` commands allow you to type text into the console in order for that to be parsed.
To signal that you have finished typing, use ctrl + c.
The `-r esm` flag is necessary to enable the use of the common-substrings package, which uses an 'import' statement instead of the typical 'require' syntax.

The output of the program will be three lines of text that display the name, phone number, and email extracted from the given text.
If the program is unable to find any of these items, the output will say "No Valid [item] Found".
