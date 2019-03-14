import { h, Component } from 'preact';
import '../../scss/components/_LocationSection.scss';
import LocationCTA from './LocationCTA';
/** @jsx h */

export default class LocationSection extends Component {
  render() {
    const { getLocationOnClick } = this.props;

    return (
      <section className="LocationSection">
        <div class="content-container">
          <LocationCTA getLocationOnClick={getLocationOnClick}/>
        </div>        
      </section>
    );
  }
};