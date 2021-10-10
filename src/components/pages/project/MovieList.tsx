import type { VFC } from "react";

type Movie = {
  title: string;
  youtubeUrl: string;
};

type Props = {
  movies: Movie[];
};

export const MovieList: VFC<Props> = ({ movies }) => {
  return (
    <main className="w-full md:pl-shead bg-white">
      <div className="flex flex-col space-y-24 lg:max-w-app mx-auto w-11/12 md:w-8/12 pt-24 pb-36">
        {movies.map((movie, i) => (
          <section key={i.toString()}>
            <h2 className="text-text text-center py-2 md:py-4 bg-white w-full border-2 border-brown">{movie.title}</h2>
            <div className="mt-6 bg-gray w-full relative" style={{ paddingTop: `${(9 / 16) * 100}%` }}>
              <iframe
                src={movie.youtubeUrl}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                className="absolute top-0 left-0 m-0 w-full h-full"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};
