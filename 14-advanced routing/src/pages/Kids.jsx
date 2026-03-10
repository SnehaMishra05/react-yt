const Kids = () => {
  const products = [
    {
      id: 1,
      name: "Kids' T-Shirt",
      price: "$19.99",
      image: "https://via.placeholder.com/300x200?text=Kids+T-Shirt",
    },
    {
      id: 2,
      name: "Kids' Shorts",
      price: "$14.99",
      image: "https://via.placeholder.com/300x200?text=Kids+Shorts",
    },
    {
      id: 3,
      name: "Kids' Sneakers",
      price: "$39.99",
      image: "https://via.placeholder.com/300x200?text=Kids+Sneakers",
    },
    {
      id: 4,
      name: "Kids' Hat",
      price: "$9.99",
      image: "https://via.placeholder.com/300x200?text=Kids+Hat",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Kids' Collection</h2>
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

export default Kids;
