import React from 'react';
import { fetchPokemon } from '@/apis/pokemon';
import Image from 'next/image';
import { getTypeKRName } from '@/utils/getTypeKorean';

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await fetchPokemon(params.id);
  const pokemonAbilities = pokemonData.abilities.map(
    (ability: { ability: { korean_name: string } }) =>
      ability.ability.korean_name
  );

  const pokemonTypes = pokemonData.types.map(
    (type: { type: { name: string } }) => {
      return getTypeKRName(type.type.name);
    }
  );

  const pokemonMoves = pokemonData.moves.map(
    (move: { move: { korean_name: string } }) => move.move.korean_name
  );
  return (
    <div>
      <Image
        src={pokemonData.sprites.front_default}
        alt={pokemonData.korean_name}
        width={100}
        height={100}
      />
      <p>이름 : {pokemonData.korean_name}</p>
      <p>도감번호 : {pokemonData.id}</p>
      <p>타입 : {pokemonTypes.join(', ')}</p>
      <p>키 : {pokemonData.height}</p>
      <p>특성 : {pokemonAbilities.join(', ')}</p>
      <p>기술 : {pokemonMoves.join(', ')}</p>
    </div>
  );
};

export default PokemonDetailPage;
