

// export default function CreaCard(props) {
//     return (
//         <div className={props.className}>
//             <img src={props.thumb} alt={props.series} />
//             <h5>{props.series}</h5>
//         </div>
//     );
// }

// Possiamo DESTRUTTURARE?

export default function CreaCard({ className, thumb, series }) {
    return (
        <div className={className}>
            <img src={thumb} alt={series} />
            <h5>{series}</h5>
        </div>
    );
}