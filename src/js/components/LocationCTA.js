import { h, Component } from 'preact';
import '../../scss/components/_LocationCTA.scss'
/** @jsx h */

export default class LocationCTA extends Component {
  handleClick = () => {
    this.props.getLocationOnClick()
  }

  render() {
    return (
      <button className="LocationCTA" onClick={this.handleClick}>
        <span className="heading-01">Find water fountains<br/>near me</span>
      </button>
    );
  }
};