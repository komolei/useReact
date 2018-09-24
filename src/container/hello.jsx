import { connect } from 'react-redux'
import Hello from '../components/hello/hello'

const mapStateToProps=(state,props)=>{
    return {
        content:'<dd></dd>~hello world'
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return {
        changeContent:(params)=>{
            console.log('params---------------');
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello)