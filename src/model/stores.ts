import { createStore } from "effector";
import { fetchData } from "./effects";

export const $data = createStore<any>(null).on(fetchData.doneData, (_, data) => data);

// export const $data = createStore("test123");
