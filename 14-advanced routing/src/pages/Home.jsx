const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-xl mb-8">
        Discover the latest fashion for men, women, and kids.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Men's Fashion</h2>
          <p>
            Explore our collection of stylish men's clothing and accessories.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Women's Fashion</h2>
          <p>Find the perfect outfit from our curated women's collection.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Kids' Fashion</h2>
          <p>Adorable and comfortable clothing for your little ones.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
