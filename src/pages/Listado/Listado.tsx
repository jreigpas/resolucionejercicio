import { lazy, Suspense, useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
const Table = lazy(() => import("../../components/Table/Table"));
const Graficos = lazy(() => import("../../components/Graficos/Graficos"));

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

      {checked ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Table />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Graficos />
        </Suspense>
      )}
    </div>
  );
};

export default Listado;
