import React, { Component } from 'react'
import Hello from './hello'
const hoc = (Hello) => class hi extends React.Component {
  render() {
    const { sex, ...other } = this.props;
    const newProps = Object.assign({}, this.props, { family: 'chen' })
    console.log('this.newProps is',...newProps)
    return (
      <Hello {...other} />
    )
  }
}

export default hoc(Hello);

// import React from 'react'
// import PropTypes from 'prop-types'

// export default (WrappedComponent) => {
//   const hocComponent = ({ name,sex,...props }) => <WrappedComponent {...props} />

//   hocComponent.propTypes = {

//   }

//   return hocComponent
// }
