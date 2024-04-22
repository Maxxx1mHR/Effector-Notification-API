// файл AnimeList.tsx
import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { $animeData } from "../model/stores"; // Импорт стора и эффекта

export const AnimeItem = () => {
  const animeData = useUnit($animeData);

  useEffect(() => {
    // fetchAnime(); // Запуск эффекта при монтировании компонента
  }, []);

  // if (!animeData.length) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {animeData.map((anime) => (
        <div key={anime.mal_id}>
          <h3>{anime.title}</h3>
          <img src={anime.image_url} alt={anime.title} />
          <p>{anime.synopsis}</p>
        </div>
      ))}
    </div>
  );
};
