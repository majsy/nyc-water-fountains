import { h, Component } from 'preact';
import '../../scss/components/_AddressForm.scss';
/** @jsx h */
/*global google*/

export default class AddressForm extends Component {
  constructor() {
    super()

    this.state = {
      address: ''
    }
  }

  componentDidMount() {
    this.initAutocomplete()
  }

  initAutocomplete = () => {
    // const defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(-33.8902, 151.1759),
    //   new google.maps.LatLng(-33.8474, 151.2631)
    // );
    
    const options = {
      // bounds: defaultBounds,
      types: ['address']
    };

    const autocomplete = new google.maps.places.Autocomplete(this.inputRef, options);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {

      const address = autocomplete.getPlace()

      this.setState({address: address.formatted_address});

      this.props.onAutocomplete(address.geometry.location)
    })
  }

  handleInputChange = (e) => {
    this.setState({address: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitAddressForm(this.state.address)
  }

  render() {
    return (
      <form className="AddressForm">
        <div className="address-input">
          <h5 className="heading-05">Type address or location in NYC</h5>
          <input ref={(ref) => this.inputRef = ref} type="text" value={this.state.value} placeholder="E.g. 350 Broadway" onChange={this.handleInputChange} />
        </div>
        
        <button className="submit-button" type="button" value="" onClick={this.handleSubmit}>
          <span className="heading-04">Search</span>
        </button>
      </form>
    );
  }
};