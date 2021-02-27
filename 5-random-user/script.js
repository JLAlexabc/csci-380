const url = 'https://randomuser.me/api/';

const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');   
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)
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
  //city.innerHTML = "form the js file.";
  return 1;
}