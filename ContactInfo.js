'use strict';

// This class stores contact information
// it contains a name, phone number, and email address
class ContactInfo{
  constructor(name, phoneNumber, email){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  getName(){
    if(this.name != ""){
      return this.name;
    }
    else{
      return "No Valid Name Found";
    }
  }

  getPhoneNumber(){
    if(this.phoneNumber != ""){
      return this.phoneNumber;
    }
    else{
      return "No Valid Phone Number Found";
    }
  }

  getEmailAddress(){
    if(this.email != ""){
      return this.email;
    }
    else{
      return "No Valid Email Found";
    }
  }
}

module.exports = ContactInfo
