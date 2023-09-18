import { useAppSelector,useAppDispatch } from './hooks'
import { setTitle} from './redux/slices'

const Button = () => {
  const dispatch = useAppDispatch();
    const {title,loading,error} = useAppSelector((state)=>state.data)
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
