function retrieveInfo(event) {
  var fullInfo = {};
  event.preventDefault();
  var nameValue = $contactForm.elements.email.value;
  var emailValue = $contactForm.elements.name.value;
  var messageValue = $contactForm.elements.message.value;
  fullInfo.name = nameValue;
  fullInfo.email = emailValue;
  fullInfo.message = messageValue;
  event.preventDefault();
  console.log('Message Data:', fullInfo);
  $contactForm.reset();
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', retrieveInfo);
