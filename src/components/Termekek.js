import Termek from "./Termek";
import 'bootstrap/dist/css/bootstrap.min.css';

function Termekek(props) {

    function click(i) {
        props.click(i);
    }
    return (

      <div className="Termekek">
        {
            props.adatok.map((t, i) => {
                return (
                    <Termek termek = {t} key = {i} index = {i} click = {click}/>
                )
                
            })
        }
      </div>
    );
  }
  
  export default Termekek;
  