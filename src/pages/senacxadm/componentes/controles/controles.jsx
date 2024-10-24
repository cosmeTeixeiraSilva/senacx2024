import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket  } from "lucide-react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react";

export default function Controles() {
  const [habilitado, setHabilitado] = useState(false);
  function habilitar(){
    if(habilitado){
      //Não Mostrar o Resultado
      setHabilitado(false);
    }else{
      //Mostrar o Resultado
      setHabilitado(true);
    }
    console.log(`Status Habilitado: ${habilitado}`);
  }
  return (
    <Card className="m-6">
      <CardHeader>

        <CardTitle className="text-xl text-left mt-3 mb-1 text-blue-900 tracking-[3px]">Área Administrativa</CardTitle>
       
      </CardHeader>
      <CardContent className="flex items-center flex-col md:flex-rowjustify-center lg:flex-row gap-6 mt-4">
        

        {/* Toogle confirma o voto e captura o valor do input associado */}



    <div className="flex items-center space-x-4 w-[320px]">
      <Switch id="habilitarResultado"    
          checked= {habilitado}
          onCheckedChange={()=>habilitar()}
          className="text-2xl"/>
      <Label htmlFor="habilitarResultado" className="text-xl w-full">Habilitar Resultado.</Label>
    </div>



       
      </CardContent>
    </Card>
  );
}
