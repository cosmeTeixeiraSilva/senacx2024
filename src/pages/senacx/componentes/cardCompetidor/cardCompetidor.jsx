import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@radix-ui/react-select"
import handleMudouCompetidor from './senacx';

export default function cardCompetidor(competidores) {
   
    
    return (
        <Select className="w-full" onValueChange={(SelectValue) => handleMudouCompetidor(SelectValue)}>
            <SelectTrigger >
                <SelectValue placeholder="Competidores" />
            </SelectTrigger>
            <SelectContent>
                {competidores.map(competidor => (
                    <SelectItem value={competidor.id}
                        key={competidor.id}>
                        {competidor.nome}
                    </SelectItem>
                ))}

            </SelectContent>
        </Select>
    )
}

