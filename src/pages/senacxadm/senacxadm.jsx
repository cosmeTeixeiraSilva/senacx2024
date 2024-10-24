import Header from "@/components/base/header/header"
import Controles from "./componentes/controles/controles"
import RankingGeral from "./componentes/geral/geral"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import CardEquipe from "./componentes/listagem/listagem"
import { useState } from "react";
export default function About() {
    const navigate = useNavigate();
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        //verificando Autenticacao
        const JuradoId = localStorage.getItem('juradoId');
        if (JuradoId === null) {

            navigate('/login');
        }
        //carregando o ranking dos competidores 

        const fetchRanking = async () => {
            try {

                const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/ranking');
                const Resultado = await response.json();
                setResultado(Resultado);
            } catch (err) {

                console.error('Erro ao buscar dados:', err);

            }
        };
        fetchRanking();
    }, []);



    return (
        <div className="pagina p-2 rounded border">

            <Header />
            <Controles />
            {/* <Ranking /> */}
            {/* <RankingGeral /> */}
            {/* <DashBoardAdm /> */}
            <div className="quesitos flex flex-row justify-center">
                {resultado.map(equipe => (

                    <CardEquipe nomeEquipe={equipe.nome} totalPontos={equipe.total_nota} />

                ))}

            </div>


        </div>
    )
}