fetch(`http://localhost:8081/api/courses`)
.then((response) => response.json())
.then((data) => { 
    console.log(data);
})

const newCoBtnEl = document.getElementById(`newCoBtn`);

newCoBtnEl.addEventListener(`click`, () => {
    window.location.href = `newcourse.html`
})
