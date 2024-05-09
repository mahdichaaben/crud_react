import {useState,useReducer,useRef,useEffect} from "react"
const Reduce=()=>{
    const curentref=useRef(null)
    useEffect(()=>console.log(state))
const reducer=(state,action)=>{

    switch(action.type){
        case 'handlechange':
            return { 
            departements:state.departements,
            curent:curentref.current.value,
            update:state.update,
            id_update:state.id_update
    
         };
        case 'changeoradd':
            let l=[...state.departements]    
            if(!state.update){ 
            let obj={id:l.length+1,name:state.curent}
            var addlist =[...l,obj]
        }else{
             var updlist=l.map((e,i)=>i===state.id_update?{id:e.id,name:state.curent}:e)
        }
            return{ 
            departements:!state.update?addlist:updlist,
            curent:"",
            update:false,
            id_update:0
    
         };
        case 'update':
            let i=counter
        
        return{ 
            departements:state.departements,
            curent:state.departements[i].name,
            update:true,
            id_update:i
    
         };
        case 'delete':
            let j=counter
            let hh=[...state.departements];
            hh.splice(j,1)
            var newl=hh.map((e,t)=>{return t<j?{id:e.id,name:e.name}:{id:e.id-1,name:e.name}})    
        return{ 
            departements:newl,
            curent:curentref.current.value,
            update:false,
            id_update:0
    
         };
         default:return state;
    }

}
const [counter,setCounter]=useState(0);
    const [state,dispatch]=useReducer(reducer,{ 
        departements:[],
        curent:"",
        update:false,
        id_update:0

     })
     return (<div> mode reducer+hook
        <h2>{state.update?`update departement : ${state.curent}`:`new departement: ${state.curent}`}</h2>
        <form  onSubmit={(e)=>{e.preventDefault();
            return dispatch({type:'changeoradd'})}} >

            <input name="inputtxt" type="text" value={state.curent} onChange={()=>dispatch({type:'handlechange'})}  ref={curentref} placeholder={state.update===false?"name":"update"} required></input>
            <button  >{state.update?"update this departement":"new department"}</button>

        </form>
        <h1>liste des departement </h1>
            <table>
            {
            state.departements.map((e,i)=><tr key={i}><td >{e.id}</td><td >{e.name}</td><td ><button  onClick={()=>{ setCounter(i)
                dispatch({type:'delete'})}}>X</button><button onClick={()=> {setCounter(i); dispatch({type:'update'})}}>update</button></td></tr>)
            }
        

     
        </table>
        </div> 
    );
    }

 export default Reduce;