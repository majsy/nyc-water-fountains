import { h, Component } from 'preact';
import LocationSection from './LocationSection';
import AddressSection from './AddressSection';
import ResultSection from './ResultSection';
import Header from './Header';
import Footer from './Footer';
import data from '../../data/fountainsSubset.json';

/** @jsx h */
/*global google*/
const haversine = require('haversine-distance');
const geocoder = new google.maps.Geocoder();

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLocation: true,
      isResult: false,
      result: undefined
    }
  }

  getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position, error) => {
          if (error) {
            reject(error)
          } else {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            })
          }
        });
      } else {
        reject('Geolocation is not supported by this browser.')
      }
    })
  }

  getNearestFountain = (userCoordinates) => {
    const distanceList = data.map(fountain =>
      haversine(userCoordinates, fountain.coordinates))
  
    const sorted = [...distanceList].sort((a, b) => a - b);
    const nearest = sorted[0];
    const index = distanceList.indexOf(nearest);
    const meteroToMile = 1600;
  
    const distance = (distanceList[index] / meteroToMile)
  
    return {
      nearest: data[index], 
      distance 
    }
  }

  getLocationOnClick = async () => {
    try {
      const coordinates = await this.getLocation()
      const fountain = this.getNearestFountain(coordinates)

      this.setState({result: fountain, isResult: true})

    } catch(e) {
      console.log('address is not valid')
    }
  }

  codeAddress = (address) => {
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

  setBorough = (e) => {
    // this.setState({isMile: e.target.value === 'miles'})
    console.log(e.target.value)
  }

  submitAddressForm = async () => {
    const address = '123 Main st';

    try {
      const coordinates = await this.codeAddress(`${address}, New York City, NY`)
      const nearest = this.getNearestFountain(coordinates)
      console.log(nearest)
    } catch(e) {
      console.log('address is not valid')
    }
  } 

  getSectionOnClick = () => {
    this.setState({isLocation: !this.state.isLocation, isResult: false})
  }

  render() {
    const { result, isResult, isLocation } = this.state;

    const renderLocationSection = !isResult && isLocation;
    const renderAddressSection = !isResult && !isLocation;
    const renderResultSection = isResult;

    return (
      <div>
        <Header />
        <main>
          { renderLocationSection &&
            <LocationSection getLocationOnClick={this.getLocationOnClick} /> 
          }
          { renderAddressSection &&
            <AddressSection setBorough={this.setBorough} /> 
          }
          { renderResultSection &&
            <ResultSection result={result} isLocation={isLocation} /> 
          }
        </main>
        <Footer isLocation={isLocation} getSectionOnClick={this.getSectionOnClick} />
      </div>
    );
  }
};