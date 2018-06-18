// It never hurts to double check that our JavaScript file is working:
console.log('our JS file loaded!');

let requestObject;

function requestUserInfo() {

  let userNameString = document.getElementById("inputElem").value
  let userNameUrl = "https://api.github.com/users/" + userNameString;
  
  
  requestObject = new XMLHttpRequest();
  requestObject.addEventListener("load", handleResponse);
  requestObject.open( "GET", userNameUrl);
  requestObject.setRequestHeader("Accept", "application/json");
  requestObject.send();

}//end requestUsertInfo()


function handleResponse () {

  console.log(requestObject.responseText);

  let userResponseObject = JSON.parse(requestObject.responseText);
  console.log(userResponseObject.name);
  console.log(userResponseObject.avatar_url);

  // Now display the data on the page:
  displayUserData(userResponseObject.name, userResponseObject.avatar_url);
  
 
}//end handleResponse()

function displayUserData(name_p, avatar_p) {
  
  // Html elements:
  let userNameElemObject = document.getElementById("userNameElem");
  let userPhotoElemObject = document.getElementById("userPhotoElem");

  // Display user's data:
  userNameElemObject.textContent = name_p;
  userPhotoElemObject.src = avatar_p;
}


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// Set up event listener on button click
let submitButtonElem = document.getElementById("submitButton")
submitButtonElem.addEventListener("click", requestUserInfo);


