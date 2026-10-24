import React from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Ocean Fresh Cologne',
    category: 'Fresh',
    price: 150,
    quantity: 10,
    description: 'A refreshing scent for everyday use.',
    specification: '100ml bottle, fresh fragrance',
    rating: 4.5,
    image: 'https://placehold.co/200x150?text=Ocean+Fresh'
  },
  {
    id: 2,
    name: 'Sweet Bloom Cologne',
    category: 'Floral',
    price: 180,
    quantity: 3,
    description: 'A sweet floral fragrance for daily wear.',
    specification: '100ml bottle, floral fragrance',
    rating: 4.7,
    image: 'https://placehold.co/200x150?text=Sweet+Bloom'
  },
  {
    id: 3,
    name: 'Midnight Musk Cologne',
    category: 'Woody',
    price: 220,
    quantity: 20,
    description: 'A warm musk scent for special occasions.',
    specification: '100ml bottle, musk fragrance',
    rating: 4.8,
    image: 'https://placehold.co/200x150?text=Midnight+Musk'
  }
];

function App() {
  const [products] = React.useState(initialProducts);
  const [selectedCategory, setSelectedCategory] =
    React.useState('All');

  const filteredProducts = products.filter((product) => {
    return (
      selectedCategory === 'All' ||
      product.category === selectedCategory
    );
  });

  const totalProducts = products.length;

  const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Cologne Collection</h1>
        <p>Discover fragrances for every moment.</p>
      </header>

      <div className="dashboard">
        <aside className="sidebar">
          <h2>Navigation</h2>

          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
          >
            All Products
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('Fresh')}
          >
            Fresh Collection
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('Floral')}
          >
            Floral Collection
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('Woody')}
          >
            Woody Collection
          </button>

          <div className="panel" style={{ marginTop: '20px' }}>
            <h2>Inventory Summary</h2>
            <p>Total Products: {totalProducts}</p>
            <p>
              Inventory Value: ₱
              {totalInventoryValue.toFixed(2)}
            </p>
          </div>
        </aside>

        <main className="main-content">
          <section className="banner">
            <h2>Find Your Signature Scent</h2>
            <p>
              Explore our collection of fresh, floral, and woody
              fragrances. Choose a scent that matches your style.
            </p>
          </section>

          <section className="section">
            <div className="section-heading">
              <h2>Featured Fragrances</h2>
              <span>{totalProducts} products available</span>
            </div>

            <div className="featured-list">
              {products.map((product) => (
                <div className="featured-item" key={product.id}>
                  <h3>{product.name}</h3>
                  <p>{product.category} fragrance</p>
                  <p className="product-price">
                    ₱{product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <h2>Our Products</h2>
            </div>

            <div className="category-buttons">
              {['All', 'Fresh', 'Floral', 'Woody'].map(
                (category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      selectedCategory === category ? 'active' : ''
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'All'
                      ? 'All Categories'
                      : category}
                  </button>
                )
              )}
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p className="product-price">
                    ₱{product.price.toFixed(2)}
                  </p>

                  <p>{product.description}</p>

                  <p>
                    <strong>Specification:</strong>{' '}
                    {product.specification}
                  </p>

                  <p>
                    <strong>Rating:</strong> ⭐ {product.rating}
                  </p>

                  <p>
                    <strong>Quantity:</strong> {product.quantity}
                  </p>

                  <p>
                    <strong>Subtotal:</strong> ₱
                    {(product.price * product.quantity).toFixed(2)}
                  </p>

                  {product.quantity < 5 && (
                    <p className="low-stock">Low Stock!</p>
                  )}
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p>No products found in this category.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;