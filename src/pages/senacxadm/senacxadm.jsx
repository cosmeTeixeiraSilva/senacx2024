import Header from "@/components/base/header/header"
import Controles from "./componentes/controles/controles"
import RankingGeral from "./componentes/geral/geral"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import CardEquipe from "./componentes/listagem/listagem"
import { useState } from "react";
import { toast } from 'react-toastify';
import Footer from "@/components/base/footer/footer";
export default function About() {
    const navigate = useNavigate();
    const [resultado, setResultado] = useState([]);
    const [mostrarControles, setControles] = useState(false);
    const [nivelJurado, setNivelJurado] = useState();
    const [JuradoId, setJuradoID] = useState();
    const [juradoNome, setJuradoNome] = useState();
    const [juradoEmail, setJuradoEmail] = useState();
    const [juradoNivel, setJuradoNivel] = useState();
    const [nivel, setNivel] = useState();

    useEffect(() => {
        //verificando Autenticacao
        const JuradoId = localStorage.getItem('juradoId');
        if (JuradoId === null) {

            navigate('/login');
        }
        //carregando o ranking dos competidores 

        const fetchRanking = async () => {
            console.log('Atualizando Ranking');
            //pegando o nivel do Usuário 
            const juradoNivel = localStorage.getItem('juradoNivel');
            //Atualizando o nível do Jurado 
            setNivelJurado(juradoNivel);
            //console.log(`Nível do Jurado é: ${juradoNivel}`)
            //habilitando os controles 
            if (mostrarControles || juradoNivel === '1') {

                setControles(true);
            }

            try {

                const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/ranking');
                const Resultado = await response.json();
                setResultado(Resultado);
            } catch (err) {

                console.error('Erro ao buscar dados:', err);

            }
        };
        fetchRanking();
        //Atualiza o componente a cada 30 segundos
        // Configurando o intervalo
        const intervalo = setInterval(fetchRanking, 30000);

        // Limpando o intervalo ao desmontar o componente
        return () => clearInterval(intervalo);
    }, []);

    //Mensagem de Boas Vindas 
    const executou = useRef(false); // flag inicializada como false
    useEffect(() => {

        if (executou.current) {
            return;

        }  // se já executou, retorna sem fazer nada
        //Mensagem de Boas Vindas
        setJuradoID(localStorage.getItem('juradoId'));
        setJuradoNome(localStorage.getItem('juradoNome'));
        setJuradoEmail(localStorage.getItem('juradoEmail'));
        setJuradoNivel(localStorage.getItem('juradoNivel'));
        //Dados 
        console.log(`${juradoNome}`);

        //definir o nível 
        if (juradoNivel === '1') {


            setNivel('Administrador');


        } else {

            setNivel('Jurado');

        }
        toast.success(`Bem vindo a Plataforma SENACX  ${localStorage.getItem('juradoNome')}`, {

            autoClose: 4000
        });
        executou.current = true; // Define o flag para evitar a execução novamente

    }, []);

    return (
        <div className="pagina p-2">

            <Header />
            {mostrarControles && (
                <div>

                    <Controles />

                </div>
            )}
            <Footer />

            {/* <Ranking /> */}
            {/* <RankingGeral /> */}
            {/* <DashBoardAdm /> */}
            <div className="quesitos flex flex-row justify-between flex-wrap mt-6">
                {resultado.map((equipe, index) => (


                    <CardEquipe key={index} nomeEquipe={equipe.nome} totalPontos={equipe.total_nota} indice={index + 1} />

                ))}

            </div>


        </div>
    )
}