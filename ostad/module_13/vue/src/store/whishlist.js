import { reactive } from "vue";
import { authStore } from "./store";

const wishlist = reactive({
    items: [],
    isWishListed(product){
        return this.items.includes(product.id);
    },
    async toggleWishList(product){
        let apiUrl = 'http://localhost:8000/api/wishlist/';
        let method = 'POST';
        const payload = {
            product_id: product.id
        }
        const token = authStore.getUserToken();
        if(!this.isWishListed(product)){
            this.items.push(product.id);
        }
        try{
            const  response = await fetch(apiUrl, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Product ID save to wishlist: ',data);
        }catch(error){

        }
    }
});

export {wishlist}