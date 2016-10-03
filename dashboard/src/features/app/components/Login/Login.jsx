import React from 'react'
import { connect } from 'react-redux'
import { TextField, ErrorBanner } from 'components/Common'
import actions from 'actions'
import styles from './Login.scss'
import { reduxForm } from 'redux-form'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.submitWithErrors = this.submitWithErrors.bind(this)
  }

  submitWithErrors(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      this.props.logIn(data.token)
        .catch((err) => reject({_error: err.message}))
    })
  }

  render() {
    let logo = require('assets/images/logo-white.png')

    const {
      fields: { token },
      error,
      handleSubmit,
      submitting
    } = this.props

    return (
      <div className={styles.main}>
        <img className={styles.image} src={logo} />
        <div className={styles.form}>
          <form onSubmit={handleSubmit(this.submitWithErrors)}>
            <TextField
              placeholder='Enter client token (tokenname:xyz...)'
              fieldProps={token} />

            {error &&
              <ErrorBanner
                title='Error creating key'
                message={error.toString()} />}

            <button type='submit' className='btn btn-primary' disabled={submitting}>
              Log In
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({
    logIn: (token) => dispatch(actions.core.logIn(token))
  })
)(reduxForm({
    form: 'login',
    fields: ['token'],
  })(Login)
)
