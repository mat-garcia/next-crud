import { useState } from "react";

import Cliente from "../core/Cliente";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    cliente: Cliente
    clienteChange?: (cliente: Cliente) => void
    cancelar?: () => void
}

export default function Form (props: FormProps){
    const id = props.cliente?.id ?? null

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? <Entry  className="mb-4" readonly label="Código" value={id}></Entry> : false}
            <Entry className="mb-4" onChange={setNome} label="Nome" value={nome}></Entry>
            <Entry onChange={setIdade} label="Idade" value={idade} type="number"></Entry>
            <div className="flex justify-end mt-7">
                <Button  className="mr-2 " color="blue" onClick={() => props.clienteChange?.(new Cliente(nome,idade,id))}> {id ? 'Alterar' : 'Salvar'}</Button>
                <Button onClick={props.cancelar}> Cancelar </Button>
            </div>
        </div>
    )
}