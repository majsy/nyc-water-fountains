import { h, Component } from 'preact';
import '../../scss/components/_Header.scss';
/** @jsx h */

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>NYC Water Fountains</h1>
      </header>
    );
  }
};