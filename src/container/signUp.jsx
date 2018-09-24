import { connect } from 'react-redux';
import SignUp from '../components/signUp/signUp'
import { signUp } from '../actions/action'

const mapStateToProps = (state, props) => {
    return {
        info: state.alert.info
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: params => {
            signUp(params)(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)