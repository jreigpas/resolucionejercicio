import { useState } from "react";
import Graficos from "../../components/Graficos/Graficos";
import Table from "../../components/Table/Table";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const Listado = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="main">
      <div>
        <h2>Visualizar los datos:</h2>
        <ToggleSwitch
          id="switch"
          checked={checked}
          onChange={(checked) => setChecked(checked)}
        />
      </div>

      {checked ? <Table /> : <Graficos />}
    </div>
  );
};

export default Listado;
