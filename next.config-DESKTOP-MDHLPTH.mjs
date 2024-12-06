import { config } from "next/dist/build/templates/pages"

/** @type {import("next").NextConfig} */
const webpack = require("react-server-dom-webpack/server.edge")
const nextConfig={
    output: 'export',
    reactStrictMode: true,
    webpack:(config, { buildId, dev, isServer, defaultLoader, webpack}) =>{
        config.plugins.push(
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "window.jQuery":"jquery",
            })
        );
        return config;
    }

}
module.exports = nextConfig;




