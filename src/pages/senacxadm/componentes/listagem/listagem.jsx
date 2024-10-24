import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CardEquipe({ nomeEquipe, totalPontos }) {



  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle className="text-xl text-center mt-3 mb-4 text-blue-900 tracking-[3px]">{nomeEquipe} </CardTitle>
        <CardDescription className="text-center text-xl text-orange-500 tracking-[3px]">Total de Pontos:{totalPontos}</CardDescription>
      </CardHeader>
      {/* <CardContent className="space-y-2 flex items-center sm:flex-col justify-center lg:flex-row gap-4 mt-4">
        <Label>{totalPontos}</Label>
      </CardContent> */}
    </Card>
  );
}
