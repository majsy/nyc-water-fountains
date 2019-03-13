import { h, Component } from 'preact';
import '../../scss/components/_AddressSection.scss';
import BackgroundStyles from './BackgroundStyles';
/** @jsx h */

export default class BackgroundStyles extends Component {
  render() {
    const { setBorough, setAddress, submitAddressForm } = this.props;

    return (
      <div className="BackgroundStyles">
        background styles
      </div>
    );
  }
};