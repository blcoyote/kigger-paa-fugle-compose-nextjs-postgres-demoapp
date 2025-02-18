import { syncDatabase } from "./database/connection";

export async function register() {
  // Register the instrumentation hook
  console.log("Instrumentation hook registered");
  syncDatabase();
}
