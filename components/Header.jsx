import Logo from "./Logo";

export default function Header({ navbarLinks }) {

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
                            navbarLinks.map((curPage, index) => {
                                return (
                                    <li className={curPage.active ? "active" : ""} key={index}>
                                        <a href="#">{curPage.nome}</a>
                                    </li>
                                )
                            })

                        }

                    </ul>
                </div>
            </header >
        </div>
    )
}