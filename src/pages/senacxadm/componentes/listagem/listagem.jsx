import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function CardEquipe({ indice, nomeEquipe, totalPontos }) {



  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle className="text-xl text-center mt-3 mb-4 text-blue-900 tracking-[3px]"><label className="text-orange-400 font-bold mr-2">Posição {indice}:</label> {nomeEquipe} </CardTitle>
        <CardDescription className="text-center text-xl text-blue-900 tracking-[3px]"><label className="text-orange-400 font-bold mr-2">Total de Pontos:</label>{totalPontos}</CardDescription>
      </CardHeader>
      {/* <CardContent className="space-y-2 flex items-center sm:flex-col justify-center lg:flex-row gap-4 mt-4">
        <Label>{totalPontos}</Label>
      </CardContent> */}
    </Card>
  );
}
