const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", async function () {
  const grades = document.getElementById("grades")
  const displayAverage = document.getElementById("average");
  const gradesArray = grades.value.split(",").map(String);
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
