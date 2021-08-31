
var url = 'http://localhost:8000/projecttypes'
var data = []
fetch(url)
    .then((response) => response.json())
    .then(function(e){
        data = e ;
        return data
    })
console.log(data);