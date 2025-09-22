# Full-Stack E-commerce Platform

A modern, scalable e-commerce platform built with React frontend and Spring Boot microservices architecture, featuring Docker containerization and seamless Heroku deployment with real-time shopping cart management.

---

## Preview
![App Screenshot](./screenshots/demo.png)
*Modern, responsive e-commerce interface with containerized deployment pipeline*

---

## Features
- Developed a containerized Spring Boot microservices system with Product, Cart, and User services, supporting independent deployment and scaling  
- Built a modern React SPA frontend with Material-UI, React Router, and Context API for real-time cart updates and product browsing  
- Integrated MySQL (cart & user data) and MongoDB (product catalog) with Spring Data JPA and MongoDB document storage  
- Implemented comprehensive unit and integration testing using JUnit, Mockito, Jest, and React Testing Library  
- Automated deployment pipeline with Docker Compose and Heroku, enabling one-click cloud deployment with CI/CD  

---

## Tech Stack
**Frontend:**  
- React 18 (Hooks, Context API)  
- Material-UI, React Router  
- Axios for API communication  
- Jest & React Testing Library  

**Backend:**  
- Spring Boot 3.x (Java 21)  
- Spring Data JPA & MongoDB  
- RESTful API design  
- JUnit & Mockito for testing  

**Database:**  
- MySQL 8 (Cart & User services)  
- MongoDB 7 (Product catalog)  

**DevOps & Deployment:**  
- Docker & Docker Compose  
- Heroku Container Registry  
- Heroku Postgres & MongoDB Atlas  
- Automated CI/CD pipeline  

---

## Project Structure
```
e-commerce-platform/
├── backend/ # Backend Microservices
│ ├── productdetailsservice/ # Product Service (MongoDB)
│ ├── addToCart/ # Cart Service (MySQL)
│ ├── usermetadata/ # User Service (MySQL)
│ ├── run-backend-tests.bat # Backend Test Scripts
│ └── run-basic-backend-tests.bat
├── frontend/ # React Frontend Application
│ ├── src/Components/ # React Components
│ │ ├── tests/ # Component Tests
│ │ ├── HomePage/ # Home Page Components
│ │ ├── NavBar/ # Navigation Bar
│ │ ├── DisplayContent/ # Product Display
│ │ ├── Checkout/ # Checkout Flow
│ │ └── User/ # User Management
│ ├── services/ # API Service Layer
│ ├── public/ # Static Assets
│ ├── Dockerfile # Frontend Containerization
│ └── package.json # Frontend Dependencies
├── docker-compose.yml # Container Orchestration
├── docker-compose.heroku.yml # Heroku-optimized Compose
├── deploy-heroku.sh # Heroku Deployment Script
├── start-all.bat # One-Click Startup Script
└── README.md # Project Documentation
```


---

## Getting Started (Local Setup)
```bash
# 1. Clone the repository
git clone https://github.com/YourUsername/e-commerce-platform.git
cd e-commerce-platform

# 2. Start with Docker Compose (Recommended)
docker-compose up --build -d

# 3. Access the application
# Frontend: http://localhost:3000
# Product API: http://localhost:8082/ecommerce/products/getALlProducts  
# Cart API: http://localhost:8081/ecommerce/addToCart
# User API: http://localhost:8083/ecommerce/user
```

---

## Contributions

This full-stack e-commerce platform project demonstrates the following skills:

- Microservices Architecture with Spring Boot and RESTful APIs
- Modern Frontend Development with React Hooks, Context API, and Material-UI
- Database Integration with MySQL transactional processing and MongoDB document storage
- Test-Driven Development using JUnit, Mockito, Jest, and React Testing Library
- Containerization & Deployment with Docker, Docker Compose, and Heroku cloud platform

---

## License

MIT License – feel free to use and modify for learning purposes.