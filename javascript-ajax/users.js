var getUser = document.querySelector('#user-list');
var newReq = new XMLHttpRequest();
newReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
newReq.responseType = 'json';
newReq.addEventListener('load', loadUsers);
function loadUsers(event) {
  console.log(newReq.status);
  console.log(newReq.response);
  for (var i = 0; i < newReq.response.length; i++) {
    var newList = document.createElement('li');
    newList.textContent = newReq.response[i].name;
    getUser.appendChild(newList);
  }
}
newReq.send();
