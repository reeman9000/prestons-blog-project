function NavBar() {
    return (
        <>
            <nav id="navbarid" className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/psoper1.github.io//blog">Blog</a>
                            <a className="nav-link" href="/psoper1.github.io//projects">Projects</a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;