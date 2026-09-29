import withFlowbiteReact from "flowbite-react/plugin/nextjs";


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.com", "flowbite.s3.amazonaws.com"],
  },
};

export default withFlowbiteReact(nextConfig);