var maleNames = [
  "Kwasi",
  "Kwandwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function giveAkanName() {
  var birthday = document.getElementById("birthday").value;
  var gender = getGender();
  var date = new Date(birthday);
  var dayBorn = date.getDay();
  
  var akanName;
  
  if (
    gender === "male" 
    
  ) {
    akanName = maleNames[dayBorn];
    alert(
      "You were born on " +
        dayOfTheWeek[dayBorn] +
        " and your Akan name is " +
        akanName
    );
  } else if (
    gender === "female" 
    
  ) {
    akanName = femaleNames[dayBorn];
    alert(
      "You were born on " +
        dayOfTheWeek[dayBorn] +
        " and your Akan name is " +
        akanName
    );
  }
}
function getGender() {
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
}