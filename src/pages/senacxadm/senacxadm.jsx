import Header from "@/components/base/header/header"
import "./senacxadm.css"
import Controles from "./componentes/controles/controles"
import DashBoardAdm from "./componentes/dashboard/dashboard"
import Ranking from "./componentes/resultado/resultado"
import RankingGeral from "./componentes/geral/geral"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
export default function About() {
    const navigate = useNavigate();
   //Carregando os Competidores 
   useEffect(() => {
        //verificando Autenticacao
        const JuradoId = localStorage.getItem('juradoId');
        if(JuradoId === null){

            navigate('/login');
        }

       


    
    }, []);

    return (
        <div className="pagina p-2 rounded border">

            <Header />
            <Controles />
            <Ranking />
            <RankingGeral />
            <DashBoardAdm />
            
        </div>
    )
}