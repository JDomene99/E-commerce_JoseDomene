export const getProductsSorter = async (sort) => {
  const response = await fetch(`http://localhost:4000/products/sort/${sort}`);
  const data = await response.json();

  return data;
};
export const getProductFilter = async (type) => {
  let url = "";
  type === "all"
    ? (url = `http://localhost:4000/products/${type}`)
    : (url = `http://localhost:4000/products/category/${type}`);

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getProductsBySize = async (size) => {
  const response = await fetch(`http://localhost:4000/products/${size}`);
  const data = await response.json();

  return data;
};

export const insertProduct = async (product) => {
  try {
    const response = await fetch("http://localhost:4000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw {
        status: response.status,
        statusText: response.statusText,
      };
    } else {
      return await response.json();
    }
  } catch (error) {}
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/product/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {}
};
