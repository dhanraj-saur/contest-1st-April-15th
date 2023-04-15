let formSubmit = document.getElementById("formSubmit");
document.getElementById("error").style.display = "none"
document.getElementById("success").style.display = "none"
const addUser = document.getElementById("btn");
let userData = [];
addUser.addEventListener("click", (event) => {
  event.preventDefault();
  let el = formSubmit.elements;
  if (validateInput(el)) {
    let formData = {
      id: userData.length + 1,
      name: el["fname"].value,
      profession: el["profession"].value,
      age: el["age"].value
    }
    addTask(formData)
    document.getElementById("error").style.display = "none"
  } else {
    document.getElementById("error").style.display = "block"
  }
});
function validateInput(el) {
  if (el['fname'].value == "" || el['profession'].value == "" || el['age'].value == "") {

    return false
  } else {

    return true
  }
}

function addTask(data) {
  userData.push(data)
  document.getElementById("success").style.display = "block"
  displayData(userData)
  setTimeout(() => {
    document.getElementById("success").style.display = "none"
  }, 2000)
  formReset()
};
function displayData(userData){
  let mydiv = document.createElement('div');
  mydiv.classList.add('display_data');
  document.getElementById("displayData").appendChild(mydiv)
 var  html = ""
 
 if(userData.length >0){
 
  userData.map((data) => {
    html = `
      <div data-id="${data.id}" class="display">
      <div> ID : ${data.id}</div>
      <div>Name: ${data.name}</div>
      <div>Profession: ${data.profession}</div>
      <div>Age: ${data.age}</div>
      </div>
      <div >
      <button class="button" onclick="deleteUser(${data.id})">Delete User</button>
      </div>
     `
  });
 
}else{
  html=""
}

mydiv.innerHTML = html;
  
}
function formReset() {
  let el = formSubmit.elements;
  el["fname"].value = "";
  el["profession"].value = "";
  el["age"].value = "";
}
function deleteUser(id){
  newArr= userData.filter((item)=>item.id != id)
 userData=[...newArr]
 console.log(userData)
//  //userData.push(newArr)
//  displayData(userData)
}

