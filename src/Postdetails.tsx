import { useAppSelector,useAppDispatch } from './hooks'
import {postedDetails } from './redux/postSlice'

const Postdetails = () => {
  const dispatch = useAppDispatch();
    const {loading,data,error} = useAppSelector((state)=>state.post)
  return (
    <div>
      <button onClick ={()=>dispatch(postedDetails([]))} >Add data</button>
  {
    loading?
      (<div>Loading.....</div>)
    :
    error?
    (<div> {error} </div>)
    :
    (
      <div>
      {data.title}
      
      </div>
    )
}


    </div>
  )
}

export default Postdetails
