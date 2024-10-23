
import "./menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
    return (
        <div className="menu mt-3 mb-3" >

            <Link to="/usuarios" className="text-white itemMenu">Usuários</Link>
            <Link to="/competicoes" className="text-white itemMenu">Competições</Link>
            <Link to="/avaliacao" className="text-white itemMenu">Avaliação</Link>
            <Link to="/dashboard" className="text-white itemMenu">Dashboard</Link>
            <Link to="/senacx" className="text-white itemMenu">Senac X </Link>


        </div>


    );
};