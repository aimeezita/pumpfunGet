import { Link } from "react-router-dom";
import Postagem from "./postagemModel";


interface CardPostagemProps {
  postagem: Postagem
}

export default function CardPostagem({ postagem }: CardPostagemProps) {
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden">
      <h3 className="text-xl font-bold bg-indigo-800 text-white px-2 py-1">Postagem</h3>
      <p className="px-2 py-1">{postagem.name}</p>
      <p className="px-2 py-1">ID desse Postagem: {postagem.symbol}</p>
      <div className="flex">
        <Link to={`/editarPostagem/${postagem.mint}`} className="py-2 font-bold text-white uppercase bg-indigo-400 hover:bg-indigo-800 w-full text-center">
          editar
        </Link>
        <Link to={`/deletarPostagem/${postagem.mint}`} className="py-2 font-bold text-white uppercase bg-red-400 hover:bg-red-800 w-full text-center">
          deletar
        </Link>
      </div>
    </div>
  );
}