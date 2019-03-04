/*global google*/

import './index.css';
import * as serviceWorker from './serviceWorker';
import data from './data/fountainsSubset.json'

import { run } from './dataPreprocessor'

// run()

const addressForm = document.querySelector('form.submit-address-form')
const submitAddressButton = addressForm.querySelector('button');
const addressInput = addressForm.querySelector('input');
const address = addressInput.value;

const getlocationButton = document.querySelector('button.get-location');
const geocoder = new google.maps.Geocoder();

// get users geolocation
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(logPosition);
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

// log users location coordinates
const logPosition = (position) => {
  console.log('latitude:', position.coords.latitude, 'longitude:', position.coords.longitude )
}


// get address coordinates
// const codeAddress = (address) => {
//   return new Promise((resolve, reject) => {
//     geocoder.geocode({'address': address}, async (results, status) => {
//       if (status === 'OK') {
//         resolve([
//           results[0].geometry.location.lat(),
//           results[0].geometry.location.lng()
//         ])  
//       } else {
//         reject(status);
//       }
//     });
//   })
// }


// export const getAddressCoordinates = async (address) => {
//   // const address = addressInput.value;
//   // const borough = getBorough(data[index]['Borough']);

//   const coordinates = await codeAddress(`${address}, New York, NY`);
//   console.log(coordinates)
// }

// event listeners
getlocationButton.addEventListener('click', () => {
  getLocation()
})

// submitAddressButton.addEventListener('click', () => {
//   getAddressCoordinates(address)
// })





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
