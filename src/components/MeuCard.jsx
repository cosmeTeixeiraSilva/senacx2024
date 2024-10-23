import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function MeuCard({title, descricao, conteudo}){
    return(
        <Card className="bg-blue-300">
            <CardHeader>
                <CardTitle className="text-blue-900 text-xl">{title}</CardTitle>
                <CardDescription>{descricao}</CardDescription>
            </CardHeader>
            <CardContent>
                {conteudo}
            </CardContent>
        </Card>
    );
};