import PropTypes from 'prop-types';
import React, { Component } from 'react';


import './OfficerListWidget.css';

class OfficerListWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 'n/a',
      value: 'nothin',
      officers: [''],
    };
  }

  handleOfficerNameChange (event, index) {
    let newStateOfficers = this.state.officers.slice();
    newStateOfficers[index] = event.target.value;
    this.setState({ value: newStateOfficers.join(','), officers: newStateOfficers });
  }


  handleAddShareholder() {
    this.setState({ officers: this.state.officers.concat(['']) });
  }

  handleRemoveOfficer(event, index) {
    let newStateOfficers = this.state.officers.filter((s, sidx) => index !== sidx);
    this.setState({ value: newStateOfficers.join(','), officers: newStateOfficers});
  }


  render() {
    const { id, value, formData } = this.props;
    const val = this.state.value;
    // this.props.value = this.state.value;
    return (
      <div >
        <input type="hidden" id={`${id}`} name={`${id}`} value={val} />

        {this.state.officers.map((officer, index) => (
          <div className="officerlist__inputlinegroup">
            <input
              className="officerlist__inputline"
              type="text"
              placeholder={`Officer #${index + 1} name`}
              value={officer}
              onInput={(event) => this.handleOfficerNameChange(event, index)}
            />
            <div className="officerlist__addremovebutton"
                 onClick={(event) => this.handleRemoveOfficer(event, index)}>x</div>
          </div>
        ))}
        <button type="button" onClick={() => this.handleAddShareholder()}>Add officer</button>
      </div>
    )
  }
}

OfficerListWidget.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  formData:  PropTypes.string,
};

export default OfficerListWidget;
