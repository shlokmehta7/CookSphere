import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Profile = () => {
  // Placeholder user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Food enthusiast and home cook.",
    profilePicture: "/images/profile.jpg",
  });

  // Placeholder data for uploaded recipes
  const uploadedRecipes = [
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
  ];

  // Placeholder data for saved recipes
  const savedRecipes = [
    {
      id: 3,
      title: "Vegetable Stir Fry",
      image: "/images/stir-fry.jpg",
      description: "Healthy and quick vegetable stir fry.",
      rating: 4.2,
    },
  ];

  // State for editing profile
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Save edited profile
  const handleSaveProfile = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Bio Section */}
        {isEditing ? (
          <textarea
            name="bio"
            value={editedUser.bio}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            rows="4"
          />
        ) : (
          <p className="text-gray-700 mb-4">{user.bio}</p>
        )}

        {/* Edit/Save Button */}
        <button
          onClick={() => (isEditing ? handleSaveProfile() : setIsEditing(true))}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>

      {/* Uploaded Recipes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Uploaded Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              rating={recipe.rating}
            />
          ))}
        </div>
      </div>

      {/* Saved Recipes Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Saved Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              rating={recipe.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;