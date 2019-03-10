/*global google*/

import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import data from './data/fountainsSubset.json';
import { run } from './dataPreprocessor'

// run()

const form = document.querySelector('form.submit-address-form');
const submitButton = form.querySelector('button');
const input = form.querySelector('input');

// const geocoder = new google.maps.Geocoder();


// get input address coordinates
// const codeAddress = (address) => {
//   return new Promise((resolve, reject) => {
//     geocoder.geocode({'address': address}, (results, status) => {
//       if (status === 'OK') {
//         resolve({
//           lat: results[0].geometry.location.lat(),
//           lon: results[0].geometry.location.lng()
//         })  
//       } else {
//         reject(status);
//       }
//     });
//   })
// }

// submitButton.addEventListener('click', async () => {
//   const address = input.value;

//   try {
//     const coordinates = await codeAddress(`${address}, New York City, NY`)
//     const nearest = getNearestFountain(coordinates)
//     console.log(nearest)
//   } catch(e) {
//     console.log('address is not valid')
//   }
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
