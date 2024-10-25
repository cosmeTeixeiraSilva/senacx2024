// src/components/inputVoto/inputvoto.js
import './inputvoto.css';
import { useState } from "react";

export default function VoteInput({ id, onChange }) {
  const [inputValue, setInputValue] = useState('');

  // Função para validar e limitar o valor entre 0 e 5
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Verifica se o valor está entre 0 e 10
    if (value >= 0 && value <= 5) {
      setInputValue(value); // Atualiza o valor localmente
      onChange(e); // Dispara a função onChange recebida do pai
    } else if (value === '') {
      // Permite limpar o input
      setInputValue('');
      onChange(e);
    }
  };

  return (
    <input
      className="inputVoto text-center h-12 text-sm"
      type="number"
      id={`input-${id}`}
      value={inputValue} // Valor controlado pelo estado local
      onChange={handleInputChange} // Valida o valor inserido
      min="0" // Define o valor mínimo no HTML
      max="5" // Define o valor máximo no HTML
      step="1" // Incrementa de 1 em 1
      placeholder='0 a 5'

    />
  );
}
