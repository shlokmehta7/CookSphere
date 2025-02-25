import Header from "../components/Header";
import Footer from "../components/Footer";

const Upload = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Upload a Recipe</h1>
        <p>Recipe upload form goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;