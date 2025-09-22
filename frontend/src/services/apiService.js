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
    return this.request(`${API_BASE_URLS.PRODUCTS}/getALlProducts`);
  }

  async getProductById(productId) {
    return this.request(`${API_BASE_URLS.PRODUCTS}/search/${productId}`);
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
