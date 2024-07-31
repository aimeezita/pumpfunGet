import { useContext, useEffect, useState } from 'react';

import CardPostagem from './cardPostagem'
import { useNavigate } from 'react-router-dom';
import Postagem from './postagemModel';
import { buscar } from '../service/service';
import { DNA } from 'react-loader-spinner';

export default function Listapostagens() {
  //local para armazenar os postagems
  const [postagems, setPostagem] = useState<Postagem[]>([])

  const navigate = useNavigate()



  //função pra ir no backend e pedir os postagems
  async function buscarPostagem() {
    try {
      await buscar('/coins/latest', setPostagem);
    } catch (error) {
      alert('Deu ruim')
      console.log(error);
    }
  }

  useEffect(() => {
    buscarPostagem()
  }, [postagems.length])

  return (
    <>
      {postagems.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postagems.map(postagem => (
            <CardPostagem key={postagem.mint} postagem={postagem} />
          ))}
        </div>
      </div>
    </>
  );
}

