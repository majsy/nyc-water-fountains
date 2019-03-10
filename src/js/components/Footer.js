import { h, Component } from 'preact';
import '../../scss/components/_Footer.scss';
/** @jsx h */

export default class Footer extends Component {
  handleClick = () => {
    this.props.getSectionOnClick();
  }

  render() {
    const { isLocation } = this.props;
    const data = isLocation ? 'Find water fountain near address' 
      : 'Find water fountain near you';

    return (
      <footer className="Footer">
        <nav>
          <a onClick={this.handleClick}>{data}</a>
        </nav>
      </footer>
    );
  }
};