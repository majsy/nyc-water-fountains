import { h, Component } from 'preact';
import '../../scss/components/_AddressForm.scss';
/** @jsx h */

export default class AddressForm extends Component {

  handleRadioButtonChange = (e) => {
    this.props.setBorough(e)
  }

  handleInputChange = (e) => {
    this.props.setAddress(e)
  }

  handleSubmit = () => {
    this.props.submitAddressForm()
  }

  render() {
    return (
      <form className="AddressForm">
        <div className="radio-button-group">
          <h5 className="heading-05">1. Select borough</h5>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Manhattan" onChange={this.handleRadioButtonChange}/> 
            Manhattan
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Brooklyn" onChange={this.handleRadioButtonChange}/> 
            Brooklyn
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Queens" onChange={this.handleRadioButtonChange}/> 
            Queens
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Bronx" onChange={this.handleRadioButtonChange}/> 
            Bronx
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Staten Island" onChange={this.handleRadioButtonChange}/> 
            Staten Island
          </label>
        </div>  

        <div className="address-input">
          <h5 className="heading-05">2. Type address or location</h5>
          <input type="input" value="" placeholder="E.g. 350 Broadway" onChange={this.handleInputChange} />
        </div>
        
        <button className="submit-button" type="button" value="" onClick={this.handleSubmit}>
          <span className="heading-04">Search</span>
        </button>
      </form>
    );
  }
};