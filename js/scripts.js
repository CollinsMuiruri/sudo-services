//business logic
function Contact(name, id, service, location, contact, email, website) {
  this.fullName = name;
  this.idNumber = id;
  this.serviceOffered = service;
  this.location = location;
  this.personalContact = contact;
  this.emailAddress = email;
  this.websiteLink = website;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-full-name").val();
    var inputtedLastName = $("input#new-id").val();
    var inputtedFirstName = $("input#new-service").val();
    var inputtedLastName = $("input#new-location").val();
    var inputtedFirstName = $("input#new-contact").val();
    var inputtedLastName = $("input#new-email").val();
    var inputtedFirstName = $("input#new-").val();
    var inputtedLastName = $("input#new-id").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    console.log(inputtedFirstName);
  });
});