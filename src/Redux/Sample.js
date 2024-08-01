import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchDatatRequest } from './actions'
const Sample = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const error = useSelector(state => state.error)


    useEffect(()=> {
        dispatch(fetchDatatRequest());

    },[dispatch])
  return (
    <div>
      <h1>data</h1>
      {error && <p>Error:{error}</p>}
      <ul>
        {data.map(item => (
            <li key={item.id}>
                {item.name}

            </li>
        ))}
      </ul>
    </div>
  )
}

export default Sample
