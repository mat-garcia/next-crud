import { useState, useEffect } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTableOrForm from "./useTableOrForm";

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

  //alternar entre form e table
  const {tableVisivel, formVisivel, exibirTable, exibirForm } = useTableOrForm()

  //pega o cliente selecionado
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);

  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTable()
    })
  }
  
  function selecionarCliente(cliente: Cliente){
    setCliente(cliente)
    exibirForm()

  }

  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente : Cliente){
   await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio)
    exibirForm()
  }
  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    tableVisivel,
    exibirTable,
    
  }

}
