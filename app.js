document.getElementById("button1").addEventListener('click', loadTxt);

function loadTxt() {
    fetch('data.txt')
    .then(function(response){
       return response.text();
    })
    .then(function(data){
        document.getElementById('result').innerHTML = data;
    })
}