import path from 'path';
import { readFileSync } from 'fs';

export default function getFoodData(type = 'allFoods') {
  const filePath = path.join(process.cwd(), 'food_menu_data', `${type}.json`);
  const fileData = readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
