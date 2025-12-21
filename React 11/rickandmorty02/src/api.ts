import {Character} from "./types.ts";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async ():Promise<Character[]> => {
    try {
         const response = await fetch(BASE_URL);
         if (!response.ok) {
             throw new Error("Failed to fetch characters.");
         }
         const data = await response.json();
         return data.results;
    } catch (error) {
        console.log("Failed to fetch characters.", error);
        throw error;
    }
}