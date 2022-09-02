
import Layout from '../components/Layout';
import Table from '../components/Table';
import Cliente from '../core/Cliente';
import Button from '../components/Button';
import Form from '../components/Form';
import { useState } from 'react';

export default function Home() {

  const clientes = [
    new Cliente('Carla Gabriela Schell', 36, '1'),
    new Cliente('Mateus Lucas Garcia', 25, '2'),
    new Cliente('Witor Schell Macario', 19, '3'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  //alternar entre form e table
  const [visivel , setVisivel] = useState<'table' | 'form'>('table')
  console.log(visivel)
  

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white">
      <Layout title='Cadastro Simples'>

      {visivel === 'table' ? (<>
        <div className='flex justify-end'>
        <Button onClick={() => setVisivel('form')} className='mb-4' color='green'>Novo Cliente</Button>
        </div>
        <Table clientes={clientes} clienteSelecionado={clienteSelecionado}  clienteExcluido={clienteExcluido}> </Table> 
        </>

      ) : ( <Form cancelar={() => setVisivel('table')} ></Form> )}

        
       
      </Layout>
    </div>
    
  )
}
