import { h, Component } from 'preact';
import '../../scss/components/_UnitForm.scss';
/** @jsx h */

export default class UnitForm extends Component {

  handleChange = (e) => {
    this.props.setUnit(e)
  }

  render() {
    const { isMile } = this.props;

    return (
      <form className="UnitForm">
        <label className={`radio-button ${isMile ? 'checked' : ''}`}>
          <input type="radio" name="unit" value="miles"
            onChange={this.handleChange}/> miles
        </label>

        <label className={`radio-button ${!isMile ? 'checked' : ''}`}>
          <input type="radio" name="unit" value="km" 
            onChange={this.handleChange}/> km  
        </label>
      </form>
    );
  };
}