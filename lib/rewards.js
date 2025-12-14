import fs from "fs";

const file = new URL("../data/progress.json", import.meta.url);

export function giveReward() {
  const progress = JSON.parse(fs.readFileSync(file));
  progress.points += 10;
  fs.writeFileSync(file, JSON.stringify(progress, null, 2));

  console.log("⭐ You earned 10 points!");
  console.log(`🏆 Total Points: ${progress.points}`);
}
