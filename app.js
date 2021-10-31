
function search(){
    fetch('superheroes.php')
        .then(Response => Response.text())
        .then(data =>{
            alert(data)
        })
        .catch(error =>{
            alert(error)
        });
}