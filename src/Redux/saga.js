import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA_REQUEST, fetchDataFailure, fetchDataSucess } from "./actions";





function* fetchData(){
    try{
        const response = yield call(fetch,'https://jsonplaceholder.typicode.com/users' );
        const data = yield response.json();
        yield put(fetchDataSucess(data))
    }catch(error){
        yield put(fetchDataFailure(error.message))
    }

}
    function* watchFetchData(){
        yield takeEvery(FETCH_DATA_REQUEST,fetchData)
    
}

export default watchFetchData;
