import "./globals.css";

export default function HomePage() {
  return (
    <div className="shop-page">

  
      <nav className="shop-navbar">
        <h2 className="shop-logo">LifeStyle</h2>

        <div className="shop-links">
          <a href="#">Home</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Contact</a>
        </div>

        <div className="shop-actions">
          <a href="/auth/login">Login</a>
          <a href="/auth/register">Signup</a>
        </div>
      </nav>
      <section className="hero-banner">
        <div className="hero-text">
          <h1>Upgrade Your Lifestyle</h1>
          <p>Trendy fashion and accessories for everyday style</p>
          <button>Shop Now</button>
        </div>
      </section>

  
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="cat-card">Men</div>
          <div className="cat-card">Women</div>
          <div className="cat-card">Accessories</div>
          <div className="cat-card">Footwear</div>
        </div>
      </section>

  
      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg" />
            <h4>Casual Shirt</h4>
            <p>889</p>
          </div>

          <div className="product-card">
            <img src="https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg" />
            <h4>Women Dress</h4>
            <p>449</p>
          </div>

          <div className="product-card">
            <img src="https://images.pexels.com/photos/6311595/pexels-photo-6311595.jpeg" />
            <h4>flowers </h4>
            <p>79</p>
          </div>
        </div>
      </section>

  
      <footer className="shop-footer">
        <p>© 2026 LifeStyle Store | All rights reserved</p>
      </footer>

    </div>
  );
}

