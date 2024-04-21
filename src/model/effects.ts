import { createEffect } from "effector";

export const fetchData = createEffect(async () => {
  const url = `https://api.jikan.moe/v4/anime/1/full`;
  const request = await fetch(url);
  return request.json();
});

fetchData();

// export const fetchData = createEffect();

// fetchData.use(async () => {
//   const url = `https://swapi.dev/api/people/2`;
//   const request = await fetch(url);
//   return request.json();
// });
