fetch('./list.json')
    // .then((response) => response.json())
    // .then((json) => console.log(json));
var data = JSON.parse(list);
alert(data[0].firstname);