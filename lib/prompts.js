import inquirer from "inquirer";
import { lessons } from "./lessons.js";
import { giveReward } from "./rewards.js";

export async function startPrompts() {
  const { lesson } = await inquirer.prompt([
    {
      type: "list",
      name: "lesson",
      message: "Choose your challenge:",
      choices: lessons.map(l => l.title)
    }
  ]);

  const current = lessons.find(l => l.title === lesson);
  console.log("\n" + current.content + "\n");

  giveReward();
}
