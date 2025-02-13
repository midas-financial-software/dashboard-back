import { createClient } from "@supabase/supabase-js";
import chalk from "chalk";

const connectToDatabase = (supabaseUrl: string, supabaseKey: string) => {
  createClient(supabaseUrl, supabaseKey);

  console.log(chalk.bgGreenBright("Connected to the database"));
};

export default connectToDatabase;
