const API_KEY = 'e250385c'
export const fetchMovies = async (search) => {
  try {
    if(search){
      const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
      const data = await movies.json()
      return data
    }
  } catch (error) {
    throw('fetching error')
  } 
}