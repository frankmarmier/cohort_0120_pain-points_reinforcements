const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

const franklesRecipe = {
  title: "Pesto di Frankles",
  level: "Easy Peasy",
  ingredients: ["Pasta", "Pesto", "Love"],
  cuisine: "Ironhack",
  dishType: "Dish",
  duration: 0,
  creator: "Franckles"
};

// Connection to the database "recipeApp"
// mongoose
//   .connect("mongodb://localhost/recipe-app-dev", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => {
//     console.log("Connected to the database", x);
//     return Recipe.create(franklesRecipe);
//   })
//   .then(recipe => {
//     console.log(recipe.title);
//     return Recipe.insertMany(data);
//   })
//   .then(recipes => {
//     recipes.forEach(r => console.log(r.title));
//     return Recipe.findOneAndUpdate(
//       { title: "Rigatoni alla Genovese" },
//       { duration: 100 },
//       { new: true }
//     );
//   })
//   .then(updatedRecipe => {
//     console.log(updatedRecipe);
//     return Recipe.findOneAndDelete({ title: "Carrot Cake" });
//   })
//   .then(() => {
//     mongoose.connection.close().then(() => console.log("closed"));
//   })
//   .catch(err => console.error("Error connecting to mongo", err));

// mongoose
//   .connect("mongodb://localhost/recipe-app-dev", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => {
//     console.log("Connected to the database");
//     Recipe.create(franklesRecipe)
//       .then(recipe => {
//         console.log(recipe.title);
//         Recipe.insertMany(data)
//           .then(recipes => {
//             recipes.forEach(r => console.log(r.title));
//             Recipe.updateOne(
//               { title: "Rigatoni alla Genovese" },
//               { duration: 100 }
//             )
//               .then(updatedRecipe => {
//                 console.log(updatedRecipe);
//                 Recipe.deleteOne({ title: "Carrot Cake" })
//                   .then(() => {
//                     console.log("Carrot cake deleted");
//                     mongoose.connection
//                       .close()
//                       .then(() => {
//                         console.log("closed");
//                       })
//                       .catch(err => console.log("Error closing", err));
//                   })
//                   .catch(err => console.log(err));
//               })
//               .catch(err => console.log(err));
//           })
//           .catch(err => console.log(err));
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));

// // //Async await
async function createRecipes(cb) {
  try {
    const x = await mongoose.connect("mongodb://localhost/recipe-app-dev", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Promise 1")
     const recipe = await Recipe.create(franklesRecipe).catch(err => console.log(err));
     console.log(recipe,"this is recipe")
    console.log("Promise 2")
     const recipes = await Recipe.insertMany(data).catch(err => console.log(err));
    console.log("Promise 3")
     const updatedRecipe =await Recipe.updateOne({title: "feahiufea"},{duration: 100},{new:true});
    console.log("Promise 4")
    await mongoose.connection.close();
    console.log("Promise 5")
    
  } catch (err) {
    console.log(err);
  }
}

createRecipes();
console.log("Supposed to happen after");
// mongoose
//   .connect("mongodb://localhost/recipe-app-dev", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => {
//     console.log("Promise n°1");
//     Recipe.create(franklesRecipe)
//       .then(recipe => {
//         console.log("Promise n°2");
//         Recipe.insertMany(data)
//           .then(recipes => {
//             console.log("Promise n°3");

//             Recipe.updateOne(
//               { title: "Rigatoni alla Genovese" },
//               { duration: 100 },
//               { new: true }
//             )
//               .then(updatedRecipe => {
//                 console.log("Promise n°4");
//                 Recipe.deleteOne({ title: "Carrot Cake" })
//                   .then(deletedRecipe => {
//                     console.log("Promise n°5");
//                     mongoose.connection
//                       .close()
//                       .then(() => {

//                           console.log(recipe);

//                         console.log("Promise n°6");
//                       })
//                       .catch(err => console.log(err));
//                   })
//                   .catch(err => console.log(err));
//               })
//               .catch(err => console.log(err));
//           })
//           .catch(err => console.log(err));
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log("Error connecting to the DB"));

// mongoose
//   .connect("mongodb://localhost/recipe-app-dev", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => {
//     // console.log(x);
//     console.log("Promise 1")
//     return Recipe.create(franklesRecipe);
//   })
//   .then(recipe => {
//     // console.log(recipe);
//     console.log("Promise 2")
//     return {  p: Recipe.insertMany(data) };
//   })
//   .then(result => {
//     console.log("Promise 3")
//     // console.log(result.p.then)
//     // console.log(recipes);
//     return Recipe.updateOne(
//       { title: "Rigatoni alla Genovese" },
//       { duration: 100 },
//       { new: true }
//     );
//   })
//   .then(updatedRecipe => {
//     // console.log(updatedRecipe);
//     console.log("Promise 4")
//     return Recipe.deleteOne({ title: "Carrot Cake" });
//   })
//   .then(deleteRecipe => {
//     console.log("Promise 5")
//     flag = true;
//     return mongoose.connection.close();
//   })
//   .then(() => {
//     console.log("Promise 6")
//     console.log(recipe)
//     console.log("Closed DB");
//     // console.log(recipe)
//   })
//   .catch(err => {
//     console.log(err);
//   });
