import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket  } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Controles() {
  
  return (
    <Card className="m-6">
      <CardHeader>

        <CardTitle className="text-xl text-left mt-3 mb-1 text-blue-900 tracking-[3px]">Área Administrativa</CardTitle>
       
      </CardHeader>
      <CardContent className="flex items-center flex-col md:flex-rowjustify-center lg:flex-row gap-6 mt-4">
        

        {/* Botão confirma o voto e captura o valor do input associado */}
        <Button
          variant={"ghost"}
          className="h-12  bg-blue-900 text-white text-sm "   
    
        >
          <Rocket className="mr-2 size-8 text-white" />
          Liberar Resultado
        </Button>
        <Button
          variant={"ghost"}
          className="h-12  bg-orange-400 text-white text-sm "   
    
        >
          <Rocket className="mr-2 size-8 text-white" />
          Ver Votos Jurados
        </Button>
      </CardContent>
    </Card>
  );
}
