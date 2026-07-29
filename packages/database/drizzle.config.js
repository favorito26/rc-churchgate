import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./schema/index.js",
    out: "./migrations",
    dialect: "sqlite",
    strict: true,
    verbose: true,
});