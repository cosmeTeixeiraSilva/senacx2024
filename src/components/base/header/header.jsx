import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./header.css"
import { Label } from "@radix-ui/react-label";
import { DoorOpen } from "lucide-react";


export default function Header() {
    const navigate = useNavigate();
    //pegando os dados de Login 
    // Recupera um item do localStorage
    const JuradoId = localStorage.getItem('juradoId');
    const juradoNome = localStorage.getItem('juradoNome');
    const juradoEmail = localStorage.getItem('juradoEmail');
    const juradoNivel = localStorage.getItem('juradoNivel');
    var nivel = '';
    //definir o nível 
    if (juradoNivel === '1'){

         nivel = 'Administrador';

    }else{

         nivel = 'Jurado';

    }
    function LogOut() {

        // Remove um item do localStorage
        localStorage.removeItem('juradoId');
        localStorage.removeItem('juradoNome');
        localStorage.removeItem('juradoEmail');
        localStorage.removeItem('juradoNivel');
        navigate('/');

    }
    return (
        <div className="bg-[#004C94]  p-2 m-1 drop-shadow-md rounded ">

            {/* <div className="logo2 text-[#FDC180] font-bold">
                    <img src="/Senac_logo.svg" className="logoMenor"></img>

                </div> */}
            <div className=" flex flex-col md:flex-row justify-between  mt-3 p-3 ">

                {/*Dados do Usuário Logado no Sistema */}
                <div className="user flex flex-col  bg-white p-3 rounded">
                    <span className="text-blue-500 font-bold ">Usuário Logado:</span>
                    <Label className="mt-2 text-orange-400">Código:<span className="text-blue-500 font-bold ml-3 text-xs">{String(JuradoId).padStart(4, '0')}</span></Label>
                    <Label className="text-orange-400">Nome:<span className="text-blue-500 font-bold ml-6 text-xs">{juradoNome}</span></Label>
                   
                    <Label className="text-orange-400">Nível:<span className="text-blue-500 font-bold ml-6 text-xs">{nivel}</span></Label>                  
                    
                </div>
                <Button variant={'default'} className='bg-orange-400  mt-3 ' onClick={() => LogOut()}> <DoorOpen className="m-3" />Sair</Button>

            </div>
        </div>
    );
};