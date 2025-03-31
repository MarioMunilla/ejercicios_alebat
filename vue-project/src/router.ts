import { createRouter,createWebHistory } from "vue-router"
import HomePage from "@/view/HomePage.vue"
import CounterPage from "@/view/CounterPage.vue"
import CatalogPage from "@/view/CatalogPage.vue"
const routes=[
    {path:'/',name:'Home',component:HomePage},
    {path:'/counter',name:'Counter',component:CounterPage},
    {path:'/catalog',name:'Catalog',component:CatalogPage}
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router