import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";



  const initialState ={
        postId:1,
        loading: true,
        toast: {type:'info', message:''},
        title:''
    }

export default function Post() {

    // const [hero,setHero]=useState() 
    const [state,dispatch] = 


    //////////////////first /second method//////////////
//   const [postId, setPostId] = useState()
//   const [loading, setLoading] = useState(true)
//   const [toast, setToast] = useState({ type: "info", message: "" })
//   const [title, setTitle] = useState("")
    //////////////////first /second method//////////////
    // ********************************************************
///////////start learning reducer///////////////
  
  Const  UserAction = (State, action) => {
    switch (action.type) {
      case " get-post-request":
        return{
            ...state,
            postId:  action.payload,
            loading:true,
            title:'',
        }
        // setPostId(payload)
        // setLoading(true)
        // setTitle("")
        // break;
      case "get-post-success":
        return{
            ...state,
            postId: action.payload,
            loading:true,
            title:{type: "success", message: action.payload.message }
        
        }
        // setTitle(payload.title)
        // setLoading(false)
        // setToast({ type: "success", message: payload.message })
        // break;
      case "get-post-failed":
        return{
            ...state,
            loading:false,
            toast:{type: "error", message: action.payload}
   
        }
        // setLoading(false)
        // setToast({
        //   type: "error",
        //   message: payload
        // })
        // break;

      default:
        break;
    }
  }

  useEffect(() => {
    (async () => {
      try {
        if (postId) {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
          );
          const data = await res.json();
          console.log(data);
          if (data.title) {
            UserAction("get-post-success", {
              title: data.title,
              message: `loaded post ${postId}`,
            }) 
            // setTitle(data.title)
            // setLoading(false)
            // setToast({type: 'success', message:`loaded post ${postId}`})
          } else {
            UserAction("get-post-failed", `post with id ${postId} not found`);
                //////////////////first /second method//////////////

            // setLoading(false);
            // setToast({
            //   type: "error",
            //   message: `post with id ${postId} not found`,
            // });
                //////////////////first /second method//////////////

          }
        }
      } catch (err) {

            //////////////////first /second method//////////////

        // console.log(err);
        // setLoading(false)
        // setToast({ type: 'error', message: err.message })
    //////////////////first /second method//////////////


      }
      
    })()
  }, [postId])

  const handleChange = (e) => {
    UserAction(" get-post-request", e.target.value)
  }

  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading ? <DNA /> : <p>{title}</p>}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
