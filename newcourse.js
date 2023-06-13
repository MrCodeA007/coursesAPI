const deptEl = document.getElementById(`dept`);
const courseNumEl = document.getElementById(`courseNum`);
const courseNameEl = document.getElementById(`courseName`);
const instructorEl = document.getElementById(`instructor`);
const startDateEl = document.getElementById(`startDate`);
const numDaysEl = document.getElementById(`numDays`);
const addBtnEl = document.getElementById(`addBtn`);
//----------------------------------------------------------------
addBtnEl.addEventListener(`click`, () => {
  let courseData = {
    dept: deptEl.value,
    courseNum: courseNumEl.value,
    courseName: courseNameEl.value,
    instructor: instructorEl.value,
    startDate: startDateEl.value,
    numDays: numDaysEl.value,
  };
  //console.log(courseData) working

  const options = {
    method: "POST",
    body: JSON.stringify(courseData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  const url = "http://localhost:8081/api/courses";
  fetch(url, options)
    .then((response) => response.json())
    .then((newCourse) => {
      window.location.href = `index.html`;
    });
});
