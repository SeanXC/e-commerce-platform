package com.example.productdetailsservice.Controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.productdetailsservice.Entity.Product;
import com.example.productdetailsservice.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.UUID;


@RestController
@RequestMapping("/ecommerce/products")
public class ProductController {

    @Autowired
    ProductService productService;
    
    @PostMapping("/save")
    public Product saveData(@RequestBody Product product) {
        return productService.saveDataToDB(product);
    }

    @GetMapping("/getALlProducts")
    public ArrayList<Product> findAllProducts() {
        return productService.findAllProducts();
    }

    @GetMapping("/search/{productId}") 
    public Product getProductById(@PathVariable String productId) {
        return productService.getproductDetails(productId);
    }
}
