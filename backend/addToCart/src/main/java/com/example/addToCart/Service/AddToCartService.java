package com.example.addToCart.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.addToCart.Repository.AddToCartRepo;
import com.example.addToCart.Entity.Cart;
import java.util.ArrayList;
import java.util.UUID;
import com.example.addToCart.Entity.Product;
import com.example.addToCart.Entity.CartDetails;


@Service
public class AddToCartService {

    @Autowired
    AddToCartRepo addToCartRepo;

    @Autowired
    ProductDetailsProxy productDetailsProxy;
    
    public void addItemToCartService(Cart cart) {
        addToCartRepo.save(cart);
    }
    
    public void removeItemFromCartService(Cart cart) {
        addToCartRepo.delete(cart);
    }
    
    public CartDetails displayAllProductsInCart(UUID userId) {
        CartDetails cartDetails = new CartDetails();
        cartDetails.setUserId(userId);
        ArrayList<Cart> cartList = addToCartRepo.findByUserId(userId);
        ArrayList<Product> productList = new ArrayList<Product>();
        for(int i = 0; i < cartList.size(); i++) {
            Product product = productDetailsProxy.getProductById(cartList.get(i).getProductId());
            productList.add(product);
        }
        cartDetails.setList(productList);
        return cartDetails;
    }
    
    public void clearCart(UUID userId) {
        ArrayList<Cart> cartItems = addToCartRepo.findByUserId(userId);
        addToCartRepo.deleteAll(cartItems);
    }
}
