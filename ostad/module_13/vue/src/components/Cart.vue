<script setup>
import { cart } from '../store/cart'

</script>
 
<template>
    <div class="bg-neutral-900">
        <div class="mx-auto px-12 py-8 ">
            <h2 class="text-2xl font-bold tracking-tight text-gray-300">Cart</h2>
            <p class="my-10">
                <!-- {{ cart }} -->
            </p>
            <div>
                <div class="flex items-center my-5" v-for="item in cart.items">
                    <p class="w-2/3">
                        <router-link :to="{ name: 'product', params: { id: item.product.id } }">
                            {{ item.product.title }}
                        </router-link>
                    </p>
                    <p class="w-[100px]">
                        {{ item.product.price }}
                    </p>
                    <p>
                        <input class="text-black" type="number" v-model="item.quantity">
                    </p>

                </div>
                <div class="flex items-center my-5">
                    <p class="w-2/3">
                        Total
                    </p>
                    <p class="w-[100px]">

                    </p>
                    <p>
                        <strong>{{ cart.totalPrice }}</strong>
                    </p>
                </div>
                <div class="my-5">
                    <input type="text" placeholder="apply coupon code">
                    <button class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Apply Coupon
                    </button>
                </div>
                <button @click="cart.saveCartInLocalStorage()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Cart
                </button>

                <button @click="cart.emptyCart()" class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Empty Cart
                </button>

                <button @click="cart.checkout()" class="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Place Order
                </button>

            </div>
        </div>
    </div>
</template>
 
<style scoped></style>