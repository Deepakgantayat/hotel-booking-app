/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_LOCAL_URI:"mongodb://127.0.0.1:27017/hotel-booking",
        DB_URI:""
    }
}

module.exports = nextConfig
