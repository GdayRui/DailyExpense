import { data } from "../data";

const categories = (state = data.categories, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default categories;
