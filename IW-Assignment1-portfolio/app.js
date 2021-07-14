fetch("https://api.github.com/users/rononoa13")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);

    document.getElementById("profileImage").src = data["avatar_url"];

// shows paragraph after click of anchor tag`with id myProject`
    // let project = document.getElementById('showProject')
    // project.addEventListener("click", function() {
    //     // document.getElementById('myProject').textContent = `I have ` + data["public_repos"] + ` repos`
        
    // })
    // console.log(project)
    // return data;
  });


  fetch("https://api.github.com/users/rononoa13/repos")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    // shows paragraph after click of anchor tag`with id myProject`
    let project = document.getElementById('showProject')
    project.addEventListener("click", function() {
    
        for(let i=0; i < data.length; i++ ) {
            document.getElementById('myProject').innerHTML += "<li>" + data[i].name + "</li>";
            // document.getElementById('myProject').textContent += data[i].name + "\n" 
  
        }

    })
  });