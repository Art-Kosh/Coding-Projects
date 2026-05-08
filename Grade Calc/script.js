const calcbtn = document.getElementById("calc");

calcbtn.addEventListener("click", async function () {
  const grades = document.getElementById("grades")
  const gradesArray = grades.value.split(",").map(String);
  const displayAverage = document.getElementById("average");
  var gradeTotal = 0

  for (const object of gradesArray) {
    gradeTotal += parseFloat(object)
  }
  
  if (gradesArray.length <= 1) {
    displayAverage.textContent = "Please Enter Grades"
    return
  }
  else if (isNaN(gradeTotal)) {
    displayAverage.textContent = "Not Valid"
    return
  }
  else{
    displayAverage.textContent = (gradeTotal / gradesArray.length).toFixed(1).toString() + "%"
    return
  }
});
