fetch('https://api.github.com/users/rononoa13')
    .then(response => response.json())
    .then(function(data) {
        console.log(data)

        
    })