import {Component} from "react"
class Timeclass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date:new Date().toLocaleDateString(), 
            heure:new Date().toLocaleTimeString()
        }

    }
    componentDidUpdate(){
        console.log(this.state.heure)
  
    }
    
    render() { 
        setTimeout(()=>{
            this.setState({date:new Date().toLocaleDateString(),
       heure: new Date().toLocaleTimeString()})
        },1000)
     
        return ( 
            <div>
        <h1>Bonjour !
            time version class 
        </h1>
       
        <h2>Aujourdh'ui : {this.state.date}.</h2>
        <h2>Il est  {this.state.heure}.</h2>
        </div>
         );
    }
}
 
export default Timeclass;