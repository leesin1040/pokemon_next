'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemons';
import styled from 'styled-components';
import { getTypeColor } from '@/utils/getTypeColor';
import { getTypeKRName } from '@/utils/getTypeKorean';

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch('api/pokemons');
      const data = await response.json();
      setPokemons(data);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto">
      {pokemons.length === 0 ? (
        //pokemons가 비어있을 때
        <div className="flex flex-col justify-center items-center h-screen">
          <div
            style={{
              backgroundImage:
                'url(https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif)',
              width: '40%',
              height: '40%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="mt-[1rem] animate-bounce">불러오는 중입니다</div>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-3">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="pokemon p-4 border rounded-lg justify-center items-center flex flex-col"
              >
                <Link href={`/pokemon/${pokemon.id}`}>
                  <div className="relative w-[70px] h-[70px]">
                    <p className="text-center text-sm">No.{pokemon.id}</p>
                    <PokemonImage pokemon={pokemon} />
                  </div>
                  <p className="text-center text-sm mt-[1.5rem]">
                    {pokemon.korean_name}
                  </p>
                  <p className="text-center text-sm">
                    {getTypeKRName(pokemon.types[0].type.name)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

function PokemonImage({ pokemon }: { pokemon: Pokemon }) {
  const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    padding: '10px',
    backgroundColor: getTypeColor(pokemon.types[0].type.name),
  };

  const pokemonImageStyle = {
    objectFit: 'contain',
  };
  return (
    <div style={circleStyle}>
      <Image
        {...pokemonImageStyle}
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.korean_name}
        height={70}
        width={70}
      />
    </div>
  );
}
