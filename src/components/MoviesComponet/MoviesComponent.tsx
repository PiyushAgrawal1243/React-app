import CardComponent from "../../UtillsComponet/CardComponent/CardComponent";
import CardLoaderComponent from "../../UtillsComponet/Card-loader/CardLoaderComponent";
import useFetch from "../../CustomHook/useFetch";
const fetchMovies = async () => {
  // const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4b5e8b1d9b0a8b0b0e6c6c5b7e8f2f2f&language=en-US&page=1");
   const data = Array.from({ length: 50 }, (_, i) => i + 1);
  const movies = data.map((movie: any, index:number) => ({
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg",
    title: "Monster House",
    shortDescription: "This is a monster house",
    id: index,
  }));
 return movies;
};
function MoviesComponent() {

  const  { isFetching , data:movies, err } = useFetch(fetchMovies, [])

  return (
    <>
    <div className="w-[100%] p-8 grid xl:grid-cols-5 md:grid-cols-3  gap-4 row-auto">
      {!isFetching && movies.map((movie:any, index:number) => (
        <CardComponent key={index}  {...movie} />
      ))}
      {
        isFetching && Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
          <CardLoaderComponent key={index} /> 
        ))
      }

      </div>
    </>
  );
}

export default MoviesComponent;
