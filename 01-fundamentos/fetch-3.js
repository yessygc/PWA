
//Petición POST
// https://reqres.in/api/users

let pelicula = {
  nombre: 'Free Guy',
  estreno: 2020
};

fetch( 'https://reqres.in/api', {
  method: 'POST', //PUT
  body: JSON.stringify( pelicula ), // data
  headers: {
    'Content-Type': 'application/json'
  }
})
.then( resp => resp.json() )
.then( console.log )
.catch( error => {
  console.log('Error en la petición');
  console.log(error);
});