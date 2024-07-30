import { reactive } from "vue";

const cart = reactive({
    items: {},
    totalPrice: 0,
    addItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity++;
        }else{
            this.items[product.id] = {
                product,
                quantity: 1
            }
        }
    },
    removeItem(product){},
    emptyCart(){},
    saveCartInLocalStorage(){},
    getCartFromLocalStorage(){},
});

export {cart}