// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'vegetable' ingredient as a base
addIngredient("carrot", {
    color: "#ff8c00", // orange
    type: "vegetable" // will inherit all properties of the 'vegetable' ingredient
});

// Add a detailed ingredient with custom Shape and other properties
addIngredient("finished_carrot", {
    color: "#ff8c00", // orange
    innerColor: "#fff5e1", // light beige
    type: "carrot", // type can be any other ingredient
    shape: "vegetable_stick" // custom shape ID
});

// Add ingredient with reactions
addIngredient("milk", {
    type: "liquid",
    color: "#ffffff", // white
    reactions: {
        carrot: { set1: "carrot_soup" },
        sugar: { set1: "sweet_milk" }
    }
});

// Change attributes of existing ingredients
editIngredient("carrot", {
    color: "#ff4500" // darker orange
});

// Add a simple recipe
addRecipe("carrot+milk", "carrot_soup");

// Add a recipe only in Stack Mode
addRecipe("&stack:carrot+milk", "carrot_pudding");

// Add a recipe that can't have any other ingredients
addRecipe("=bread+bread", "carrot_bread");

// Add a recipe with an optional ingredient
addRecipe("carrot_soup+croutons?+herbs", "deluxe_carrot_soup");

// Add a simple tool to interact with ingredients
addTool("orange_peeler", {
    func: function(placed) { placed.h = 0; },
    shape: "tool"
});

// Add a tool with more properties
addTool("orange_peeler", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on a carrot to peel it!"); },
    whileOn: function() { console.log("Peeler selected."); },
    onDeselect: function() { alert("Peeler deselected!"); },
    onClick: function(x, y) { console.log("Peeling at coordinates:", x, y); },
    shape: "tool",
    spin: true
});
