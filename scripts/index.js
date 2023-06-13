const tbodyEl = document.getElementById(`courseTable`)

fetch(`http://localhost:8081/api/courses`)
.then((response) => response.json())
.then((data) => { 

   const tbodyEl = document.querySelector("tbody");
   tbodyEl.innerHTML = "";

   const row = tbodyEl.insertRow();

   const cellDept = row.insertCell();
   cellDept.innerHTML = data.dept;


})

const newCoBtnEl = document.getElementById(`newCoBtn`);

newCoBtnEl.addEventListener(`click`, () => {
    window.location.href = `newcourse.html`
})
