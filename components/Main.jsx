import style from "./Main.module.css"
// import comics from "../src/comics";
import CreaCard from "./CreaCard";
import CardList from "./CardList";
// Continuate a lavorare nella stessa repo di ieri e create un nuovo componente riutilizzabile per visualizzare le card dei fumetti, sfruttando l’array di oggetti in allegato. Fate in modo che il componente riceva i dati del singolo fumetto come props.

export default function Main({ comics }) {
    return (
        <main>
            <div className={style.sfondosuper}></div>
            <div className="container">
                <CardList comics={comics} />
            </div>
        </main>
    )
}