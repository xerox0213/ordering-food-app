import path from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
  const { type } = req.query;
  const foodData = getFoodData(type);
  res.status(200).json(foodData);
}

function getFoodData(type) {
  const filePath = path.join(process.cwd(), 'food_menu_data', `${type}.json`);
  const fileData = readFileSync(filePath);
  const foodData = JSON.parse(fileData);
  return foodData;
}
