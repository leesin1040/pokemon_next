export const fetchPokemon = async (id: string) => {
  const apiUrl = 'http://localhost:3000';
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return response.json();
};
/** apis 폴더에
 * api 관련 함수를 모아놓은 폴더를 만들어서 사용하는 방법도 있음
 */
