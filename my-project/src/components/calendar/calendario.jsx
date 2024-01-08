// import React, { useState  } from "react";
// import calendarioActividades from "./enero";

// export default function Calendario() {
//   const [day, setDay] = useState(1);

//   const handleClick = (value) => {
//     setDay(value);
//     console.log(value);
//   };

//   const renderCells = () => {
//     const cells = [];

//     for (let i = 0; i < 5; i++) {
//       const row = [];
//       for (let j = 0; j < 7; j++) {
//         const dayCounter = i * 7 + j + 1;

//         if (dayCounter <= 31) {
//           // Renderizar celdas con contenido hasta 31
//           row.push(
//             <td
//               key={dayCounter}
//               onClick={() => handleClick(dayCounter)}
//               className="border border-gray-500 p-1 cursor-pointer"
//             >
//               {dayCounter}
//             </td>
//           );
//         } else {
//           // Renderizar celda sin contenido después de 31
//           row.push(
//             <td
//               key={dayCounter}
//               className="border border-gray-500 p-1 cursor-pointer"
//             ></td>
//           );
//         }
//       }
//       cells.push(<tr key={i}>{row}</tr>);
//     }

//     return cells;
//   };

//   return (
//     <div>
//       <h1 className="text-4xl text-center text-gray-500">Calendario</h1>
//       <table className="border-collapse border border-gray-500">
//         <thead>
//           <tr>
//             <th className="border border-gray-500 p-1">Lun</th>
//             <th className="border border-gray-500 p-1">Mar</th>
//             <th className="border border-gray-500 p-1">Miér</th>
//             <th className="border border-gray-500 p-1">Jue</th>
//             <th className="border border-gray-500 p-1">Vier</th>
//             <th className="border border-gray-500 p-1">Sáb</th>
//             <th className="border border-gray-500 p-1">Dom</th>
//           </tr>
//         </thead>
//         <tbody>{renderCells()}</tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState } from "react";
import calendarioActividades from "./enero";

export default function Calendario() {
  const [day, setDay] = useState(1);
  const [selectedTaller, setSelectedTaller] = useState("");
  const [selectedHorario, setSelectedHorario] = useState("");

  const handleClick = (value) => {
    setDay(value);
    setSelectedTaller(""); // Limpiar el taller seleccionado al cambiar de día
    setSelectedHorario(""); // Limpiar el horario seleccionado al cambiar de día
    console.log(value);
  };

  const handleTallerChange = (event) => {
    const nuevoTaller = event.target.value;
    setSelectedTaller(nuevoTaller);
    setSelectedHorario(""); // Limpiar el horario seleccionado al cambiar de taller
  };

  const handleHorarioChange = (event) => {
    const nuevoHorario = event.target.value;
    setSelectedHorario(nuevoHorario);
  };

  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const dayCounter = i * 7 + j + 1;

        if (dayCounter <= 31) {
          // Renderizar celdas con contenido hasta 31
          row.push(
            <td
              key={dayCounter}
              onClick={() => handleClick(dayCounter)}
              className={`border border-gray-500 p-1 cursor-pointer ${
                dayCounter === day ? "bg-gray-300" : ""
              }`}
            >
              {dayCounter}
            </td>
          );
        } else {
          // Renderizar celda sin contenido después de 31
          row.push(
            <td
              key={dayCounter}
              className="border border-gray-500 p-1 cursor-pointer"
            ></td>
          );
        }
      }
      cells.push(<tr key={i}>{row}</tr>);
    }

    return cells;
  };

  const obtenerTalleresDelDia = () => {
    // Obtener los talleres del día seleccionado
    const talleresDelDia = calendarioActividades.enero2024.cine
      .concat(calendarioActividades.enero2024.power)
      .concat(calendarioActividades.enero2024.ejerciciosFuncionales)
      .concat(calendarioActividades.enero2024.defensaPersonal)
      .concat(calendarioActividades.enero2024.yoga)
      .concat(calendarioActividades.enero2024.desarrolloBienEstarPersonal)
      .concat(calendarioActividades.enero2024.tertuliasFilosofia)
      .concat(calendarioActividades.enero2024.pintura)
      .concat(calendarioActividades.enero2024.catasVino)
      .concat(calendarioActividades.enero2024.estiloPersonalDamas)
      .concat(calendarioActividades.enero2024.estiloPersonalCaballeros)
      .concat(calendarioActividades.enero2024.fengShui)
      .concat(calendarioActividades.enero2024.finanzasPersonales)
      .concat(calendarioActividades.enero2024.historia)
      .concat(calendarioActividades.enero2024.historiaArte)
      .concat(calendarioActividades.enero2024.pilatesBarreBajaIntensidad);
  
    return talleresDelDia.map((taller) => taller.evento);
  };

//   const obtenerTalleresDelDia = () => {
//     // Obtener los talleres del día seleccionado
//     const talleresDelDia = [];

//     // Función auxiliar para evitar duplicados
//     const agregarTalleres = (arrayTalleres) => {
//       arrayTalleres.forEach((taller) => {
//         if (!talleresDelDia.some((t) => t.evento === taller.evento)) {
//           talleresDelDia.push(taller);
//         }
//       });
//     };

//     // Agregar talleres de cada categoría al array
//     agregarTalleres(calendarioActividades.enero2024.cine);
//     agregarTalleres(calendarioActividades.enero2024.power);
//     agregarTalleres(calendarioActividades.enero2024.ejerciciosFuncionales);
//     agregarTalleres(calendarioActividades.enero2024.defensaPersonal);
//     agregarTalleres(calendarioActividades.enero2024.yoga);
//     agregarTalleres(calendarioActividades.enero2024.desarrolloBienEstarPersonal);
//     agregarTalleres(calendarioActividades.enero2024.tertuliasFilosofia);
//     agregarTalleres(calendarioActividades.enero2024.pintura);
//     agregarTalleres(calendarioActividades.enero2024.catasVino);
//     agregarTalleres(calendarioActividades.enero2024.estiloPersonalDamas);
//     agregarTalleres(calendarioActividades.enero2024.estiloPersonalCaballeros);
//     agregarTalleres(calendarioActividades.enero2024.fengShui);
//     agregarTalleres(calendarioActividades.enero2024.finanzasPersonales);
//     agregarTalleres(calendarioActividades.enero2024.fengShui);
//     agregarTalleres(calendarioActividades.enero2024.historia);
//     agregarTalleres(calendarioActividades.enero2024.historiaArte);
//     agregarTalleres(calendarioActividades.enero2024.pilatesBarreBajaIntensidad);

//     return talleresDelDia;
//   };

  const obtenerHorariosDelTaller = () => {
    // Obtener los horarios del taller seleccionado
    const talleresDelDia = calendarioActividades.enero2024.cine
      .concat(calendarioActividades.enero2024.power)
      .concat(calendarioActividades.enero2024.ejerciciosFuncionales)
      .concat(calendarioActividades.enero2024.defensaPersonal)
      .concat(calendarioActividades.enero2024.yoga)
      .concat(calendarioActividades.enero2024.desarrolloBienEstarPersonal)
      .concat(calendarioActividades.enero2024.tertuliasFilosofia)
      .concat(calendarioActividades.enero2024.pintura)
      .concat(calendarioActividades.enero2024.catasVino)
      .concat(calendarioActividades.enero2024.estiloPersonalDamas)
      .concat(calendarioActividades.enero2024.estiloPersonalCaballeros)
      .concat(calendarioActividades.enero2024.fengShui)
      .concat(calendarioActividades.enero2024.finanzasPersonales)
      .concat(calendarioActividades.enero2024.historia)
      .concat(calendarioActividades.enero2024.historiaArte)
      .concat(calendarioActividades.enero2024.pilatesBarreBajaIntensidad);
  
    const horariosDelTaller = talleresDelDia
      .filter((taller) => taller.evento === selectedTaller)
      .map((taller) => taller.horario);
  
    return horariosDelTaller;
  };

  return (
    <div>
      <h1 className="text-4xl text-center text-gray-500">Calendario</h1>
      <div>
        <label htmlFor="talleres">Selecciona un taller:</label>
        <select
          id="talleres"
          value={selectedTaller}
          onChange={handleTallerChange}
        >
          <option value="" disabled>
            Selecciona un taller
          </option>
          {obtenerTalleresDelDia().map((taller, index) => (
            <option key={index} value={taller}>
              {taller}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="horarios">Selecciona un horario:</label>
        <select
          id="horarios"
          value={selectedHorario}
          onChange={handleHorarioChange}
        >
          <option value="" disabled>
            Selecciona un horario
          </option>
          {obtenerHorariosDelTaller().map((horario, index) => (
            <option key={index} value={horario}>
              {horario}
            </option>
          ))}
        </select>
      </div>
      <table className="border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 p-1">Lun</th>
            <th className="border border-gray-500 p-1">Mar</th>
            <th className="border border-gray-500 p-1">Miér</th>
            <th className="border border-gray-500 p-1">Jue</th>
            <th className="border border-gray-500 p-1">Vier</th>
            <th className="border border-gray-500 p-1">Sáb</th>
            <th className="border border-gray-500 p-1">Dom</th>
          </tr>
        </thead>
        <tbody>{renderCells()}</tbody>
      </table>
    </div>
  );
}

