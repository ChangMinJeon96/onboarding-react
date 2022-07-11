import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data);
    setIsLoading(false);
    // console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(data);
  return (
    <div>
      {isLoading ? null : (
        <>
          <img src={data.movie.background_image} alt="poster" />
          <h2>{data.movie.title}</h2>
          <h3>{data.movie.rating}</h3>
        </>
      )}
    </div>
  );
};

export default Detail;
