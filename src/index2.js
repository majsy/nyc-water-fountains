/*global google*/

import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import data from './data/fountainsSubset.json';
import { run } from './dataPreprocessor'

const haversine = require('haversine-distance');
// run()

const form = document.querySelector('form.submit-address-form');
const submitButton = form.querySelector('button');
const input = form.querySelector('input');
const getlocationButton = document.querySelector('button.get-location');

// const locationWrapper = document.querySelector('.location-wrapper');
// const locationStep1 = locationWrapper.querySelector('.step-1');
// const locationStep2 = locationWrapper.querySelector('.step-2');

const addressWrapper = document.querySelector('.address-wrapper');

const resultContainer = document.querySelector('.result-container');

const isMile = document.querySelector('input[type=radio]:checked').value === 'miles';
const unitRadioButtons = Array.from(document.querySelectorAll('.metric input[name="metric"]'));

const geocoder = new google.maps.Geocoder();

// get users current coordinates
// const getLocation = () => {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position, error) => {
//         if (error) {
//           reject(error)
//         } else {
//           resolve({
//             lat: position.coords.latitude,
//             lon: position.coords.longitude
//           })
//         }
//       });
//     } else {
//       reject('Geolocation is not supported by this browser.')
//     }
//   })
// }

// get input address coordinates
const codeAddress = (address) => {
  return new Promise((resolve, reject) => {
    geocoder.geocode({'address': address}, (results, status) => {
      if (status === 'OK') {
        resolve({
          lat: results[0].geometry.location.lat(),
          lon: results[0].geometry.location.lng()
        })  
      } else {
        reject(status);
      }
    });
  })
}

// const getBorough = () => {
//   const selectedBorough = document.querySelector('input[name="borough"]:checked').value;

//   console.log(selectedBorough)
// }

// get nearest fountain based on coordinates
// const getNearestFountain = (userCoordinates) => {
//   const distanceList = data.map(fountain =>
//     haversine(userCoordinates, fountain.coordinates))

//   const sorted = [...distanceList].sort((a, b) => a - b);
//   const nearest = sorted[0];
//   const index = distanceList.indexOf(nearest);

//   const metric = isMile ? 1600 : 1000;
//   const distance = (distanceList[index] / metric).toFixed(2)

//   return {
//     nearest: data[index], 
//     distance 
//   }
// }
 

// Event Listeners
// getlocationButton.addEventListener('click', async () => {
//   try {
//     const coordinates = await getLocation()
//     const fountain = getNearestFountain(coordinates)
//     console.log(fountain)

//     locationStep1.classList.add('hidden');
//     locationStep2.classList.remove('hidden');

//     resultContainer.innerHTML = `
//       <div class="item">
//         <h2>${fountain.nearest.site_name}</h2>
//         <h3>${fountain.distance}${isMile ? 'miles' : 'km'}</h3>
//       </div>
//     `
//   } catch(e) {
//     console.log('address is not valid')
//   }
// })

submitButton.addEventListener('click', async () => {
  const address = input.value;

  try {
    const coordinates = await codeAddress(`${address}, New York City, NY`)
    const nearest = getNearestFountain(coordinates)
    console.log(nearest)
  } catch(e) {
    console.log('address is not valid')
  }
})

// unitRadioButtons.forEach(radio => radio.addEventListener('click', (e) => {
//   console.log(e.target.value)
// }))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
