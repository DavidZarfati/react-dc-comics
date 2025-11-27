import style from "./Main.module.css"
import comics from "../src/comics";
import CreaCard from "./CreaCard";
// Continuate a lavorare nella stessa repo di ieri e create un nuovo componente riutilizzabile per visualizzare le card dei fumetti, sfruttando l’array di oggetti in allegato. Fate in modo che il componente riceva i dati del singolo fumetto come props.

export default function Main() {
    return (
        <main>
            <div className={style.sfondosuper}></div>
            <div className="container">

                <div className={style.row}>
                    {comics.map(({ id, thumb, series }) => (
                        <CreaCard
                            key={id}
                            thumb={thumb}
                            series={series}
                            className={style.col}
                        />
                    ))}
                    <button className={style.loadmore}>Load More</button>
                </div>


            </div>
        </main>
    )
}