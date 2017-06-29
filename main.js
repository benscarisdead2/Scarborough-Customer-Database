fetch("https://randomuser.me/api/?results=15")
  .then(function (response) {
    response.json().then(function (data) {
      let stats = data.results;
      for (var i = 0; i < stats.length; i++) {
        let customers = document.querySelector('.customers');
        let content = document.createElement("p");
        let photo = document.createElement("img");
        customers.appendChild(photo);
        customers.appendChild(content);
        photo.src = stats[i].picture.large;
        content.innerHTML += stats[i].name.first;
        content.innerHTML += stats[i].name.last;
        content.innerHTML += stats[i].email;
        content.innerHTML += stats[i].cell;
      }
    })
  });