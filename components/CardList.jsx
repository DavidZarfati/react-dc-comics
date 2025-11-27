import style from "./Main.module.css";
import CreaCard from "./CreaCard";

export default function CardList({ comics }) {
    return (
        <div className={style.row}>
            {comics.map(({ id, thumb, series }) =>
                <CreaCard
                    key={id}
                    thumb={thumb}
                    series={series}
                    className={style.col}
                />
            )}
            <button className={style.loadmore}>Load More</button>
        </div>
    );
}