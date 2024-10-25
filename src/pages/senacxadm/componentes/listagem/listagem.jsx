import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";
import { useEffect } from "react";

export default function CardEquipe({ indice, nomeEquipe, totalPontos }) {



  return (
    <Card className="m-1">
      <CardHeader>
        <CardTitle className="text-xl text-left mt-3 mb-4 text-blue-900 tracking-[3px] font-bold"><Rocket className='size-6 mr-2 text-orange-400 mb-2' /><label className="text-orange-400 font-bold mr-1"> {indice}º Lugar:</label> {nomeEquipe} </CardTitle>
        <CardDescription className="text-left font-bold text-xl text-blue-900 tracking-[3px]"><label className="text-orange-400 font-bold mr-2">Pontuação:</label >{totalPontos}</CardDescription>
      </CardHeader>
      {/* <CardContent className="space-y-2 flex items-center sm:flex-col justify-center lg:flex-row gap-4 mt-4">
        <Label>{totalPontos}</Label>
      </CardContent> */}
    </Card>
  );
}
