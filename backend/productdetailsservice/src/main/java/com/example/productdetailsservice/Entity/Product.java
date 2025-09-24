package com.example.productdetailsservice.Entity;

import java.math.BigInteger;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "products")
public class Product {
    @Id
    public BigInteger id;
    
    @Field("productID")
    public String productID;
    
    public String name;
    public double price;
    public String rating;
    public String imageURL;

    public Product() {
    }

    // Constructor with parameters
    public Product(String productID, String name, double price, String rating, String imageURL) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.imageURL = imageURL;
    }

    // Getter and Setter methods
    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    // toString method for debugging
    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productID=" + productID +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", rating='" + rating + '\'' +
                ", imageURL='" + imageURL + '\'' +
                '}';
    }
}