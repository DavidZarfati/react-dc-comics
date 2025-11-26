import style from "./Main.module.css"
import comics from "../src/comics";

export default function Main() {
    return (
        <main>
            <div className={style.sfondosuper}></div>
            <div className="container">

                <div className={style.row}>
                    {comics.map((comic) => (
                        <div key={comic.id} className={style.col}>
                            <img src={comic.thumb} alt={comic.series} />
                            <h5>{comic.series}</h5>
                        </div>
                    ))}
                    <button className={style.loadmore}>Load More</button>
                </div>


            </div>
        </main>
    )
}