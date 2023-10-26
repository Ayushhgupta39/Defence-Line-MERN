import axios from "axios";

const clientAxios=axios.create({baseURL:`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}`})

export default clientAxios