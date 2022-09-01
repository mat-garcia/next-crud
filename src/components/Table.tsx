import Cliente from "../core/Cliente";
import { IconEdit, IconTrash } from "./Icones";

interface TableProps {
    clientes: Cliente[]
    clienteSelecionado?: ( Cliente: Cliente) => void
    clienteExcluido?: ( Cliente: Cliente) => void
    children: any
}

export default function Table(props: TableProps){
    //  PEGA AS PROPRIEDADES DAS FUNÇÔES DE AÇÂO
    const showActions = props.clienteExcluido || props.clienteSelecionado

    // CABEÇALHO
    function renderHeader(){
        return (
            
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { showActions ? <th className="text-center p-4"></th> : false }
            </tr>
        )
    }

    // CORPO DA TABELA
    function renderData(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 ===0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {  // exibi o botao de ação caso função seja passada em Table
                         showActions ? renderActions(cliente) : false    
                    }
                </tr>
            )
        })
    }

    // BOTOES DE AÇÂO
    function renderActions(cliente: Cliente){
        return(
            <td className="flex justify-center ">
                {props.clienteSelecionado ? <button onClick={() => props.clienteSelecionado?.(cliente)} className="flex justfy-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">{IconEdit}</button> :
                false }
                {props.clienteExcluido ? <button onClick={() => props.clienteExcluido?.(cliente)} className="flex justfy-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1">{IconTrash}</button> :
                false }
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className=" text-gray-100 bg-gradient-to-r from-purple-500 to-purple-600">    
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}