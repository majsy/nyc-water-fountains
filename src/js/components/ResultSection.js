import { h, Component } from 'preact';
import '../../scss/components/_ResultSection.scss';
import UnitForm from './UnitForm';
/** @jsx h */
/*global google*/

export default class ResultSection extends Component {
  constructor() {
    super()

    this.state = {
      isMile: true
    }
  }

  setUnit = (e) => {
    this.setState({isMile: e.target.value === 'miles'})
  }

  render() {
    const { isMile } = this.state;
    const { result, isLocation, submittedAddress } = this.props;
    const heading = isLocation ? `Water fountains near you:` : `Water fountains near ${submittedAddress}:`;
    const unit = isMile ? 'miles' : 'km';
    const milesToKm = 1.609344;
    const distance = isMile ? result.distance.toFixed(2) : (result.distance * milesToKm).toFixed(2);

    return (
      <section className="ResultSection">
        <div class="content-container">
          <UnitForm isMile={isMile} setUnit={this.setUnit} />
          <h2 class="heading-02">{heading}</h2>
          <a href={result.url} target="_blank">
            <h3 class="heading-03 result">{result.nearest}, {distance}{unit}</h3>
          </a>
        </div>
      </section>
    );
  }
};