import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { Label } from "@radix-ui/react-label";
import { DoorOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const [juradoId, setJuradoId] = useState("");
    const [juradoNome, setJuradoNome] = useState("");
    const [juradoEmail, setJuradoEmail] = useState("");
    const [juradoNivel, setJuradoNivel] = useState("");

    useEffect(() => {
        const nomeLocal = localStorage.getItem("juradoNome");
        const nivelLocal = localStorage.getItem("juradoNivel");
        const emailLocal = localStorage.getItem("juradoEmail");
        const idLocal = localStorage.getItem("juradoId");

        setJuradoNome(nomeLocal || "");
        setJuradoNivel(nivelLocal === "1" ? "Administrador" : "Jurado");
        setJuradoEmail(emailLocal || "");
        setJuradoId(idLocal || "");
    }, []);

    function LogOut() {
        localStorage.removeItem("juradoId");
        localStorage.removeItem("juradoNome");
        localStorage.removeItem("juradoEmail");
        localStorage.removeItem("juradoNivel");
        navigate("/");
    }

    return (
        <div className="bg-[#004C94] drop-shadow-md rounded">
            <div className="flex flex-col md:flex-row justify-between m-3 p-2">
                <div className="user flex flex-col bg-white p-2 rounded">
                    <span className="font-bold text-xl">Usuário:</span>
                    <Label className="text-orange-400">
                        Nome:<span className="text-black font-bold ml-2 text-xs">{juradoNome}</span>
                    </Label>
                    <Label className="text-orange-400">
                        Atribuição:<span className="text-black font-bold ml-2 text-xs">{juradoNivel}</span>
                    </Label>
                </div>
                <Button
                    variant={"default"}
                    className="bg-orange-400 mt-3"
                    onClick={LogOut}
                >
                    <DoorOpen className="m-3" /> Sair
                </Button>
            </div>
        </div>
    );
}
