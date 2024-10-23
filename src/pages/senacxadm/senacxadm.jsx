import Header from "@/components/base/header/header"
import "./senacxadm.css"
import Controles from "./componentes/controles/controles"
import DashBoardAdm from "./componentes/dashboard/dashboard"
import Ranking from "./componentes/resultado/resultado"
import RankingGeral from "./componentes/geral/geral"
export default function About() {
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