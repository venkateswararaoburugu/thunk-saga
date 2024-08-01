import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './thunkActions';

const ThunkSample = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)


    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])
  return (
    <div>
      <h1>data</h1>
      {loading && <p>loading...</p>}
      {error && <pe>Error: {error}</pe>}
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

export default ThunkSample
