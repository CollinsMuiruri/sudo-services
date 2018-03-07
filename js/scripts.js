//business logic
function Offer(name, id, service, location, contact, email, website) {
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
  $("form#new-Offer").submit(function(event) {
    event.preventDefault();

    var inputtedFullName = $("input#new-full-name").val();
    var inputtedIdNumber = $("input#new-id").val();
    var inputtedServiceOffered = $("input#new-service").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedPersonalContact = $("input#new-contact").val();
    var inputtedEmailAddress = $("input#new-email").val();
    var inputtedWebsiteLink = $("input#new-website").val();

    var newContact = new Offer(inputtedFullName, inputtedIdNumber, inputtedServiceOffered, inputtedLocation, inputtedPersonalContact, inputtedEmailAddress, inputtedWebsiteLink);
    //console.log(inputtedFullName, inputtedServiceOffered, inputtedPersonalContact);
  });
});