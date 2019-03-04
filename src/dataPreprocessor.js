/*global google*/
import data from './data/fountainsSubset.json'

const geocoder = new google.maps.Geocoder();

const wait = (time = 10) => new Promise((resolve) => {
  setTimeout(() => resolve(), time);
});

const getBorough = (code) => {
  switch (code) {
    case 'X': {
      return 'Bronx';
    }
    case 'Q': {
      return 'Queens';
    }
    case 'M': {
      return 'Manhattan';
    }
    case 'B': {
      return 'Brooklyn';
    }
    case 'R': {
      return 'Staten Island';
    }
  }
}

const codeAddress = (address) => {
  return new Promise((resolve, reject) => {
    geocoder.geocode({'address': address}, async (results, status) => {
      if (status === 'OK') {
        resolve([
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        ])    
      } else {
        reject(status);
      }
    });
  })
}

export const run = async () => {
  for (const index in data) {
    const siteName = data[index]['Site Name'];
    const borough = getBorough(data[index]['Borough']);
    let failed = true;

    while (failed === true) {
      try {
        data[index].coordinates = await codeAddress(`${siteName}, ${borough}, New York, NY`);
        failed = false;
        console.log(`done ${index} of ${data.length}`);
      } catch(e) {
        failed = true;
        console.error(`failed ${index} of ${data.length}`);
        await wait(1000);
      }
    }

    await wait();
  }

  document.getElementById('out').value = JSON.stringify(data);
}

// const foo = async () => {
//   const result = await doStuff();
//   console.log('done', result);
// }

// const foo = () => {
//   return doStuff().then((result) => console.log('done', result));
// }

// export const run2 = () => {
//   let promise = Promise.resolve();

//   data.forEach((obj, index) => {
//     const siteName = data[index]['Site Name']

//     promise
//       .then(() => codeAddress(siteName))
//       .then((coordinates) => {
//         data[index].coordinates = coordinates
//       })
//   });

//   return promise;
// }