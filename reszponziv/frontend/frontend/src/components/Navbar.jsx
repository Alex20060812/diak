import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Diáknyilvántartó</a>
                <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#foMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="foMenu">


                    <NavLink class="nav-link" to="/">
                        Kezdőlap
                    </NavLink>


                    <NavLink class="nav-link active" to="/list">
                        Diákok listája
                    </NavLink>


                    <NavLink class="nav-link" to="/uj">
                        Új diák
                    </NavLink>


                    <NavLink class="nav-link" to="/modositas">
                        Módosítás
                    </NavLink>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;