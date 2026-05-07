const calcbtn = document.getElementById("calc");

calcbtn.addEventListener("click", async function () {
  const grades = document.getElementById("grades")
  const gradesArray = grades.value.split(",").map(String);
  const displayAverage = document.getElementById("average");
  var gradeAverage = 0

  for (const object of gradesArray) {
    var newObject = object.replace(/%/g, '')
    gradeAverage += parseFloat(newObject)
  }
  if (gradesArray.length <= 1) {
    displayAverage.textContent = "Please Enter Grades."
    return
  }
  else{
    displayAverage.textContent = (gradeAverage / gradesArray.length).toFixed(1).toString() + "%"
  }
});
