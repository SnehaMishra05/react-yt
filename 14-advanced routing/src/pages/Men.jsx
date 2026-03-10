const Men = () => {
  const products = [
    {
      id: 1,
      name: "Men's Shirt",
      price: "$29.99",
      image: "https://via.placeholder.com/300x200?text=Men+Shirt",
    },
    {
      id: 2,
      name: "Men's Jeans",
      price: "$49.99",
      image: "https://via.placeholder.com/300x200?text=Men+Jeans",
    },
    {
      id: 3,
      name: "Men's Jacket",
      price: "$79.99",
      image: "https://via.placeholder.com/300x200?text=Men+Jacket",
    },
    {
      id: 4,
      name: "Men's Shoes",
      price: "$89.99",
      image: "https://via.placeholder.com/300x200?text=Men+Shoes",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Men's Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-cyan-400 font-bold">{product.price}</p>
              <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
