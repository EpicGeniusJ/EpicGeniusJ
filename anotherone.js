// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient for poison powder
addIngredient("poison_powder", {
    color: "#4B0082", // dark purple
    type: "powder", // type can be any other ingredient
    shape: "powder" // custom shape ID for powder
});

// Add a detailed ingredient with reactions
addIngredient("antidote", {
    color: "#00FF00", // bright green
    type: "liquid",
    reactions: {
        poison_powder: { set1: "neutralized" } // neutralizes poison
    }
});

// Change attributes of existing ingredients (if needed)
editIngredient("water", {
    color: "#a0d3e8" // light blue for clarity
});

// Add a simple recipe that uses poison powder
addRecipe("food+poison_powder", "poisoned_food");

// Add a recipe that creates an antidote
addRecipe("water+poison_powder", "antidote");

// Add a recipe that can't have any other ingredients
addRecipe("=poison_powder+poison_powder", "double_poison");

// Add a recipe with an optional ingredient
addRecipe("antidote+herbs?", "herbal_antidote");

// Add a simple tool to interact with poison powder
addTool("poison_doser", {
    func: function(placed) { placed.h = 0; },
    shape: "tool"
});

// Add a tool with more properties
addTool("poison_doser", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on food to dose it with poison!"); },
    whileOn: function() { console.log("Poison doser selected."); },
    onDeselect: function() { alert("Poison doser deselected!"); },
    onClick: function(x, y) { console.log("Dosing at coordinates:", x, y); },
    shape: "tool",
    spin: true
});
