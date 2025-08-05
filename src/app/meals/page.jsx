import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div className="flex justify-center">
        <MealSearchInput />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {meals?.map((meal) => {
          return (
            <div key={meal?.idMeal} className={oswald.className}>
              <Image src={meal?.strMealThumb} width={641} height={641} alt={meal?.strMeal} />
              <p className="text-2xl font-bold">{meal?.strMeal}</p>
              <p>{meal?.strInstructions}</p>

              <Link className="text-blue-500 underline" href={`/meals/${meal.idMeal}`}>Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
