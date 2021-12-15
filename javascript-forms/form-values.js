var fullInfo = {};
function handleSubmit(event) {
  event.preventDefault();
  console.log('Message Data:', fullInfo);
  $contactForm.reset();
}
function retrieveInfo(event) {
  event.preventDefault();
  var nameValue = $contactForm.elements.email.value;
  var emailValue = $contactForm.elements.name.value;
  var messageValue = $contactForm.elements.message.value;
  fullInfo.name = nameValue;
  fullInfo.email = emailValue;
  fullInfo.message = messageValue;
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', retrieveInfo);
$contactForm.addEventListener('submit', handleSubmit);
