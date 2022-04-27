import { useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const Listado = () => {

  const [checked, setChecked] = useState(true);

  return (
    <div className="main">
     <h2>Listado</h2>
     <ToggleSwitch id="switch" checked={checked} onChange={checked => setChecked(checked)} />
     <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat.
     </p>
  </div>
  );
};

export default Listado;
