import {defineConfig} from "drizzlekit";

export default defineConfig( {
    schema: "./schema/index.js",
    out: "./migrations",
    dialect: "sqlite",
});