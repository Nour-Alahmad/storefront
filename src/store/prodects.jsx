// Define your initial state with products
let initialState = {
  products: [
    {
      id: 1,
      category: "electronics",
      name: "Smartphone",
      description: "The latest smartphone with advanced features.",
      price: 499.99,
      inventoryCount: 50,
    },
    {
      id: 2,
      category: "electronics",
      name: "Laptop",
      description: "Powerful laptop for work and entertainment.",
      price: 999.99,
      inventoryCount: 25,
    },
    {
      id: 3,
      category: "electronics",
      name: "Smartphone",
      description: "The latest smartphone with advanced features.",
      price: 499.99,
      inventoryCount: 50,
    },
    {
      id: 4,
      category: "electronics",
      name: "Laptop",
      description: "Powerful laptop for work and entertainment.",
      price: 999.99,
      inventoryCount: 25,
    },
    {
      id: 5,
      category: "clothes",
      name: "T-Shirt",
      description: "Comfortable and stylish T-shirt.",
      price: 19.99,
      inventoryCount: 100,
    },
    {
      id: 6,
      category: "clothes",
      name: "Jeans",
      description: "Classic denim jeans for any occasion.",
      price: 49.99,
      inventoryCount: 75,
    },
    {
      id: 7,
      category: "clothes",
      name: "T-Shirt",
      description: "Comfortable and stylish T-shirt.",
      price: 19.99,
      inventoryCount: 100,
    },
    {
      id: 8,
      category: "clothes",
      name: "Jeans",
      description: "Classic denim jeans for any occasion.",
      price: 49.99,
      inventoryCount: 75,
    },
    {
      id: 9,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 10,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 11,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 12,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 13,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 14,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 15,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 16,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
  ],
};
export const productsReducer = (state = initialState, action) => {
  // In this reducer, you can filter the products based on the active category
  const { type, payload } = action;

  switch (type) {
    case "filter":
      {
      const filteredProducts = state.products.filter(
        (product) => product.category === payload
      );

      return {
       products: filteredProducts
      };
      }
    default:
      return state;
  }
};

// actions

export const filterProducts = (category) => {
    return {
        type: 'filter',
        payload: category
    }

}
