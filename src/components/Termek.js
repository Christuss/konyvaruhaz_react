import './Termekek.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Termek(props) {
    function click() {
        props.click(props.index);
    }

  return (
    <div className="Termek card ">
        <p>Könyvcim: {props.termek.konyvcim}</p>
        <p>Szerzo: {props.termek.szerzo}</p>
        <p>Ár: {props.termek.ar}</p>
        <button className = "btn btn-primary" onClick = {click}>OK</button>
    </div>
  );
}

export default Termek;
