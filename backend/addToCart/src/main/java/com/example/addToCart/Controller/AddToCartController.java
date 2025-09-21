package com.example.addToCart.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.addToCart.Entity.CartDetails;
import java.util.UUID;
import com.example.addToCart.Entity.Cart;
import com.example.addToCart.Service.AddToCartService;

@RestController
@RequestMapping("/ecommerce/addToCart")
public class AddToCartController {
    @Autowired
    AddToCartService addToCartService;

    @PostMapping("/add")
    public void addToCart(@RequestBody Cart cart) {
        addToCartService.addItemToCartService(cart);
    }
    @PostMapping("/remove")
    public void removeFromCart(@RequestBody Cart cart) {
        addToCartService.removeItemFromCartService(cart);
    }
    @GetMapping("/show/{userId}")
    public CartDetails showItems(@PathVariable UUID userId) {
        return addToCartService.displayAllProductsInCart(userId);
    }
    
    @PostMapping("/clear/{userId}")
    public void clearCart(@PathVariable UUID userId) {
        addToCartService.clearCart(userId);
    }
}
