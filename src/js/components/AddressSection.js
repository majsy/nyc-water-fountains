import { h, Component } from 'preact';
import '../../scss/components/_AddressSection.scss';
import AddressForm from './AddressForm';
/** @jsx h */
/*global google*/

export default class AddressSection extends Component {
  render() {
    const { setBorough, onAutocomplete, submitAddressForm } = this.props;

    return (
      <section className="AddressSection">
        <div class="content-container">
          <AddressForm setBorough={setBorough} onAutocomplete={onAutocomplete} submitAddressForm={submitAddressForm} />
        </div> 
      </section>
    );
  }
};