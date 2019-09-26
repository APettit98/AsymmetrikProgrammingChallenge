#!/user/bin/env node

// Necessary for using object-oriented features
'use strict';

// Import BusinessCarsParser class
var BusinessCardParser = require('./BusinessCardParser.js');

// Import ContactInfo class
var ContactInfo = require('./ContactInfo.js');

// Used to read from stdin
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var parser, info;

// Check for correct usage
if(process.argv.length < 3){
  console.log("Error: invalid usage, user must specify method of text input");
  console.log("Correct usages: node -r esm index.js -f[--file] 'filename'");
  console.log("node -r esm index.js -m[--manual]")
  process.exit(1);
}

// User wants to pass text via file
else if(process.argv[2] == '-f' || process.argv[2] == "--file"){
  parser = new BusinessCardParser("f", process.argv[3]);
  info = parser.getContactInfo(parser.document);
  console.log("Name: " + info.getName());
  console.log("Phone: " + info.getPhoneNumber());
  console.log("Email: " + info.getEmailAddress());
  process.exit(0);
}
// User wants to pass text by writing to stdin
else if(process.argv[2] == '-m' || process.argv[2] == "--manual"){
  var docstring = ""
  readline.on('line', (ln) =>{
    docstring += ln;
    docstring += "\n";
  }).on('close', function(){
    parser = new BusinessCardParser("m",docstring);
    info = parser.getContactInfo(parser.document);
    console.log("Name: " + info.getName());
    console.log("Phone: " + info.getPhoneNumber());
    console.log("Email: " + info.getEmailAddress());
    process.exit(0);
  })
}
