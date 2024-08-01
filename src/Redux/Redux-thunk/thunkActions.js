

export const FETCH_DATA_REQUEST = " FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCESS = " FETCH_DATA_SUCESS";
export const FETCH_DATA_FAILURE = " FETCH_DATA_FAILURE";


export const fetchDatatRequest =() =>({
    type:  FETCH_DATA_REQUEST
});

export const fetchDataSucess =(data) => ({
    type : FETCH_DATA_SUCESS,
    payload : data


})

export const fetchDataFailure =(error) => ({
    type : FETCH_DATA_SUCESS,
    payload :error


})


export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDatatRequest());
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const data = await response.json();
            dispatch(fetchDataSucess(data));
        }catch(error){
            dispatch(fetchDataFailure(error.message))
        }
    }
}