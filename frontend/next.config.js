/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash:true,
    reactStrictMode:true,
    images:{
        domains:['localhost','127.0.0.1','res.cloudinary.com']
    },
    publicRuntimeConfig:{
        backendUrl:process.env.STRAPI_BASE_URL
    },
}
// const withBundleAnalyzer=require('@next/bundle-analyzer')({
//     enabled:true,
// })

// module.exports = withBundleAnalyzer({
//     reactStrictMode:true,
//     images:{
//         domains:['localhost','127.0.0.1','res.cloudinary.com']
//     },
//     publicRuntimeConfig:{
//         backendUrl:process.env.STRAPI_BASE_URL
//     },
// })

module.exports=nextConfig
