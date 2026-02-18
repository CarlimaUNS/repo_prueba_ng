//Importamos variable de estado (Hook)
import { useState } from "react";
//Importamos componente Worker (para mostrar cada trabajo)
import Worker from "./Worker";
//Importamos la funcion Apply (para mandar data a la API)
import { Apply } from "./Service";

export default function Workers(){
    //Estados (vacios inicialmente)
    //Guardamos el link del repositorio mandado
    const [link, setLink] = useState("");
    //Guardamos el id del trabajo seleccionado
    const [selectedJobId, setSelectedJobId] = useState("");
    //Lista fija de los trabajos disponibles
    const workers = [
      {
        id: "4416372005",
        title: "Fullstack developer"
    },
    {
        id: "9100000001",
        title: "Head Chef"
    },
    {
        id: "9100000002",
        title: "Veterinarian"
    },
    {
        id: "9100000003",
        title: "Civil Engineer"
    },
    {
        id: "9100000004",
        title: "Interior Designer"
    },
    {
        id: "9100000005",
        title: "Flight Attendant"
    },
    {
        id: "9100000006",
        title: "Marine Biologist"
    },
    {
        id: "9100000007",
        title: "Landscape Architect"
    },
    {
        id: "9100000008",
        title: "Pastry Chef"
    },
    {
        id: "9100000009",
        title: "Physical Therapist"
    }
    ];
    //Identificadores
    const uuid = "5bb7e62a-70a5-4b2f-b613-da53a1216ccb";
    const candidateId = "74171694005";
    //Funcion para manejar envio de los datos
    const handleSubmit = async (e) => {
        e.preventDefault();//Cancelamos recarga de la pagina al presionar submit

        if (!selectedJobId) {
        alert("Select a job first");
        return;
        }
        try{
            //Llamamos a la funcion apply con la info deseada
            await Apply({
            uuid,
            candidateId,
            jobId: selectedJobId,
            repoUrl: link
            });
            //Se mando exitosamente
            alert("Sent");
            //Limpiamos el campo de entrada
            setLink("");
            
        }
        //Ocurrio un error
        catch (error) {
            console.error(error);
            alert("Error");
        }
    };
    //Checkeamos que se haya seleccionado un trabajo
    //Y que el campo de entrada no este vacio
    const isFormValid = selectedJobId && link.trim() !== "";

    return (
        <div>
            {/*Lista trabajos disponibles*/}
            <ul>
                {workers.map((worker)=>
                    ( <li key={worker.id}> 
                    {/*Renderizamos el componente Worker con los datos de los trabajos */}
                    <Worker id={worker.id} title={worker.title} />
                    {/*Boton para seleccionar un trabajo */}
                    <button onClick={() => setSelectedJobId(worker.id)}>
                        Apply to this job
                    </button>
                    </li>
                    ))}

                    <p>Trabajo seleccionado: {selectedJobId ?? "None"}</p>
            </ul>
            {/* Formulario para URL del repo*/}
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Repo URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />

            <button type="submit" disabled={!isFormValid}>Submit Application</button>
        </form>
        </div>

    )

}