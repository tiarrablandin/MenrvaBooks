/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "i.imgur.com",
            pathname: "/**",
            port: ""
        }, {
            protocol: "http",
            hostname: "covers.openlibrary.org",
            pathname: "/**",
            port: ""
        }]
    }
};

export default nextConfig;
