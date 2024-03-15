## INSTALLATION

npm create vite@latest   
<img src="https://www.svgrepo.com/show/374167/vite.svg" width=10% height=10%>

Select React using Arrows 


<img src="https://www.svgrepo.com/show/354259/react.svg" width=10% height=10%>

Select javascript+swc


<img src="https://www.svgrepo.com/show/354419/swc.svg" width=10% height=10%>

 npm i or npm install

## install Tailwind CSS

<img src="https://www.svgrepo.com/show/374118/tailwind.svg" width=10% height=10%>

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm install -D tailwindcss postcss autoprefixer


npx tailwindcss init -p

# Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.


  content: [
  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 


# Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;

@tailwind components;

@tailwind utilities;

# Start your build process
Run your build process with npm run dev


npm run dev

