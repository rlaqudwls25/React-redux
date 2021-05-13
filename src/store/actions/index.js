export const addCart = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const deleteCart = (items) => {
  return {
    type: "DELETE",
    payload: items,
  };
};
