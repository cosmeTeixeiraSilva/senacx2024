import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Ranking() {
  
  return (
    <Card className="m-6">
      <CardHeader>
        <CardTitle className="text-xl text-left mt-3 mb-1 text-blue-900 tracking-[3px]">Ranking 3 primeiros:</CardTitle>
       
      </CardHeader>
      <CardContent className="flex items-center sm:flex-col justify-center lg:flex-row gap-6 mt-4">
        <span>Resultado: </span>

       
      </CardContent>
    </Card>
  );
}
