package com.example.productdetailsservice.Repository;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.productdetailsservice.Entity.Product;

@Repository
public interface ProductRepo extends MongoRepository<Product, BigInteger> {
    Product save(Product product);
    ArrayList<Product> findAll();
    Product findByProductID(String productId);
}
