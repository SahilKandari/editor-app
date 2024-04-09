export const explorer = {
  id:"1",
  name: "root",
  isFolder: true,
  items: [
    {
      id:"2",
      name: "public",
      isFolder: true,
      items: [
        {
          id:"3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id:"4",
              name: "index.html",
              isFolder: false,
              isSelected: false,
              items: [],
              code: `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Dummy HTML Page</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f0f0f0;
                          margin: 0;
                          padding: 0;
                      }
                      header {
                          background-color: #333;
                          color: #fff;
                          padding: 10px;
                          text-align: center;
                      }
                      main {
                          padding: 20px;
                      }
                      h1 {
                          color: #333;
                      }
                      p {
                          line-height: 1.6;
                      }
                      footer {
                          background-color: #333;
                          color: #fff;
                          padding: 10px;
                          text-align: center;
                          position: fixed;
                          bottom: 0;
                          width: 100%;
                      }
                  </style>
              </head>
              <body>
                  <header>
                      <h1>Dummy HTML Page</h1>
                  </header>
                  <main>
                      <h2>Welcome to Dummy HTML Page</h2>
                      <p>This is a dummy HTML page created for demonstration purposes.</p>
                      <p>You can replace this content with your own.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum elit. Ut sed tortor vitae tortor vestibulum luctus. Fusce et velit at arcu convallis eleifend. Morbi non leo vel ante vehicula ultrices.</p>
                  </main>
                  <footer>
                      <p>&copy; 2024 Dummy HTML Page. All rights reserved.</p>
                  </footer>
              </body>
              </html>
              `
            },
            {
              id:"5",
              name: "hello.html",
              isFolder: false,
              isSelected: false,
              items: [],
              code: `<!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Hello HTML</title>
              </head>
              <body>
                  <h1>Hello, World!</h1>
                  <p>This is a dummy HTML file created for demonstration purposes.</p>
              </body>
              </html>
              `
            }
          ]
        },
        {
          id:"6",
          name: "public_file",
          isFolder: false,
          isSelected: false,
          items: [],
          code: `mkdir public\nested_directory
          echo. > public\nested_directory\dummy_file.txt`
        }
      ]
    },
    {
      id:"7",
      name: "src",
      isFolder: true,
      items: [
        {
          id:"8",
          name: "App.js",
          isFolder: false,
          isSelected: false,
          items: [],
          code: `// Dummy JavaScript function to calculate the sum of two numbers
          function calculateSum(a, b) {
              return a + b;
          }
          
          // Example usage of the function
          let result = calculateSum(5, 3);
          console.log("The sum is: " + result);
          `
        },
        {
          id:"9",
          name: "Index.js",
          isFolder: false,
          isSelected: false,
          items: [],
          code: `// Dummy JavaScript function to check if a number is even or odd
          function checkEvenOrOdd(number) {
              if (number % 2 === 0) {
                  return "Even";
              } else {
                  return "Odd";
              }
          }
          
          // Example usage of the function
          let num = 7;
          console.log(num + " is " + checkEvenOrOdd(num));
          `
        },
        {
          id:"10",
          name: "styles.css",
          isFolder: false,
          isSelected: false,
          items: [],
          code: `/* Dummy CSS Styles */

          /* Styling for heading */
          h1 {
              color: #333;
              font-size: 24px;
              font-weight: bold;
              text-align: center;
          }
          
          /* Styling for paragraph */
          p {
              color: #666;
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 20px;
          }
          
          /* Styling for links */
          a {
              color: #007bff;
              text-decoration: none;
          }
          
          a:hover {
              text-decoration: underline;
          }
          
          /* Styling for buttons */
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              text-align: center;
              text-decoration: none;
              transition: background-color 0.3s ease;
          }
          
          .button:hover {
              background-color: #0056b3;
          }
          
          /* Styling for containers */
          .container {
              width: 80%;
              margin: 0 auto;
          }
          
          /* Styling for grid layout */
          .row {
              display: flex;
              flex-wrap: wrap;
              margin: 0 -15px;
          }
          
          .col {
              flex: 1;
              padding: 0 15px;
          }
          
          /* Clearfix for floats */
          .clearfix::after {
              content: "";
              clear: both;
              display: table;
          }
          `
        }
      ]
    },
    {
      id:"11",
      name: "package.json",
      isFolder: false,
      isSelected: false,
      items: [],
      code: `{
        "name": "dummy-project",
        "version": "1.0.0",
        "description": "A dummy project for demonstration purposes",
        "main": "index.js",
        "scripts": {
          "start": "node index.js",
          "test": "echo \"No tests yet\""
        },
        "keywords": [
          "dummy",
          "demo"
        ],
        "author": "Your Name",
        "license": "MIT",
        "dependencies": {
          "express": "^4.17.1"
        },
        "devDependencies": {
          "nodemon": "^2.0.7"
        }
      }
      `
    }
  ]
};