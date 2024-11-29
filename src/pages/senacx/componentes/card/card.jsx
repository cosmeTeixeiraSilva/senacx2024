import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VoteInput from "../inputVoto/inputvoto";
import { Frown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from 'react-toastify';

export default function CardVoto({ CodCompetidor, CodCompeticao, descricao, id, detalhes }) {
  // Estado para armazenar o valor do input de cada card (com base no ID do card)
  const [inputValues, setInputValues] = useState({});
  // Estado para desabilitar o botão após o clique
  const [buttonDisabled, setButtonDisabled] = useState({});
  // Função para lidar com a mudança no input
  const handleInputChange = (e, cardId) => {
    const { value } = e.target; // Obtém o valor do input
    setInputValues((prev) => ({
      ...prev,
      [cardId]: value, // Armazena o valor do input associado ao ID do card
    }));
  };

  // Função de confirmar voto
  function confirmarVoto(cardId) {
    const notaDada = inputValues[cardId]; // Pega o valor do input correspondente ao card

    if (notaDada !== undefined) {

      console.log("------------------------------------------------------------------");
      console.log(`Código Quesito: ${cardId}`);
      console.log(`Código Competidor: ${CodCompetidor}`);
      console.log(`Código da Competição: ${CodCompeticao}`);
      console.log(`Nota dada: ${notaDada}`); // Mostra o valor do input
      console.log("------------------------------------------------------------------");
      const idQuesito = parseInt(cardId);
      const idCompetidor = parseInt(CodCompetidor);
      const idCompeticao = parseInt(CodCompeticao);
      const nota = parseInt(notaDada);
      const JuradoId = localStorage.getItem('juradoId');
      const juradoNome = localStorage.getItem('juradoNome');
      const idJurado = JuradoId;
      //Salvando o Voto 22/10/2024 1 a Fazer a tarde....
      //vetor com os dados do voto 
      const dadosVoto = {

        idJurado,
        idQuesito,
        idCompetidor,
        idCompeticao,
        nota,

      };
      console.log(dadosVoto);
      if (nota < 0 || Number.isNaN(nota)) {

        toast.error(`Favor inserir uma nota ${localStorage.getItem('juradoNome')}!`, {
          autoClose: 3000
        });
        return;
      }
      const response = fetch('https://cosme4447.c44.integrator.host/api/senacx/inserirvoto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosVoto),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
          }
          return response.json(); // Parsear a resposta como JSON
        })
        .then((data) => {
          console.log('Resposta recebida:', data.message);
          console.log('Status Voto:', data.status);
          // Aqui você pode lidar com a resposta
          //Toast Confirmando o Voto no Quesito 
          if (data.status === 0) {
            toast.success(`${data.message}: ${(String(notaDada).padStart(2, '0'))}`, {
              autoClose: 2000
            });
            toast.success(`Obrigado ${juradoNome}`, {
              autoClose: 2000
            });
          } else {

            toast.error(`${data.message}, ${juradoNome}!`, {
              autoClose: 3000
            });
          }
        })
        .catch((error) => {
          console.error('Erro:', error);
          // Tratar erros aqui
          toast.error(`${data.message}`, {
            autoClose: 3000
          });
        });


      // Desabilita o botão do card correspondente
      setButtonDisabled((prev) => ({
        ...prev,
        [cardId]: true, // Desabilita o botão associado ao card
      }));


    } else {

      console.log("Nota não encontrada ou não definida.");

      // Exibir Toast de erro
      toast.error(`Favor Inserir NOTA  ${localStorage.getItem('juradoNome')}`, {

        autoClose: 3000
      });
      //habilitando o botão Novamente
      setButtonDisabled(false);


    }

  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-xl text-center mt-3 mb-4 text-blue-900 tracking-[3px]">{descricao}</CardTitle>
        <CardDescription className="md:text-center text-justify text-xl text-orange-500 tracking-[3px]">{detalhes}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex items-center sm:flex-col justify-center lg:flex-row gap-4 mt-4">
        {/* Componente VoteInput passa o valor correto no onChange */}
        <VoteInput id={id} onChange={(e) => handleInputChange(e, id)} />

        {/* Botão confirma o voto e captura o valor do input associado */}
        <Button
          variant={"default"}
          id={id}
          className="h-12  bg-blue-900 text-white text-xl w-[130px]"
          onClick={() => confirmarVoto(id)}
          disabled={buttonDisabled[id]} // Desabilita o botão se o estado for true
        >
          <Rocket className="mr-2 size-8 text-white" />

        </Button>
      </CardContent>
    </Card>
  );
}
