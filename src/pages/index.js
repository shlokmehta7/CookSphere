import Head from "next/head";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  // Placeholder data for featured recipes
  const featuredRecipes = [
    {
      id: 1,
      title: "Pasta Carbonara",
      image: "/images/pasta.jpg",
      description: "A classic Italian dish with creamy sauce.",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: "/images/curry.jpg",
      description: "Spicy and flavorful Indian curry.",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      image: "/images/stir-fry.jpg",
      description: "Healthy and quick vegetable stir fry.",
      rating: 4.2,
    },
  ];

  return (
    <div>
      <Head>
        <title>CookSphere - Home</title>
        <meta name="description" content="Discover and share delicious recipes on CookSphere." />
      </Head>

      <main className="container">
        <h1>Featured Recipes</h1>

        {/* Recipe Grid */}
        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              rating={recipe.rating}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;