fetch(`http://localhost:8081/api/courses`)
.then((response) => response.json())
.then((data) => { 
    console.log(data);
})