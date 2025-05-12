const products = [
  // Vegetables
  {
    productID: 1,
    productName: "Spinach",
    productDescription: "Nutritious leafy green vegetable",
    initialPrice: 200,
    price: 160,
    productQuantity: 200,
    productImgn: "https://cdn.pixabay.com/photo/2022/02/01/13/06/vegetables-6986310_1280.jpg",
    category: "Vegetables",
    offer: "offer",
  },
  {
    productID: 2,
    productName: "Kale",
    productDescription: "Rich in vitamins and minerals",
    initialPrice: 180,
    price: 140,
    productQuantity: 150,
    productImgn: "https://cdn.pixabay.com/photo/2016/05/11/22/17/seedling-1386653_1280.jpg",
    category: "Vegetables",
  },
  {
    productID: 3,
    productName: "Tomato",
    productDescription: "High-yielding hybrid variety",
    initialPrice: 250,
    price: 190,
    productQuantity: 180,
    productImgn: "https://cdn.pixabay.com/photo/2015/10/21/11/17/plant-999375_1280.jpg",
    category: "Vegetables",
    offer: "offer",
  },
  { 
    productID: 4, 
    productName: "Cabbage", 
    productDescription: "Firm, high-yielding variety", 
    initialPrice: 230, 
    price: 180, 
    productQuantity: 130,
    productImgn: "https://cdn.pixabay.com/photo/2021/10/03/16/29/vegetable-6678396_1280.jpg", 
    category: "Vegetables" 
  },
  { 
    productID: 5, 
    productName: "Carrot", 
    productDescription: "Sweet, crunchy root vegetable", 
    initialPrice: 190, 
    price: 150, 
    productQuantity: 110,
    productImgn: "https://cdn.pixabay.com/photo/2020/06/15/05/48/carrot-5300438_1280.jpg", 
    category: "Vegetables" 
  },
  { 
    productID: 6, 
    productName: "Bell Pepper", 
    productDescription: "Colorful and vitamin-rich", 
    initialPrice: 270, 
    price: 210, 
    productQuantity: 90, 
    productImgn: "https://cdn.pixabay.com/photo/2019/02/14/07/58/vegetable-3996066_1280.jpg", 
    category: "Vegetables" 
  },
  // { 
  // productID: 7, 
  // productName: "Onion", 
  // productDescription: "High-yielding onion seedling", 
  // initialPrice: 200, 
  // price: 160, 
  // productQuantity: 80, 
  // productImgn: "https://source.unsplash.com/300x300/?onion,vegetable", 
  // category: "Vegetables" 
  // },

  // Fruits
  {
    productID: 7,
    productName: "Mango Seedling",
    productDescription: "High-yielding sweet mango variety",
    initialPrice: 150,
    price: 70,
    productQuantity: 70,
    productImgn: "https://cdn.pixabay.com/photo/2020/05/24/03/55/growth-5212312_1280.jpg",
    category: "Fruits",
  },
  {
    productID: 8,
    productName: "Avocado Seedling",
    productDescription: "Hass avocado seedling",
    initialPrice: 200,
    price: 120,
    productQuantity: 90,
    productImgn: "https://cdn.pixabay.com/photo/2019/08/28/10/27/avocados-4436393_1280.jpg",
    category: "Fruits",
  },
  { 
    productID: 10, 
    productName: "Banana Seedling", 
    productDescription: "Disease-resistant banana", 
    initialPrice: 300, 
    price: 240, 
    productQuantity: 50, 
    productImgn: "https://cdn.pixabay.com/photo/2015/10/10/17/43/banana-981176_1280.jpg", 
    category: "Fruits" 
  },
  { 
    productID: 11, 
    productName: "Papaya Seedling", 
    productDescription: "Fast-growing papaya tree", 
    initialPrice: 180, 
    price: 140, 
    productQuantity: 60, 
    productImgn: "https://cdn.pixabay.com/photo/2023/01/27/13/12/papaya-7748668_1280.jpg", 
    category: "Fruits" 
  },
  { 
  productID: 12, 
  productName: "Orange Seedling", 
  productDescription: "Sweet orange variety", 
  initialPrice: 250, 
  price: 200, 
  productQuantity: 75, 
  productImgn: "https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188_1280.jpg", 
  category: "Fruits" 
  },
  { 
  productID: 13, 
  productName: "Apple Seedling", 
  productDescription: "Dwarf apple tree", 
  initialPrice: 350, 
  price: 280, 
  productQuantity: 40, 
  productImgn: "https://cdn.pixabay.com/photo/2014/08/27/14/42/apple-429213_1280.jpg", 
  category: "Fruits" 
  },
  { 
  productID: 14, 
  productName: "Grapes", 
  productDescription: "High-yielding grape variety", 
  initialPrice: 320, 
  price: 260, 
  productQuantity: 35, 
  productImgn: "https://cdn.pixabay.com/photo/2017/08/18/07/23/cape-lode-2654059_1280.jpg", 
  category: "Fruits" 
  },

  // Flowers
  {
    productID: 15,
    productName: "Cactus Flower",
    productDescription: "Drought-resistant flowering cactus",
    initialPrice: 200,
    price: 120,
    productQuantity: 65,
    productImgn: "https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665_1280.jpg",
    category: "Flowers",
  },
  {
    productID: 16,
    productName: "Rose",
    productDescription: "Red hybrid rose variety",
    initialPrice: 300,
    price: 250,
    productQuantity: 40,
    productImgn: "https://cdn.pixabay.com/photo/2016/11/29/06/20/red-1867767_1280.jpg",
    category: "Flowers",
    offer: "offer",
  },

  // Herbs and Spices
  {
    productID: 17,
    productName: "Basil",
    productDescription: "Sweet basil herb for culinary use",
    initialPrice: 200,
    price: 130,
    productQuantity: 60,
    productImgn: "https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg",
    category: "Herbs and Spices",
  },
  {
    productID: 18,
    productName: "Rosemary",
    productDescription: "Aromatic rosemary herb",
    initialPrice: 280,
    price: 200,
    productQuantity: 40,
    productImgn: "https://cdn.pixabay.com/photo/2020/03/28/23/55/rosemary-4978895_1280.jpg",
    category: "Herbs and Spices",
  },
  { 
    productID: 23, 
    productName: "Mint", 
    productDescription: "Refreshing mint herb", 
    initialPrice: 180, 
    price: 140, 
    productQuantity: 50, 
    productImgn: "https://cdn.pixabay.com/photo/2017/06/12/19/23/moroccan-mint-2396530_1280.jpg", 
    category: "Herbs and Spices" 
  },
  { 
    productID: 24, 
    productName: "Coriander", 
    productDescription: "Aromatic coriander plant", 
    initialPrice: 190, 
    price: 150, 
    productQuantity: 70, 
    productImgn: "https://cdn.pixabay.com/photo/2019/06/06/08/00/coriander-4255400_1280.jpg", 
    category: "Herbs and Spices" 
  },

  // Forestry
  {
    productID: 21,
    productName: "Eucalyptus",
    productDescription: "Fast-growing, medicinal tree",
    initialPrice: 300,
    price: 220,
    productQuantity: 80,
    productImgn: "https://cdn.pixabay.com/photo/2019/08/09/02/20/seedling-4394118_1280.jpg",
    category: "Forestry",
  },
  {
    productID: 22,
    productName: "Mahogany",
    productDescription: "High-value timber tree",
    initialPrice: 500,
    price: 400,
    productQuantity: 30,
    productImgn: "https://cdn.pixabay.com/photo/2019/08/09/02/20/seedling-4394118_1280.jpg",
    category: "Forestry",
  },
  
];

export default products;
