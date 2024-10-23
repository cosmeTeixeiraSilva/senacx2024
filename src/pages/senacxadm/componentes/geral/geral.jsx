import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function RankingGeral() {
  
  return (
    <Card className="m-6 ">
      <CardHeader>
        <CardTitle className="text-xl text-left mt-3 mb-1 text-blue-900 tracking-[3px]">Ranking Geral por Equipes:</CardTitle>
       
      </CardHeader>
      <CardContent className="flex items-center sm:flex-col justify-center lg:flex-row gap-6 mt-4">
        <span>Resultado: </span>

       
      </CardContent>
    </Card>
  );
}
