const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const [SingleMeal] = await fetchSingleMeal(id);
console.log(SingleMeal);
  return {
    title: SingleMeal.strMeal,
    description: SingleMeal.strInstructions,
  };
}

export default async function SingleMealPage({ params }) {
  const p = await params;

  const SingleMeal = await fetchSingleMeal(p?.id);

  return (
    <div>
      <p>{JSON.stringify(SingleMeal)}</p>
    </div>
  );
}
