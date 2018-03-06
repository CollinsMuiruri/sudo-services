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
	return this.Name + this.Identification + this.Phone + this.Email + this.Residence;
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
});