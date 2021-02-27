const url = 'https://randomuser.me/api/';

const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');   // this point to the <span id='address'> tag on html file.
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)//  <- ------- the funtion be passed in as a parapmeter, then the JS fethc funcion will give the data from the api to 
                        //              whatever pararmter the updateProfile function have; in this case is 'profile' here
    .catch(err => {
      console.error(err)
    })
});

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}
//explaintion(in general): 
//profile.results[0].picture.medium;
// that is mean now the varibale 'profile' have/contain all the data from the api(the JSON data), that is why we start with 'profile.something ....'
// In here 'profile' can be any other name
// for results[0]:
// because we did not know what many data were given back from the api, (it may be one, or more ), but at lest there must be one there!
// so we treat the 'results' as a array, we try getting data with the first block, so start with index [0]
// why here we use 'results'?   can it be anything else ?
// if you past the url into brower, you will see the json data start with results...., that is why, because here we just follow whatever JSON file name the data.
// same as the   .name.first  or   results[0].location.street.number   |  all just follow whatever json data name it.

//ex: what is JSON data ?
//  you can see JSON data as a BIG box, which may contain many samller box inside of it :
//  outerBox { innerBox {innnerBox{innnnerBox{innnnnnerBox{ Key:"I am the data!"}}}}}
// each level of box can have their own data or contain with another box 
// we can asscess the data in some level by call name :   var theKey =  outerBox.innerBox.innnerBox.innnnerBox.innnnnnerBox.Key;
function updateProfile(profile) {
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
  username.innerHTML = profile.results[0].login.username;
  email.innerHTML = profile.results[0].email;
  address.innerHTML = profile.results[0].location.street.number+" "
  +profile.results[0].location.street.name+", "
  +profile.results[0].location.city+", "
  +profile.results[0].location.state+", "
  +profile.results[0].location.country;
  
  return 1;
}