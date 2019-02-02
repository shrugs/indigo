import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from '../lib/lib';


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didSubmit: false,
      formPending: false,
      formSuccess: false,
      canSubmit: false,
      formState: {},
      reports: {},
    }
    this.setValue = this.setValue.bind(this)
    this.getReport = this.getReport.bind(this)
  }



  setValue(k, v) {
    const { state } = this
    this.setState({ formState: { ...state.formState, [k]: v, } })
  }

  getReport(name, report) {
    console.log(name, report)
    const { state } = this
    const canSubmit = Object.values(state.reports).every(r => r.pass === true)


    this.setState({
      reports: {[name]: report},
      canSubmit,
    })
  }

  render() {

    const { state, props } = this

    return (
      <form className={`${props.className}`} style={props.style}>
        { withProps(
            props.children,
            {
              ...state,
              getReport: this.getReport,
              setValue: this.setValue,
              submitForm: props.submitForm,
              canSubmit: state.canSubmit,
              formName: props.name,
            }
          )
        }
      </form>
    )
  }
}



Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

Form.defaultProps = {
  className: '',
  style: {},
};


export default Form;
