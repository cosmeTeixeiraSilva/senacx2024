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
    function LogOut() {

        // Remove um item do localStorage
        localStorage.removeItem('juradoId');
        localStorage.removeItem('juradoNome');
        localStorage.removeItem('juradoEmail');
        localStorage.removeItem('juradoNivel');
        navigate('/');

    }
    return (
        <div className="bg-[#004C94]  p-2 m-1 drop-shadow-md rounded">

            {/* <div className="logo2 text-[#FDC180] font-bold">
                    <img src="/Senac_logo.svg" className="logoMenor"></img>

                </div> */}
            <div className=" flex flex-col md:flex-row justify-between mt-3 p-3 ">

                {/*Dados do Usuário Logado no Sistema */}
                <div className="user flex flex-col justify-items-start align-middle  mr-6 bg-white p-3 rounded">
             
                    <Label className="mt-2 text-orange-400">Código:{String(JuradoId).padStart(4, '0')}</Label>
                    <Label className="text-orange-400">Nome:{juradoNome}</Label>
                    <Label className="text-orange-400">Email:{juradoEmail}</Label>
                    
                </div>
                <Button variant={'default'} className='bg-orange-400  m-6 ' onClick={() => LogOut()}> <DoorOpen className="m-3" />Sair</Button>

            </div>
        </div>
    );
};