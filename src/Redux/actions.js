


 export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCESS = 'FETCH_DATA_SUCESS';
 export const FETCH_DATA_fAILURE = 'FETCH_DATA_FAILURE';


 export const fetchDatatRequest = () =>({
    type: FETCH_DATA_REQUEST
    
 })

 export const fetchDataSucess = (data) => ({
    type: FETCH_DATA_SUCESS,
    payload: data

 })

 export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_SUCESS,
    payload: error

 })