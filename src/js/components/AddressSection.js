import { h, Component } from 'preact';
import '../../scss/components/_AddressSection.scss';
import AddressForm from './AddressForm';
/** @jsx h */

export default class AddressSection extends Component {
  render() {
    const { setBorough, setAddress, submitAddressForm } = this.props;

    return (
      <section className="AddressSection">
        <h2 className="heading-02">Find water fountains near address</h2>
        <AddressForm setBorough={setBorough} setAddress={setAddress} submitAddressForm={submitAddressForm} />
      </section>
    );
  }
};