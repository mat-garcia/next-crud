
import Layout from '../components/Layout';
import Table from '../components/Table';
import Cliente from '../core/Cliente';
import Button from '../components/Button';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import ClienteRepositorio from '../core/ClienteRepositorio';
import ColecaoCliente from '../backend/db/ColecaoCliente';

export default function Home() {
  
  const repo: ClienteRepositorio = new ColecaoCliente()

  //alternar entre form e table
  const [visivel , setVisivel] = useState<'table' | 'form'>('table');
  //pega o cliente selecionado
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);

  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('table')
    })
  }
  
  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')

  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente : Cliente){
   await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio)
    setVisivel('form')
  }

  

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white">
      <Layout title='Cadastro Simples'>

      {visivel === 'table' ? (<>
        <div className='flex justify-end'>
        <Button onClick={novoCliente} className='mb-4' color='green'>Novo Cliente</Button>
        </div>
        <Table clientes={clientes} clienteSelecionado={clienteSelecionado}  clienteExcluido={clienteExcluido}> </Table> 
        </>

      ) : ( <Form cliente={cliente} cancelar={() => setVisivel('table')}  clienteChange={salvarCliente}></Form> )}

        
       
      </Layout>
    </div>
    
  )
}
