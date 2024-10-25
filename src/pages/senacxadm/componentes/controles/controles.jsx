import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react";
import { toast } from 'react-toastify';

//HABILITAR A VISUALIZAÇÃO DO RESULTADO 
export default function Controles() {

  const [habilitado, setHabilitado] = useState(false);
  const [urlResultado, seturl] = useState('');
  const [ToogleResultado, setToogleResultado] = useState(0);
  function habilitar() {


    const fetchResultado = async () => {

      try {

        //enviando o comando para a API Senacx
        if (habilitado) {
          //Não Mostrar o Resultado
          setHabilitado(false);
          //console.log(`Desabilitando: ${habilitado}`);
          const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/inativaresultado', {
            method: 'PUT',

          });
          const habilitaResultado = await response.json();
          //setCompeticoes(competicao);
          const dadoResultado = JSON.parse(JSON.stringify(habilitaResultado));
          //Criando um Array de Objeto 
          const ObjResultado = dadoResultado[0];
          //console.log(dadoResultado.message);
          toast.error(`${dadoResultado.message}  `, {
            autoClose: 2000
          });
          setToogleResultado(0);

        } else {
          //Mostrar o Resultado
          setHabilitado(true);
          //console.log(`Habilitando: ${habilitado}`);
          const response = await fetch('https://cosme4447.c44.integrator.host/api/senacx/ativaresultado', {
            method: 'PUT',

          });
          const habilitaResultado = await response.json();
          //setCompeticoes(competicao);
          const dadoResultado = JSON.parse(JSON.stringify(habilitaResultado));
          //Criando um Array de Objeto 
          const ObjResultado = dadoResultado[0];
          //console.log(dadoResultado.message);
          toast.success(`${dadoResultado.message}  `, {
            autoClose: 2000
          });
          setToogleResultado(1);
        }

      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };
    fetchResultado();


  }
  return (
    <div>
      <div className="equerda">
        <Card className="mt-3 bg-black">
          <CardHeader>

            <CardTitle className="text-xl text-left mt-1 text-blue-900 tracking-[3px] text-orange-400 ">Área Administrativa. </CardTitle>

          </CardHeader>
          <CardContent className="flex items-center flex-col md:flex-rowjustify-center lg:flex-row gap-6 mt-1">


            {/* Toogle confirma o voto e captura o valor do input associado */}



            <div className="flex items-center space-x-1">
              <Switch id="habilitarResultado"
                checked={habilitado}
                onCheckedChange={() => habilitar()}
                className="text-xl" />
              <Label htmlFor="habilitarResultado" className="text-md w-full text-white  font-bold">Liberar Resultado.</Label>
            </div>

          </CardContent>
        </Card>
      </div>
      <div className="direita flex justify-center mt-2 mb-2">

      </div>
    </div>
  );
}
