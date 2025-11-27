

export default function CreaCard(props) {
    return (
        <div className={props.className}>
            <img src={props.thumb} alt={props.series} />
            <h5>{props.series}</h5>
        </div>
    );
}