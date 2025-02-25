import Header from "../components/Header";
import Footer from "../components/Footer";

const Recipe = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe Details</h1>
        <p>Detailed recipe information goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Recipe;