const API_BASE_URLS = {
  PRODUCTS: 'http://localhost:8082/ecommerce/products',
  CART: 'http://localhost:8081/ecommerce/addToCart',
  USER: 'http://localhost:8083/ecommerce/user'
};

class ApiService {
  
  async request(url, options = {}) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return { success: true };
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getAllProducts() {
    const products = await this.request(`${API_BASE_URLS.PRODUCTS}/getALlProducts`);
    
    if (products && Array.isArray(products)) {
      return products.map(product => ({
        id: product.productID || product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        image: product.imageURL || product.image
      }));
    }
    
    return products;
  }

  async getProductById(productId) {
    const product = await this.request(`${API_BASE_URLS.PRODUCTS}/search/${productId}`);
    
    if (product) {
      return {
        id: product.productID || product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        image: product.imageURL || product.image,
        review: "1000",
        emi: "25",
        delivery: "Wednesday, Aug 18",
        status: "In stock",
        soldby: "Irish Electronics",
        about: [
          "High-quality smartphone with advanced features",
          "Water and dust resistant design",
          "Advanced camera system with multiple lenses",
          "Secure authentication and privacy features"
        ]
      };
    }
    
    return product;
  }

  async saveProduct(productData) {
    return this.request(`${API_BASE_URLS.PRODUCTS}/save`, {
      method: 'POST',
      body: JSON.stringify(productData)
    });
  }

  async addToCart(cartData) {
    return this.request(`${API_BASE_URLS.CART}/add`, {
      method: 'POST',
      body: JSON.stringify(cartData)
    });
  }

  async removeFromCart(cartData) {
    return this.request(`${API_BASE_URLS.CART}/remove`, {
      method: 'POST',
      body: JSON.stringify(cartData)
    });
  }

  async getCartItems(userId) {
    return this.request(`${API_BASE_URLS.CART}/show/${userId}`);
  }

  async clearCart(userId) {
    return this.request(`${API_BASE_URLS.CART}/clear/${userId}`, {
      method: 'POST'
    });
  }

  async saveUser(userData) {
    return this.request(`${API_BASE_URLS.USER}/saveUserDetails`, {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async getUserDetails(uniqueId) {
    return this.request(`${API_BASE_URLS.USER}/getUserDetails/${uniqueId}`);
  }
}

const apiService = new ApiService();
export default apiService;
