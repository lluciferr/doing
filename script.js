const inputTask = document.querySelector("#inputTask");
const letsdo = document.querySelector("#letsdo");
const resume = document.querySelector("#resume");
const curr_doing = document.querySelector("#curr_doing");
const st = document.querySelector("#st");
const tm = document.querySelector("#tm");
const endtask = document.querySelector("#endtask");
const checktime = document.querySelector("#checktime");
const gohome = document.querySelector("#gohome");
const total = document.querySelector("#total");

// global varibles
var olddate;
var task;

var ongoing = localStorage.getItem("cn");
letsdo.addEventListener("click", () => {
  task = inputTask.value;
  curr_doing.innerText = task;
  olddate = new Date();
  inputTask.value =""

  // not req
  const sttime = olddate;
  console.log(sttime.toLocaleTimeString());

  st.innerText = olddate.getHours() + ":" + olddate.getMinutes();
  ongoing = true;
  localStorage.setItem("cu", task);
  localStorage.setItem("time", olddate);
 
});

const gettimediff = (diffMs) => {
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  var diffSec = Math.round(((diffMs % 86400000) % 3600000) / 1000); // minutes

  return ` ${diffHrs} : ${diffMins} :${diffSec}`;
};

checktime.addEventListener("click", () => {
  // update olddate from local storage

  var newDate = new Date();
  let diff = newDate - olddate;
  tm.innerText = gettimediff(diff);
});

endtask.addEventListener("click", () => {
  curr_doing.innerText = " currently doing task";
  st.innerText = "start time";
  tm.innerText = " time given ";
  localStorage.setItem("cu", "");
});

const getFromLoc = () => {
  var currInLoc = localStorage.getItem("cu");
  curr_doing.innerText = currInLoc;

  console.log(localStorage.getItem(currInLoc));

  if (localStorage.getItem(currInLoc) != "") {
    curr_doing.innerText = currInLoc;
    console.log("fetch to local storage for time and task");
    olddate = new Date( localStorage.getItem("time")); 
    // console.log(olddate);
	console.log(olddate);
    st.innerText = olddate.getHours() + ":" + olddate.getMinutes();
  }
};

if (localStorage.getItem("cu")) {
  getFromLoc();
}
