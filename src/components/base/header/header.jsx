import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./header.css"
import { Label } from "@radix-ui/react-label";
import { DoorOpen } from "lucide-react";
import { useEffect, useState } from "react";


export default function Header() {
    const navigate = useNavigate();
    const [JuradoId, setJuradoID] = useState();
    const [juradoNome, setJuradoNome] = useState();
    const [juradoEmail, setJuradoEmail] = useState();
    const [juradoNivel, setJuradoNivel] = useState();
    const [nivel, setNivel] = useState();
    //pegando os dados de Login 

    // Recupera um item do localStorage
    useEffect(() => {

        setJuradoID(localStorage.getItem('juradoId'));
        setJuradoNome(localStorage.getItem('juradoNome'));
        setJuradoEmail(localStorage.getItem('juradoEmail'));
        setJuradoNivel(localStorage.getItem('juradoNivel'));


        //definir o nível 
        if (juradoNivel === '1') {


            setNivel('Administrador');
            

        } else {

            setNivel('Jurado');

        }


    }, []);

    function LogOut() {

        // Remove um item do localStorage
        localStorage.removeItem('juradoId');
        localStorage.removeItem('juradoNome');
        localStorage.removeItem('juradoEmail');
        localStorage.removeItem('juradoNivel');
        navigate('/');

    }
    return (
        <div className="bg-[#004C94]   drop-shadow-md rounded ">

            {/* <div className="logo2 text-[#FDC180] font-bold">
                    <img src="/Senac_logo.svg" className="logoMenor"></img>

                </div> */}
            <div className=" flex flex-col md:flex-row justify-between  mt-1 p-3 ">

                {/*Dados do Usuário Logado no Sistema */}
                <div className="user flex flex-col  bg-white p-3 rounded bg-black">
                    <span className="text-white font-bold text-xl ">Usuário:</span>
                    {/* <Label className="mt-2 text-orange-400">Código:<span className="text-blue-500 font-bold ml-2 text-xs">{String(JuradoId).padStart(4, '0')}</span></Label> */}
                    <Label className="text-orange-400">Nome:<span className="text-white font-bold ml-2 text-xs">{juradoNome}</span></Label>
                    <Label className="text-orange-400">Atribuição:<span className="text-white font-bold ml-2 text-xs">{nivel}</span></Label>

                </div>
                <Button variant={'default'} className='bg-orange-400  mt-3 ' onClick={() => LogOut()}> <DoorOpen className="m-3" />Sair</Button>


            </div>
        </div>
    );
};