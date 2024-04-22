// файл effects.ts
import { createEffect } from "effector";

export const fetchAnime = createEffect(async () => {
  const url = `https://api.jikan.moe/v4/anime`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data; // предполагается, что нужные данные находятся в поле data
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error; // Проброс ошибки дальше, если это необходимо
  }
});

fetchAnime();
