import React, { useEffect, useState, useRef } from 'react';
import config from '../constants.js';
import { ArrowRightOnRectangleIcon, PlusCircleIcon, PhotoIcon } from '@heroicons/react/24/outline';

const DashboardPage = ({ user, recipes, onLogout, onLoadRecipes, onCreateRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({ 
    title: '', 
    description: '', 
    ingredients: '', 
    instructions: '', 
    prepTime: 30, 
    cookTime: 30, 
    difficulty: 'Medium' 
  });
  const [photoFile, setPhotoFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    onLoadRecipes();
  }, [onLoadRecipes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const recipeData = {
      ...newRecipe,
      photo: photoFile,
    };
    await onCreateRecipe(recipeData);
    // Reset form
    setNewRecipe({ title: '', description: '', ingredients: '', instructions: '', prepTime: 30, cookTime: 30, difficulty: 'Medium' });
    setPhotoFile(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
            <p className="text-gray-600">Share your culinary creations with the world.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`${config.BACKEND_URL}/admin`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
              Admin Panel
            </a>
            <button onClick={onLogout} className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                <PlusCircleIcon className="h-6 w-6 mr-2 text-blue-500" />
                Create New Recipe
              </h2>
              <form onSubmit={handleCreateRecipe} className="space-y-4">
                <input type="text" name="title" placeholder="Recipe Title" value={newRecipe.title} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required />
                <textarea name="description" placeholder="Description" value={newRecipe.description} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-24" />
                <textarea name="ingredients" placeholder="Ingredients (one per line)" value={newRecipe.ingredients} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-24" />
                <textarea name="instructions" placeholder="Instructions" value={newRecipe.instructions} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-32" />
                <div className="grid grid-cols-2 gap-4">
                    <input type="number" name="prepTime" placeholder="Prep Time (min)" value={newRecipe.prepTime} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="cookTime" placeholder="Cook Time (min)" value={newRecipe.cookTime} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
                </div>
                <select name="difficulty" value={newRecipe.difficulty} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <div className='flex items-center justify-center w-full'>
                    <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            <PhotoIcon className='w-8 h-8 mb-4 text-gray-500' />
                            <p className='mb-2 text-sm text-gray-500'><span className='font-semibold'>Click to upload photo</span></p>
                            {photoFile && <p className='text-xs text-gray-500'>{photoFile.name}</p>}
                        </div>
                        <input ref={fileInputRef} type='file' name='photo' onChange={handleFileChange} className='hidden' accept='image/*' />
                    </label>
                </div> 
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Add Recipe</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Community Recipes</h2>
            {recipes.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-lg shadow-md">
                <p className="text-gray-500">No recipes yet. Be the first to create one!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.map(recipe => (
                  <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                    {recipe.photo && recipe.photo.thumbnail ? (
                        <img src={recipe.photo.thumbnail.url} alt={recipe.title} className="w-full h-48 object-cover" />
                    ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">No Photo</div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-900 truncate">{recipe.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">By {recipe.author ? recipe.author.name : 'Unknown'}</p>
                      <div className="mt-2 text-xs flex items-center justify-between text-gray-600">
                         <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>{recipe.difficulty}</span>
                         <span>{recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
