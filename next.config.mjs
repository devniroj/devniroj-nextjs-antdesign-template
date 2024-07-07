/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/admin/dashboard',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
