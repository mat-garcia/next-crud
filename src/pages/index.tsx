
import Layout from '../components/Layout';
import Table from '../components/Table';
import Button from '../components/Button';
import Form from '../components/Form';

import useClientes from '../hooks/useClientes';

export default function Home() {
  const { cliente,
          clientes, 
          selecionarCliente, 
          excluirCliente, 
          novoCliente, 
          salvarCliente,
          tableVisivel,
          exibirTable
          
         
      } = useClientes()

  

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white">
      <Layout title='Cadastro Simples'>

      {tableVisivel ? (<>
        <div className='flex justify-end'>
        <Button onClick={novoCliente} className='mb-4' color='green'>Novo Cliente</Button>
        </div>
        <Table clientes={clientes} clienteSelecionado={selecionarCliente}  clienteExcluido={excluirCliente}> </Table> 
        </>

      ) : ( <Form cliente={cliente} cancelar={exibirTable}  clienteChange={salvarCliente}></Form> )}

        
       
      </Layout>
    </div>
    
  )
}
