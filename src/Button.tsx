import React, { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from './hooks'
import { setTitle,setData } from './redux/slices'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useAppDispatch();
    const {title} = useAppSelector((state)=>state.data)
    console.log("title",title)
    // useEffect(() => {console.log('-------hghv---', title)}, [title]);
  return (
    <div>
      <button onClick={()=> dispatch(setTitle([]))}>click me</button>
      <div>

      {
        title.map((e:Record<string,string>)=>{
          return(
            <p>{e.title}</p>
          )
        })
      }
      </div>
    </div>
  )
}

export default Button
