package com.example.addToCart.Service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.UUID;
import com.example.addToCart.Entity.Product;

@FeignClient(name = "product-details", url = "http://localhost:8082")
public interface ProductDetailsProxy {

    @GetMapping("/ecommerce/products/search/{productId}") 
    public Product getProductById(@PathVariable UUID productId);
    
}
