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

//$(document).ready(function() {
//$("#blanks").submit(function(event) {
///var person1Input = $("input#person1").val();
//var IDInput = $("#ID").val();

//var person = [person1Input, IDInput]

//$(".person1").append(person1Input);
//$(".ID").append(IDInput);
//$("#story").show();

//event.preventDefault();
//});
//});
//business logic

function Contact(Name, Identification, Phone, Email, Residence) {
	this.Name = Name;
	this.Identification = Identification;
	this.Phone = Phone;
	this.Email = Email;
	this.Residence = Residence;
};
Contact.prototype.fullName = function() {
	return this.Name + " " + this.Identification + " " + this.Phone + " " + this.Email + " " + this.Residence;
};
console.log("qwerty");

// user interface logic
$(document).ready(function() {
	$("form#blanks").submit(function(event) {
		event.preventDefault();

		var inputtedName = $("#person1").val();
		var inputtedID = $("#Identification").val();
		var inputtedPhone = $("#Phoneno").val();
		var inputtedEmail = $("#Email").val();
		var inputtedLocation = $("#Residence").val();


		var newContact = new Contact(inputtedName, inputtedID, inputtedPhone, inputtedEmail, inputtedLocation);
		console.log(" tyuio" + newContact.Name + inputtedName);
		$(".contact").append('<li class="contact">' + newContact.fullName() + '</li>');

		// $("#person1").val("");
		// $("#Identification").val("");
		// $("#Phone").val("");
		// $("#Email").val("");
		// $("#Residence").val("");


	});


	$("#myModal").click(function() {
		$("#modal").show();
	});
	$(".close").click(function() {
		$("#modal").hide();
	});
});

$(document).ready(function() {
  $('#myModal').attr('disabled', true);
  $('input:text').keyup(function() {
    var disable = false;
    $('input:text').each(function() {
      if ($(this).val() == "") {
        disable = true;
      }
    });
    $('#myModal').prop('disabled', disable);
  });
});

});
