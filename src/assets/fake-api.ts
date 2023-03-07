import { Product } from "@app/core/models/products";

export const PRODUCTS_DATA: Product[] = [
    {id: 1, title: "Jacket", price: 1300, description: "desc", category: "fashion", image: "https://placehold.jp/100x100.png", rating: {rate:1, count: 1 }},
    {id: 2, title: "Shoes", price: 144, description: "desc", category: "fashion", image: "https://placehold.jp/100x100.png", rating: {rate:3, count: 55 }},
    {id: 3, title: "t-shirt", price: 134, description: "desc", category: "fashion", image: "https://placehold.jp/100x100.png", rating: {rate:4, count: 4 }},
    {id: 4, title: "PC", price: 777, description: "desc", category: "electronic", image: "https://placehold.jp/100x100.png", rating: {rate:1, count: 77 }},
    {id: 5, title: "PS 7", price: 1, description: "desc", category: "gaming", image: "https://placehold.jp/100x100.png", rating: {rate:2, count: 78 }},
    {id: 6, title: "title", price: 3456, description: "desc", category: "electronic", image: "https://placehold.jp/100x100.png", rating: {rate:4, count: 1 }},
    {id: 7, title: "PS 5", price: 7000, description: "desc", category: "gaming", image: "https://placehold.jp/100x100.png", rating: {rate:4, count: 1 }},
    {id: 8, title: "TV samsung", price: 1000, description: "desc", category: "electronic", image: "https://placehold.jp/100x100.png", rating: {rate:3, count: 44 }},
    {id: 9, title: "IOS", price: 133, description: "desc", category: "gaming", image: "https://placehold.jp/100x100.png", rating: {rate:1, count: 1 }},
    {id: 10,title: "perfect PS", price: 10, description: "desc", category: "gaming", image: "https://placehold.jp/100x100.png", rating: {rate:4, count: 44 }},
  ];