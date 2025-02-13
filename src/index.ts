import chalk from "chalk";
import connectToDatabase from "./database/connectToDatabase.js";

const databaseUrl = process.env.SUPABASE_URL;
const databaseKey = process.env.SUPABASE_KEY;

if (!databaseUrl || !databaseKey) {
  throw new Error(chalk.bgRedBright("Supabase URL or KEY not provided"));
}

connectToDatabase(databaseUrl, databaseKey);
