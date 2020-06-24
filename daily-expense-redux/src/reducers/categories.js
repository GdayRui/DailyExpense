import { data } from "../data";

//const { categories } = data;

const categories = (state = data.categories, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default categories;
