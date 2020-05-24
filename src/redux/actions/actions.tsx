import { Product } from "../../Model/Product"
import { User } from "../../Model/User"


export const addTodo = (todo: any) => ({
    type: 'CHANGE_CONTENT',
    text: todo
})

export const openDrawer = (visible: any) => ({
    type: 'OPEN_DRAWER',
    visible: visible
})

export const addToBasket = (product: Product) => ({
    type: 'ADD_TO_BASKET',
    product: product
})

export const loginUser = (user: User) => ({
    type: 'LOGIN_USER',
    user: user
})

export const exitUser = () => ({
    type: 'EXIT_USER',
    user: {
        Id: "0",
        Name: "",
    } as unknown as User
})