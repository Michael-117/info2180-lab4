
function search(){
    var resultDiv = document.getElementById("result");
    var searchDiv = document.getElementById("search-query");
    var queryParam = document.forms["hero-form"]["searchbox"].value;

    
    if (!queryParam){
        fetch('superheroes.php')
        .then(Response => Response.text())
        .then(data =>{
            resultDiv.innerHTML = data;
        })
        .catch(error =>{
            alert(error)
        });
    }
    else{
        fetch('superheroes.php', {
            method: 'POST',
            body: queryParam
        })
        .then(Response => Response.text())
        .then(data =>{
            // resultDiv.innerHTML = queryParam;
        });
    }
    
};
