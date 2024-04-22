// файл stores.ts
import { createStore } from "effector";
import { fetchAnime } from "./effects";

export const $animeData = createStore([]) // начальное значение - пустой массив
  .on(fetchAnime.doneData, (state, anime) => anime) // обновляем состояние при успешном получении данных
  .reset(fetchAnime.fail); // сброс состояния при ошибке
