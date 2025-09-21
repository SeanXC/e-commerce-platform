# E-commerce Platform

A full-stack e-commerce platform with React frontend and Spring Boot microservices backend.

## Architecture

### Frontend
- **React 18** with Material-UI
- **React Router** for navigation
- **Context API** for state management
- **HTTP Proxy Middleware** for API proxying

### Backend Services
- **Product Service** (Port: 8082) - MongoDB
- **Cart Service** (Port: 8081) - MySQL  
- **User Service** (Port: 8083) - MySQL

## Quick Start

### Prerequisites
- **Java 21** (required for backend services)
- **Node.js 16+** (required for frontend)
- **MySQL Server** (localhost:3306) 
- **MongoDB Server** (localhost:27017)

**Note**: Maven is NOT required - projects use Maven Wrapper (`mvnw.cmd`)

### Database Setup
```sql
CREATE DATABASE usermetadataDB;
CREATE DATABASE addToCartDB;
```

### Start All Services

**Option 1: Start Everything**
```bash
start-all.bat
```

**Option 2: Manual Start**
```bash
# Backend services (use Maven Wrapper)
cd backend/productdetailsservice && .\mvnw.cmd spring-boot:run
cd backend/addToCart && .\mvnw.cmd spring-boot:run  
cd backend/usermetadata && .\mvnw.cmd spring-boot:run

# Frontend
cd frontend && npm start
```

## Access URLs
- **Frontend**: http://localhost:3000
- **Product API**: http://localhost:8082/ecommerce/products
- **Cart API**: http://localhost:8081/ecommerce/addToCart
- **User API**: http://localhost:8083/ecommerce/user

## Features
- Product browsing and details
- Shopping cart management
- User profile management
- Real-time API integration
- Error handling and fallbacks
- CORS-enabled APIs
- Development proxy configuration

## API Endpoints

### Products
- `GET /ecommerce/products/getALlProducts`
- `GET /ecommerce/products/search/{productId}`
- `POST /ecommerce/products/save`

### Cart
- `POST /ecommerce/addToCart/add`
- `POST /ecommerce/addToCart/remove`
- `GET /ecommerce/addToCart/show/{userId}`
- `POST /ecommerce/addToCart/clear/{userId}`

### User
- `POST /ecommerce/user/saveUserDetails`
- `GET /ecommerce/user/getUserDetails/{uniqueId}`