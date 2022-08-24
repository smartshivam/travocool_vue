import { createRouter,createWebHistory } from "vue-router";
import Home from "../view/Home/index.vue"
import Filter from "../view/Filter"
import Details from "../view/Details"
import SignUp from "../view/Authentication/SignUp.vue"
import Checkout from "../view/Checkout"
const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/filter",
        name:"Filter",
        component:Filter
    },
    {
        path:"/details",
        name:"Details",
        component:Details
    },
    {
        path:"/checkout",
        name:"Checkout",
        component:Checkout
    },
    {
        path:"/sign-up",
        name:"SignUp",
        component:SignUp
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router