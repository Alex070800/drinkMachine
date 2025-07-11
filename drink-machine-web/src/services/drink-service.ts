import { drinks } from "../mock/drinks-mock";

export const drinkService = {
  async getDrinks() {
    // const url = "http://localhost:3001/drink";
    try {
      // const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error(`Response status: ${response.status}`);
      // }

      //   const json = await response.json();
      //   console.log(json);
      // return await response.json();
      return drinks;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
