

// commands 
- npm install
- npm run dev


````js
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ["all", ...tempSet];
console.log(tempItems)
```