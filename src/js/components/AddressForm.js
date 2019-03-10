import { h, Component } from 'preact';
import '../../scss/components/_AddressForm.scss';
/** @jsx h */

export default class AddressForm extends Component {

  handleChange = (e) => {
    this.props.setBorough(e)
  }

  render() {
    return (
      <form className="AddressForm">
        <div className="radio-button-group">
          <h5 className="heading-05">1. Select borough</h5>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="M" onChange={this.handleChange}/> 
            Manhattan
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="B" onChange={this.handleChange}/> 
            Brooklyn
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="Q" onChange={this.handleChange}/> 
            Queens
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="X" onChange={this.handleChange}/> 
            Bronx
          </label>
          <label className={`radio-button`}>
            <input type="radio" name="borough" value="R" onChange={this.handleChange}/> 
            Staten Island
          </label>
        </div>  

        <div className="address-input">
          <h5 className="heading-05">2. Type address or location</h5>
          <input type="input" value="" placeholder="E.g. 123 Main st" />
        </div>
        
        <button className="submit-button" type="button" value="">
          <span className="heading-04">Search</span>
        </button>
      </form>
    );
  }
};