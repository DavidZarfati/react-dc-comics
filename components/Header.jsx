import Logo from "./Logo";

export default function Header() {
    const navbarLinks = [
        { nome: "Characters", active: false },
        { nome: "Comics", active: true },
        { nome: "Movies", active: false },
        { nome: "Tv", active: false },
        { nome: "Games", active: false },
        { nome: "Collectibles", active: false },
        { nome: "Videos", active: false },
        { nome: "Fans", active: false },
        { nome: "News", active: false },
        { nome: "Shop", active: false },
    ];
    /*{ <li><a href="#">Characters</a></li>
                            <li><a href="#" className="active">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Tv</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Collectibles</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Fans</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Shop</a></li>}*/
    return (
        <div className="container">
            {/* <ul className="test">
                <li><a href="#">Characters</a></li>
                <li><a href="#" className="active">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Tv</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Collectibles</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Fans</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
            </ul> */}
            <header className="d-flex justify-content-space-between">
                <div className="header-sinistro"><Logo /></div>
                <div className="header-destro d-flex">
                    <ul className="d-flex">
                        {
                            navbarLinks.map((curPage) => {
                                let colClass = curPage.active ? "active" : "";
                                return (
                                    <li className={colClass}><a href="#">{curPage.nome}</a></li>
                                )
                            })

                        }

                    </ul>
                </div>
            </header >
        </div>
    )
}