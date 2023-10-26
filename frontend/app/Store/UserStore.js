import { create } from "zustand";
import {persist,createJSONStorage} from 'zustand/middleware'


const store = (set, get) => ({
    userData: null,
    jwtToken: null,
    isLoggedIn:false,
    setJwtToken:(jwt)=>{set(state=>({userData:get().userData,jwtToken:jwt,isLoggedIn:true}))},
    setUserData: (user) => { set(state => ({ userData: user,jwtToken:get().jwtToken,isLoggedIn:true })) },
    logOut: () => { set(state => ({ userData: null ,jwtToken:null,isLoggedIn:false})) }
})

const useUserStore = create(persist(store,{
    name:"user-data",
    storage:createJSONStorage(()=>sessionStorage)
}))

export default useUserStore
