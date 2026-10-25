import React from 'react';
import './index.css';

import oceanFreshImage from './images/ocean-fresh.png';
import sweetBloomImage from './images/sweet-bloom.png';
import midnightMuskImage from './images/midnight-musk.png';
import goldenAmberImage from './images/golden-amber.png';
import citrusBurstImage from './images/citrus-burst.png';

const categories = ['Fresh', 'Floral', 'Woody', 'Amber', 'Citrus'];

const categoryImages = {
  Fresh: oceanFreshImage,
  Floral: sweetBloomImage,
  Woody: midnightMuskImage,
  Amber: goldenAmberImage,
  Citrus: citrusBurstImage,
};

const initialProducts = [
  { id: 1, name: 'Ocean Fresh', category: 'Fresh', price: 150, quantity: 10, description: 'A refreshing ocean-inspired fragrance.', specification: '100ml bottle', rating: 4.5 },
  { id: 2, name: 'Ocean Mist', category: 'Fresh', price: 160, quantity: 12, description: 'A light and breezy aquatic scent.', specification: '100ml bottle', rating: 4.4 },
  { id: 3, name: 'Blue Wave', category: 'Fresh', price: 170, quantity: 8, description: 'A cool, clean fragrance for daily wear.', specification: '100ml bottle', rating: 4.6 },
  { id: 4, name: 'Aqua Breeze', category: 'Fresh', price: 175, quantity: 9, description: 'A crisp aquatic fragrance.', specification: '100ml bottle', rating: 4.3 },

  { id: 5, name: 'Sweet Bloom', category: 'Floral', price: 180, quantity: 3, description: 'A sweet floral fragrance for daily wear.', specification: '100ml bottle', rating: 4.7 },
  { id: 6, name: 'Rose Petal', category: 'Floral', price: 185, quantity: 7, description: 'A delicate rose-inspired fragrance.', specification: '100ml bottle', rating: 4.5 },
  { id: 7, name: 'Pink Blossom', category: 'Floral', price: 190, quantity: 6, description: 'A soft floral scent with a sweet finish.', specification: '100ml bottle', rating: 4.6 },
  { id: 8, name: 'Floral Kiss', category: 'Floral', price: 195, quantity: 8, description: 'A charming fragrance for everyday use.', specification: '100ml bottle', rating: 4.4 },

  { id: 9, name: 'Midnight Musk', category: 'Woody', price: 220, quantity: 20, description: 'A warm musk scent for special occasions.', specification: '100ml bottle', rating: 4.8 },
  { id: 10, name: 'Dark Woods', category: 'Woody', price: 230, quantity: 9, description: 'A deep woody fragrance.', specification: '100ml bottle', rating: 4.6 },
  { id: 11, name: 'Nightfall', category: 'Woody', price: 240, quantity: 7, description: 'A rich evening fragrance.', specification: '100ml bottle', rating: 4.7 },
  { id: 12, name: 'Velvet Musk', category: 'Woody', price: 245, quantity: 11, description: 'A smooth and warm musk scent.', specification: '100ml bottle', rating: 4.5 },

  { id: 13, name: 'Golden Amber', category: 'Amber', price: 250, quantity: 10, description: 'A warm amber fragrance with a rich scent.', specification: '100ml bottle', rating: 4.8 },
  { id: 14, name: 'Amber Glow', category: 'Amber', price: 255, quantity: 8, description: 'A smooth, golden-inspired fragrance.', specification: '100ml bottle', rating: 4.6 },
  { id: 15, name: 'Golden Hour', category: 'Amber', price: 260, quantity: 6, description: 'A warm scent for special occasions.', specification: '100ml bottle', rating: 4.5 },
  { id: 16, name: 'Amber Woods', category: 'Amber', price: 265, quantity: 9, description: 'A cozy fragrance with woody notes.', specification: '100ml bottle', rating: 4.7 },

  { id: 17, name: 'Citrus Burst', category: 'Citrus', price: 160, quantity: 15, description: 'A bright citrus fragrance for everyday wear.', specification: '100ml bottle', rating: 4.6 },
  { id: 18, name: 'Lemon Zest', category: 'Citrus', price: 165, quantity: 12, description: 'A zesty lemon-inspired scent.', specification: '100ml bottle', rating: 4.4 },
  { id: 19, name: 'Orange Splash', category: 'Citrus', price: 170, quantity: 10, description: 'A lively orange fragrance.', specification: '100ml bottle', rating: 4.5 },
  { id: 20, name: 'Lime Fresh', category: 'Citrus', price: 175, quantity: 8, description: 'A crisp, refreshing citrus scent.', specification: '100ml bottle', rating: 4.3 },
].map((product) => ({
  ...product,
  image: categoryImages[product.category],
}));

function formatPrice(amount) {
  return Number(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function App() {
  const [products, setProducts] = React.useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [cart, setCart] = React.useState([]);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');

  const [form, setForm] = React.useState({
    name: '',
    category: 'Fresh',
    price: '',
    quantity: '',
    description: '',
    specification: '100ml bottle',
    rating: '5',
    image: '',
  });

  const totalProducts = products.length;

  const totalInventoryValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const totalStock = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const featuredProducts = [
    'Ocean Fresh',
    'Sweet Bloom',
    'Midnight Musk',
    'Golden Amber',
    'Citrus Burst',
  ]
    .map((name) => products.find((product) => product.name === name))
    .filter(Boolean);

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setFormMessage('');
  }

  function handleImageChange(event) {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormMessage('Please choose a valid image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setForm((current) => ({
        ...current,
        image: reader.result,
      }));
      setFormMessage('');
    };

    reader.onerror = () => {
      setFormMessage('The image could not be loaded. Try another file.');
    };

    reader.readAsDataURL(file);
  }

  function handleAddProduct(event) {
    event.preventDefault();

    const name = form.name.trim();
    const price = Number(form.price);
    const quantity = Number(form.quantity);
    const rating = Number(form.rating);

    if (!name || form.price === '' || form.quantity === '') {
      setFormMessage(
        'Please fill in the product name, price, and quantity.'
      );
      return;
    }

    if (!Number.isFinite(price) || price <= 0) {
      setFormMessage('Enter a price greater than zero.');
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 0) {
      setFormMessage(
        'Quantity must be a whole number of zero or more.'
      );
      return;
    }

    if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
      setFormMessage('Rating must be between 0 and 5.');
      return;
    }

    const newProduct = {
      id:
        products.reduce(
          (max, product) => Math.max(max, product.id),
          0
        ) + 1,
      name,
      category: form.category,
      price,
      quantity,
      description:
        form.description.trim() ||
        'A lovely fragrance for everyday use.',
      specification:
        form.specification.trim() || '100ml bottle',
      rating,
      image: form.image || categoryImages[form.category],
    };

    setProducts((current) => [...current, newProduct]);
    setSelectedCategory('All');

    setForm({
      name: '',
      category: 'Fresh',
      price: '',
      quantity: '',
      description: '',
      specification: '100ml bottle',
      rating: '5',
      image: '',
    });

    setFormMessage('Product added successfully!');
    setShowAddForm(false);
  }

  function addToCart(product) {
    const currentProduct = products.find(
      (item) => item.id === product.id
    );

    if (!currentProduct || currentProduct.quantity <= 0) {
      alert('Sorry, this product is out of stock.');
      return;
    }

    setProducts((current) =>
      current.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        { ...product, cartQuantity: 1 },
      ];
    });
  }

  function increaseCartQuantity(productId) {
    const product = products.find(
      (item) => item.id === productId
    );

    if (!product || product.quantity <= 0) {
      alert('No more stock available for this product.');
      return;
    }

    setProducts((current) =>
      current.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              cartQuantity: item.cartQuantity + 1,
            }
          : item
      )
    );
  }

  function decreaseCartQuantity(productId) {
    const cartItem = cart.find(
      (item) => item.id === productId
    );

    if (!cartItem) return;

    if (cartItem.cartQuantity === 1) {
      removeFromCart(productId);
      return;
    }

    setProducts((current) =>
      current.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              cartQuantity: item.cartQuantity - 1,
            }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    const cartItem = cart.find(
      (item) => item.id === productId
    );

    if (!cartItem) return;

    setProducts((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + cartItem.cartQuantity,
            }
          : item
      )
    );

    setCart((current) =>
      current.filter((item) => item.id !== productId)
    );
  }

  function clearCart() {
    setProducts((current) =>
      current.map((product) => {
        const cartItem = cart.find(
          (item) => item.id === product.id
        );

        return cartItem
          ? {
              ...product,
              quantity: product.quantity + cartItem.cartQuantity,
            }
          : product;
      })
    );

    setCart([]);
  }

  function renderProductCard(product) {
    return (
      <article
        className="product-card"
        id={'product-' + product.id}
        key={product.id}
      >
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <span className="product-category">
            {product.category}
          </span>
        </div>

        <div className="product-details">
          <div className="product-title-row">
            <h3>{product.name}</h3>
            <span className="rating">★ {product.rating}</span>
          </div>

          <h2 className="product-price">
            ₱{formatPrice(product.price)}
          </h2>

          <p className="product-description">
            {product.description}
          </p>

          <p className="product-specification">
            {product.specification}
          </p>

          <div className="product-stock">
            <span>Available stock</span>
            <strong>{product.quantity}</strong>
          </div>

          {product.quantity > 0 && product.quantity < 5 && (
            <p className="low-stock">
              ⚠ Low stock — only {product.quantity} left
            </p>
          )}

          {product.quantity === 0 && (
            <p className="low-stock">Out of stock</p>
          )}

          <p className="product-subtotal">
            Inventory value: ₱
            {formatPrice(product.price * product.quantity)}
          </p>

          <button
            type="button"
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
            disabled={product.quantity === 0}
          >
            {product.quantity === 0
              ? 'Out of Stock'
              : '＋ Add to Cart'}
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">PRODUCT MANAGEMENT SYSTEM</p>
          <h1>Scent Studio</h1>
          <p>Manage your fragrances and inventory in one place.</p>
        </div>

        <a className="header-cart" href="#shopping-cart">
          <span>🛒</span>
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </a>
      </header>

      <main className="main-content">
        <section className="banner">
          <div>
            <p className="banner-label">DISCOVER YOUR SCENT</p>
            <h2>Find Your Signature Scent</h2>
            <p>
              Explore fragrances for every mood and every moment.
            </p>
          </div>
          <span className="banner-icon">✦</span>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR FAVORITES</p>
              <h2>Featured Products</h2>
            </div>
            <span>{featuredProducts.length} featured</span>
          </div>

          <div className="featured-list">
            {featuredProducts.map((product) => (
              <button
                type="button"
                className="featured-item"
                key={product.id}
                onClick={() => {
                  setSelectedCategory('All');

                  setTimeout(() => {
                    const target = document.getElementById(
                      'product-' + product.id
                    );

                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }
                  }, 100);
                }}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₱{formatPrice(product.price)}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading products-heading">
            <div>
              <p className="eyebrow">BROWSE THE COLLECTION</p>
              <h2>Products</h2>
            </div>

            <label className="category-select-label">
              Category
              <select
                value={selectedCategory}
                onChange={(event) =>
                  setSelectedCategory(event.target.value)
                }
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="results-count">
            Showing {filteredProducts.length} of {totalProducts} products
          </p>

          <div className="product-grid">
            {filteredProducts.map((product) =>
              renderProductCard(product)
            )}
          </div>

          <div className="add-new-area">
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setShowAddForm((current) => !current);
                setFormMessage('');
              }}
            >
              {showAddForm ? 'Cancel' : '＋ Add New Product'}
            </button>
          </div>

          {showAddForm && (
            <section className="panel add-product-panel">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">INVENTORY MANAGEMENT</p>
                  <h2>Add New Product</h2>
                </div>
              </div>

              <form onSubmit={handleAddProduct}>
                <div className="form-grid">
                  <label>
                    Product Name *
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Rose Garden"
                      required
                    />
                  </label>

                  <label>
                    Category *
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleFormChange}
                      required
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Price (₱) *
                    <input
                      name="price"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={form.price}
                      onChange={handleFormChange}
                      placeholder="150.00"
                      required
                    />
                  </label>

                  <label>
                    Stock Quantity *
                    <input
                      name="quantity"
                      type="number"
                      min="0"
                      step="1"
                      value={form.quantity}
                      onChange={handleFormChange}
                      placeholder="10"
                      required
                    />
                  </label>

                  <label>
                    Specification
                    <input
                      name="specification"
                      value={form.specification}
                      onChange={handleFormChange}
                      placeholder="100ml bottle"
                    />
                  </label>

                  <label>
                    Rating (0–5)
                    <input
                      name="rating"
                      type="number"
                      min="0"
                      max="5"
                      step="0.1"
                      value={form.rating}
                      onChange={handleFormChange}
                    />
                  </label>

                  <label className="form-full-width">
                    Description
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleFormChange}
                      placeholder="Describe the fragrance..."
                      rows="3"
                    />
                  </label>

                  <label className="form-full-width">
                    Product Image (optional)
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>

                {form.image && (
                  <div className="new-image-preview">
                    <p>Image preview</p>
                    <img
                      src={form.image}
                      alt="New product preview"
                    />
                  </div>
                )}

                {formMessage && (
                  <p className="form-message" role="alert">
                    {formMessage}
                  </p>
                )}

                <div className="form-actions">
                  <button type="submit" className="primary-button">
                    Save Product
                  </button>

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => {
                      setShowAddForm(false);
                      setFormMessage('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          )}
        </section>

        <section className="section cart-panel" id="shopping-cart">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR ORDER</p>
              <h2>Shopping Cart</h2>
            </div>
            <span>{cartCount} items</span>
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty. Add a fragrance to get started!
            </p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-row" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>₱{formatPrice(item.price)} each</p>
                    </div>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseCartQuantity(item.id)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <strong>{item.cartQuantity}</strong>
                      <button
                        type="button"
                        onClick={() =>
                          increaseCartQuantity(item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <strong className="cart-subtotal">
                      ₱
                      {formatPrice(item.price * item.cartQuantity)}
                    </strong>

                    <button
                      type="button"
                      className="remove-cart-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <span>Total Amount</span>
                <strong>₱{formatPrice(cartTotal)}</strong>
              </div>

              <button
                type="button"
                className="clear-cart-button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </>
          )}
        </section>

        <section className="inventory-summary-panel">
          <div>
            <span>Total Products</span>
            <strong>{totalProducts}</strong>
          </div>

          <div>
            <span>Total Available Stock</span>
            <strong>{totalStock}</strong>
          </div>

          <div>
            <span>Inventory Value</span>
            <strong>₱{formatPrice(totalInventoryValue)}</strong>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;