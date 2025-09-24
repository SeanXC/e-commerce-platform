package com.example.productdetailsservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.productdetailsservice.Repository.ProductRepo;
import com.example.productdetailsservice.Entity.Product;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public Product saveDataToDB(Product product) {
        product.setProductID(UUID.randomUUID().toString());
        return productRepo.save(product);
    }

    public Product updateDataToDB(Product product) {
        product.setProductID(UUID.randomUUID().toString());
        return productRepo.save(product);
    }

    public ArrayList<Product> findAllProducts() {
        return (ArrayList<Product>) productRepo.findAll();
    }
    
    public Product getproductDetails(String productID) {
        return productRepo.findByProductID(productID);
    }
}
