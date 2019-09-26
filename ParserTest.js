'use strict';

var fs = require('fs');

var BusinessCardParser = require("./BusinessCardParser.js");
var ContactInfo = require("./ContactInfo.js");
var parser, info

// Testing with test1.txt
parser = new BusinessCardParser("f", "./tests/test1.txt")
info = parser.getContactInfo(parser.document);

if(info.getName() != "Mike Smith"){
  console.log("BusinessCardParser failed when testing test1.txt. Expected: Mike Smith, Received: " + info.getName());
}
else if(info.getPhoneNumber() != "4105551234"){
  console.log("BusinessCardParser failed when testing test1.txt. Expected: 4105551234, Received: " + info.getPhoneNumber());
}
else if(info.getEmailAddress() != "msmith@asymmetrik.com"){
  console.log("BusinessCardParser failed when testing test1.txt. Expected: msmith@asymmetrik.com, Received: " + info.getEmailAddress());
}
else{
  console.log("All tests passed for test1.txt")
}

// Testing with test2.txt
parser = new BusinessCardParser("f", "./tests/test2.txt")
info = parser.getContactInfo(parser.document);

if(info.getName() != "Lisa Haung"){
  console.log("BusinessCardParser failed when testing test2.txt. Expected: Lisa Haung, Received: " + info.getName());
}
else if(info.getPhoneNumber() != "4105551234"){
  console.log("BusinessCardParser failed when testing test2.txt. Expected: 4105551234, Received: " + info.getPhoneNumber());
}
else if(info.getEmailAddress() != "lisa.haung@foobartech.com"){
  console.log("BusinessCardParser failed when testing test2.txt. Expected: lisa.haung@foobartech.com, Received: " + info.getEmailAddress());
}
else{
  console.log("All tests passed for test2.txt")
}

// Testing with test3.txt
parser = new BusinessCardParser("f", "./tests/test3.txt")
info = parser.getContactInfo(parser.document);

if(info.getName() != "Arthur Wilson"){
  console.log("BusinessCardParser failed when testing test3.txt. Expected: Arthur Wilson, Received: " + info.getName());
}
else if(info.getPhoneNumber() != "17035551259"){
  console.log("BusinessCardParser failed when testing test3.txt. Expected: 17035551259, Received: " + info.getPhoneNumber());
}
else if(info.getEmailAddress() != "awilson@abctech.com"){
  console.log("BusinessCardParser failed when testing test3.txt. Expected: awilson@abctech.com, Received: " + info.getEmailAddress());
}
else{
  console.log("All tests passed for test3.txt")
}

// Testing with customTest1.txt
parser = new BusinessCardParser("f", "./tests/customTest1.txt")
info = parser.getContactInfo(parser.document);

if(info.getName() != "Aedan Pettit"){
  console.log("BusinessCardParser failed when testing customTest1.txt. Expected: Aedan Pettit, Received: " + info.getName());
}
else if(info.getPhoneNumber() != "5404506452"){
  console.log("BusinessCardParser failed when testing customTest1.txt. Expected: 5404506452, Received: " + info.getPhoneNumber());
}
else if(info.getEmailAddress() != "apettit20@wooster.edu"){
  console.log("BusinessCardParser failed when testing customTest1.txt. Expected: apettit20@wooster.edu, Received: " + info.getEmailAddress());
}
else{
  console.log("All tests passed for customTest1.txt")
}

// Testing with customTest2.txt
parser = new BusinessCardParser("f", "./tests/customTest2.txt")
info = parser.getContactInfo(parser.document);

if(info.getName() != "No Valid Name Found"){
  console.log("BusinessCardParser failed when testing customTest2.txt. Expected: No Valid Name Found, Received: " + info.getName());
}
else if(info.getPhoneNumber() != "7712304433"){
  console.log("BusinessCardParser failed when testing customTest2.txt. Expected: 7712304433, Received: " + info.getPhoneNumber());
}
else if(info.getEmailAddress() != "jon.smith@someco.org"){
  console.log("BusinessCardParser failed when testing customTest2.txt. Expected: jon.smith@someco.org, Received: " + info.getEmailAddress());
}
else{
  console.log("All tests passed for customTest2.txt")
}
