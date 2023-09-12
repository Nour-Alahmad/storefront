let initialState = {
  categories: [
    {
      name: "electronics",
      displayName: "Electronics",
      description: "Browse our selection of electronic gadgets and devices. Find the latest smartphones, laptops, smart devices and more.",
    },
    {
      name: "clothes",
      displayName: "Clothes",
      description: "Explore our stylish clothing collection for all occasions. From casual wear to formal attire, we have it all.",
    },
    {
      name: "accessories",
      displayName: "Accessories",
      description: "Find the perfect accessories to complement your style. Discover trendy jewelry, handbags, and more.",
    },
    {
      name: "gifts",
      displayName: "Gifts",
      description: "Discover thoughtful gifts for your loved ones. Whether it's a birthday, anniversary, or holiday, we have you covered.",
    },
  ],
  selectedCategory: 'electronics',
};


export const CategoriesState = (state = initialState, action) => {
   const { type, payload } = action;

  switch (type) {
    case "activate":   
    return {
        ...state,
        selectedCategory: payload, 
      };
    default:
      return state; 
  }
};

export const activateCategory = (name) => {
    return {
        type: 'activate',
        payload: name
    }
}
