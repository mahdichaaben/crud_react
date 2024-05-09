import { Link } from "react-router-dom";
function Nav() {
    return ( 
    <ul style={{display:"flex",justifyContent:"space-around" ,textDecoration:"none"}}>
        <li><Link to="/">home</Link></li>
        <li><Link to="/withclass"> class method</Link></li>
        <li><Link to="/withhooks"> hooks method</Link></li></ul>

     );
}

export default Nav;


