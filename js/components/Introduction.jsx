import React from 'react';
import PropTypes from 'prop-types';

import ProgressButton from 'us-forms-system/lib/js/components/ProgressButton';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';

import Selectbox from './Selectbox/Selectbox'


class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.startForm = this.startForm.bind(this);
  }

  is_valid_casenum(casenum) {
	   return(/([0-9]){4}-([0-9]){4}-([a-zA-Z0-9]){4}$/.test(casenum));
  }

  startForm() {
    const firstPage = this.props.route.pageList[1].path;

    localStorage.setItem('caseNumber', '2018-1221-h6k1');

    this.props.router.push(firstPage);
  }

  goBack() {
    window.location.href = "http://alpha.austin.gov"
  }

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="Police Oversight and Accountability Form"/>

        <div>
          <Selectbox description="Submit a complaint"  click={this.startForm} />
          <Selectbox description="Submit a compliment" click={this.startForm} />
        </div>

        <ProgressButton
          onButtonClick={this.goBack}
          buttonText="Back"
          buttonClass="usa-button-primary schemaform-start-button"
          afterText="»"/>
      </div>
    );
  }
}

Introduction.propTypes = {
  route: PropTypes.object,
  router: PropTypes.object
};

export default Introduction;
