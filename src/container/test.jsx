import { connect } from 'react-redux';
import Test from '../components/test/test';
import { changeInfo } from '../actions/action';
import api from '../fetch/api';
import { FETCH_REQUEST, FETCH_BEGIN } from '../actions/action_type';
import { getSlidePhoto } from '../actions/action'
const mapStateToProps = (state, props) => {
    return {
        // info: state.info
        // info:'xxxxxxxxx',
        info: state.test.info,
        isShow: state.requestStatus.status,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: (params) => {

            // 在这里进行异步数据请求
            // api.querySlideshowByStore({sellerId:1,storeId:1}).then(res=>{
            //     dispatch(changeInfo(res));
            // })

            // dispatch(changeInfo(params));
            // dispatch({ type: FETCH_BEGIN, payload: {} })
            // dispatch({
            //     type: FETCH_REQUEST, payload: {
            //         params: {
            //             sellerId: 1, storeId: 1
            //         }
            //     }
            // })

            
            // dispatch({
            //     type: FETCH_REQUEST, params
            // })
            getSlidePhoto(params)(dispatch)


        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Test);
// export default Test;