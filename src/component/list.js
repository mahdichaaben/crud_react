import  { Component } from 'react';

class List extends Component {
    constructor() {
        super();
        this.state = { 
            departements:[],
            curent:"",
            update:false,
            id_update:0
    
         }
    }
    handlechange=(event)=>{
        this.setState({
            curent : event.target.value
        })

    }
    update_add_depart=(e)=>{
        let l=[...this.state.departements]

        e.preventDefault()
        if(this.state.update===false){  
           
            let obj={id:l.length+1,name:this.state.curent}
                 let newl=[...l,obj]
                 this.setState({
                    departements:newl,
                    curent:""
                }) 
         
            }
 
    else{  let newl=l.map((e,i)=>i===this.state.id_update?{id:e.id,name:this.state.curent}:e)
    this.setState({
      
        departements:newl,
        update:false,
        id_update:0,  curent:"",
    })
    } 
    }
    delete=(i)=>{
        let l=[...this.state.departements];
        l.splice(i,1)
        let newl=l.map((e,j)=>{return j<i?{id:e.id,name:e.name}:{id:e.id-1,name:e.name}})
        this.setState({
            departements:newl,
        })
     

    }
    update=(i)=>{
        let l=[...this.state.departements];
        this.setState({
            update:true,
            curent: l[i].name,
            id_update:i
            
        })
    
            
    }

    

  
    
    
    
    render() { 
        return (<div>
            <h2>{this.state.update?`update departement : ${this.state.curent}`:`new departement: ${this.state.curent}`}</h2>
            <form  onSubmit={this.update_add_depart}>

                <input name="inputtxt" type="text" value={this.state.curent} onChange={this.handlechange}  placeholder={this.state.update===false?"name":"update"} required></input>
                <button  >{this.state.update?"update this departement":"new department"}</button>

            </form>
            <h1>liste des departement </h1>
                <table>
                {
                    this.state.departements.map((e,i)=><tr Key={i}><td >{e.id}</td><td >{e.name}</td><td ><button  onClick={()=>this.delete(i)}>X</button><button onClick={()=>this.update(i)}>modifier</button></td></tr>)
                }
            

         
            </table>
            </div> 
        );
    }
}
 
export default List;