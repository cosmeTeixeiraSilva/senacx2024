import { useEffect, useState } from 'react';
import "./senacx.css";
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

//import Select 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



import CardVoto from './componentes/card/card';
import Header from '@/components/base/header/header';
import { Label } from '@radix-ui/react-label';
import { Rocket } from "lucide-react";

export default function Usuarios() {

    const [mostrarResultado, setMostrarResultado] = useState(0);
    const [competidor, setCompetidor] = useState([]);
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [celular, setCelular] = useState("");
    const [competidores, setCompetidores] = useState([]);
    const [competicoes, setCompeticoes] = useState([]);
    const [quesitos, setQuesitos] = useState([]);
    //Dados da Competicao 
    const [CodCompeticao, setCodCompeticao] = useState();
    const [NomeCompeticao, setNomeCompeticao] = useState();
    const [CidadeCompeticao, setCidadeCompeticao] = useState();
    //Dados do Competidor
    const [EmailCompetidor, setEmailCompetidor] = useState();
    const [NomeCompetidor, setNomeCompetidor] = useState();

    // Estado para controlar o clique do botão
    const [btnCarregar_Clicked, setCarregarClicked] = useState(true);
    // Estado para Gestao de Nivel
    const [gestaoNivel, setGestaoNivel] = useState([]);

    //controla a habilitação do Botao 
    // Estado para controlar se o botão está habilitado
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [selectedCompeticao, setSelectedCompeticao] = useState(''); // Estado para armazenar a seleção

    const navigate = useNavigate();

    function limpaCompetidor() {
        setCelular("");
        setEmail("");
        setCodigo("");

    }
    function limpaCompeticao() {

        setCodCompeticao("");
        setNomeCompeticao("");
        setCidadeCompeticao("");
    }

    //Carregando os Competidores 
    useEffect(() => {

        //verificando Autenticacao
        const JuradoId = localStorage.getItem('juradoId');
        if (JuradoId === null) {

            navigate('/login');
        }

        //Limpando as variáveis
        //limpaCompeticao();
        //limpaCompetidor();
        const fetchCompetidores = async () => {
            try {

                const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/carregacompetidores');
                const competidores = await response.json();
                setCompetidores(competidores);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchCompetidores();
    }, []);

    //Função mudou competidor
    //novo usuário
    const handleMudouCompetidor = async (id) => {

        //Limpando as variáveis
        limpaCompetidor();
        //console.log(id);
        //limpando os quesitos por um Array Vazio 
        setQuesitos([]);

        try {
            const dadosCompetidor = await fetch(`https://cosme4447.c44.integrator.host/api/senacx/findcompetidor/${id})`, {
                method: 'GET',

            });
            const Dadoscompetidor = await dadosCompetidor.json();
            //para se não localizar o competidor
            if (!Dadoscompetidor) {
                return;
            }
            setCompetidor(Dadoscompetidor);

            //converter para array
            //const dadosComp = Object.values(competidor);
            const dadosComp = JSON.parse(JSON.stringify(Dadoscompetidor));
            //console.log(dadosComp);
            //console.log(dadosComp.email);
            //passando os dados para o FrontEnd com 
            setCodigo((String(dadosComp.id).padStart(4, '0')));
            setCelular(dadosComp.celular);
            setNomeCompetidor(dadosComp.nome);
            setEmail(dadosComp.email);
            //busca as competicoes do competidor Selecionado
            BuscaCompeticoes(id);
            //habilitar o botão para carregar os dados 
            setIsButtonDisabled(false);
            // Exibir Toast de sucesso
            toast.success('Competidor Localizado!', {
                autoClose: 3000
            });
        } catch (err) {
            console.error('Erro ao buscar dados do Competidor:', err);
        }

    };
    //Observa o Click do botao carregar 
    useEffect(() => {

        if (btnCarregar_Clicked) {
            //Mostra no Console do Navegador do FrontEnd o texto abaixo
            //console.log('Houve um click no Botão Carregar Quesitos');
            //voltar o estado de falso do botão
            setCarregarClicked(false);


        }
        //O array de Dependencia aguarda o click no Botão
    }, [btnCarregar_Clicked]);
    //Gestão de Componentes na Tela 

    useEffect(() => {

        const fetchGestaoNivel = async () => {
            try {

                const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/gestaoacesso');
                const gestaoNivelRes = await response.json();
                setGestaoNivel(gestaoNivelRes);
                const dadosAcesso = JSON.parse(JSON.stringify(gestaoNivelRes));
                //console.log(dadosAcesso);
                //Controle Acessos 
                //console.log(`Competidor : ${dadosAcesso[0].Resultado}`);
                //console.log(`Admininstrador : ${dadosAcesso[1].Resultado}`);
                //console.log(`Jurado : ${dadosAcesso[2].Resultado}`);
                setMostrarResultado(dadosAcesso[2].Resultado)
                //console.log(`Acesso Jurado ao Resultado: ${mostrarResultado}`)
                //console.log(`Tipo: ${typeof (mostrarResultado)}`)

            } catch (err) {

                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchGestaoNivel();

        //Setando a Gestao de nivel 
    }, []);
    //botao foi clicado 
    function btnClicou() {

        //Carregando os Quesitos....         
        const fetchQuesitos = async () => {
            try {
                const idCompeticao = parseInt(CodCompeticao);

                const response = await fetch(`https://cosme4447.c44.integrator.host/api/senacx/listQuesitos/${idCompeticao}`);
                const quesitos = await response.json();
                setQuesitos(quesitos);
                const dadosQuesitos = JSON.parse(JSON.stringify(quesitos));
                const quantidadeQuesitos = Object.keys(dadosQuesitos).length;
                //console.log(`Quantidade de Quesitos Localizados: ${quantidadeQuesitos}`);
                if (quantidadeQuesitos == 0) {
                    // Exibir Toast de sucesso
                    toast.error(`Sem Quesitos Cadastrados: ${quantidadeQuesitos} `, {
                        autoClose: 4000
                    });
                    return;

                } else {
                    toast.success(`Número de Quesitos: ${quantidadeQuesitos}  `, {
                        autoClose: 4000
                    });
                }

            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchQuesitos();
        setIsButtonDisabled(true);
        //console.log("Botão Desativado")
    }
    //funcao busca competicoes 
    function BuscaCompeticoes(idCompetidor) {
        //Carregando os Quesitos 
        const fetchCompeticoes = async () => {
            try {
                const response = await fetch(`https://cosme4447.c44.integrator.host/api/senacx/carregacompeticoes/${idCompetidor}`, {
                    method: 'GET',

                });

                const competicao = await response.json();
                setCompeticoes(competicao);
                const dadosCompeticao = JSON.parse(JSON.stringify(competicao));
                const quantidadeInscricoes = Object.keys(dadosCompeticao).length;
                //console.log(`A quantidade de Inscrições encontradas para o competidor foi de: ${quantidadeInscricoes}`)
                if (quantidadeInscricoes == 0) {
                    // Exibir Toast de sucesso
                    toast.error(`Inscrições: ${quantidadeInscricoes} `, {
                        autoClose: 4000
                    });
                    return;

                } else {
                    toast.success(`Inscrições: ${quantidadeInscricoes}  `, {
                        autoClose: 4000
                    });
                }
                //Criando um Array de Objeto 
                const ObjDados = dadosCompeticao[0];
                //console.log(ObjDados);
                //console.log(ObjDados.id);
                //Limpando as variáveis

                setCodCompeticao((String(ObjDados.id).padStart(4, '0')));
                setNomeCompeticao(ObjDados.Nome);
                setCidadeCompeticao(ObjDados.CEP);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchCompeticoes();

    }
    //funcao busca competicoes 
    function handleMudouCompeticao(idCompeticao) {

        //setando a competicao 
        //Carregando os Quesitos 
        const fetchCompeticao = async () => {
            try {
                const response = await fetch(`https://cosme4447.c44.integrator.host/api/senacx/findcompeticao/${idCompeticao}`, {
                    method: 'GET',

                });

                const competicao = await response.json();
                //setCompeticoes(competicao);
                const dadosCompeticao = JSON.parse(JSON.stringify(competicao));
                //Criando um Array de Objeto 
                const ObjDados = dadosCompeticao[0];
                //console.log(ObjDados);
                //console.log(ObjDados.nome);
                //Limpando as variáveis
                //limpaCompeticao();
                setCodCompeticao((String(idCompeticao).padStart(4, '0')));
                setNomeCompeticao(ObjDados.nome);
                setCidadeCompeticao(ObjDados.cidade);
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };
        fetchCompeticao();
        //verificando a quantidade de quesitos localizados 
        //console.log(`Código da Competição ativa: ${idCompeticao}`);
        //habilitando o Botão Carregar Quesitos
        setIsButtonDisabled(false);
        //Limpar os quesitos 
        setQuesitos([]);

    }


    return (
        <div className='usuarios flex flex-col justify-cente  p-3  h-full'>
            <Header />
            {/*Botão Mostrar Resultado   */}
            {mostrarResultado === 1 && (
                <div className='flex m-1'>

                    <Button variant={'default'}

                        className="bg-orange-500 p-8"
                        onClick={() => navigate('/senacxadm')}> Ver Resultado </Button>

                </div>
            )}
            <div className="submenu flex  flex-col justify-center  border rounded p-6 bg-white mt-4">
                <div className="competidor flex flex-col justify-center">
                    <span className='text-left tituloTable'>Equipe/Competidor. </span>
                    <Select className="comboSenacx"
                        //value={NomeCompetidor} //Garante que não tenha valor selecionado qdo carregar 
                        onValueChange={(SelectValue) => handleMudouCompetidor(SelectValue)}>
                        <SelectTrigger >
                            <SelectValue placeholder="Competidores" />
                        </SelectTrigger>
                        <SelectContent>
                            {competidores.map(competidor => (
                                <SelectItem value={competidor.id}
                                    key={competidor.id}>
                                    {competidor.nome}
                                </SelectItem>
                            ))}

                        </SelectContent>
                    </Select>
                </div>
                <div className="competidor flex flex-col sm:w-full">
                    <span className='comboSenacx text-left tituloTable mt-4'>Competição. </span>
                    <Select
                        value=''  //Garante o evento Mudar o valor caso contrario o OnValueChange não funciona
                        onValueChange={(SelectValue) => handleMudouCompeticao(SelectValue)}>
                        <SelectTrigger >

                            <SelectValue placeholder="Selecione uma Competição" />
                        </SelectTrigger>
                        <SelectContent>
                            {competicoes.map(competicao => (
                                <SelectItem value={competicao.id}
                                    key={competicao.id}>
                                    {competicao.nome}
                                </SelectItem>
                            ))}

                        </SelectContent>
                    </Select>
                </div>


            </div>
            <Label className='mt-2 text-blue-600 font-bold'>Dados da pontuação a ser inserida:</Label>
            <div className="dados flex  justify-between mt-4 rounded flex-col  md:flex-row  gap-6  ">


                <div name='competidor' className='md:w-[600px]' >

                    <div className="CardDados p-4 border mt-2  flex flex-col justify-items-center align-middle rounded  ] " >

                        <Label htmlFor="competidor" className='text-orange-400'>Competidor:</Label>
                        {/* <Label className='mt-2'>  Código: <span className='text-blue-500'> {codigo}</span></Label> */}
                        <Label className='mt-2'> E-mail: <span className='text-blue-500'>{email}</span></Label>
                        <Label className='mt-2'> Celular: <span className='text-blue-500'>{celular}</span></Label>


                    </div>
                </div>
                <div name='competicao' className='md:w-[600px]'>

                    <div className="CardDados p-4 border mt-2  flex flex-col justify-items-center align-middle rounded ]" >

                        <Label htmlFor="competidor" className='text-orange-400'>Competição:</Label>
                        {/* <Label className='mt-2'> Código: <span className='text-orange-500'>{CodCompeticao}</span></Label> */}
                        <Label className='mt-2'> Competição: <span className='text-orange-500'>{NomeCompeticao}</span></Label>
                        <Label className='mt-2'> Cidade: <span className='text-orange-500'>{CidadeCompeticao}</span></Label>

                    </div>
                </div>
            </div >

            <div className='flex justify-center'>
                <Button variant="ghost" className=' btnTable p-5 bg-orange-500 text-white font-bold rounded mt-6 text-xl w-full '
                    onClick={() => btnClicou()}
                    disabled={isButtonDisabled}
                >
                    <Rocket className='size-6 mr-2' />
                    Carregar Quesitos
                </Button>
            </div>
            <div className="quesitos flex flex-col justify-center w-full">
                {quesitos.map(quesito => (
                    <CardVoto descricao={quesito.quesito} detalhes={quesito.descricao} id={quesito.id} key={quesito.id} CodCompetidor={codigo} CodCompeticao={CodCompeticao} />

                ))}

            </div>


        </div >
    );
}
