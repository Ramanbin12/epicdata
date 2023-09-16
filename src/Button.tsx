import React, { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from './hooks'
import { setTitle,setData } from './redux/slices'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useAppDispatch();
    const {title,loading,error} = useAppSelector((state)=>state.data)
    console.log("title",title)
    console.log("error23",error)
    // useEffect(() => {console.log('-------hghv---', title)}, [title]);
  return (
    <div>
      <button onClick={()=> dispatch(setTitle([]))}>click me</button>
  {
    loading?
      (<div>Loading.....</div>)
      :
      
      error?(<div>{error}</div>)
    :
    (
      <div>
      {
        title.map((e:Record<string,string>)=>(
            <p key={e.id}>{e.title}</p>
        ))
        }
      
      </div>
    )
}
    </div>
  )
}

export default Button
