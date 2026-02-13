REST API Data Dashboard

An interactive frontend dashboard that consumes a public REST API and dynamically displays user data with filtering, sorting, pagination, and inline editing functionality.

🚀 Live Features

✅ Fetch data from public REST API

✅ Dynamic dashboard UI

✅ Search users by name

✅ Sort users (A–Z / Z–A)

✅ Pagination for large dataset handling

✅ Edit user names (frontend update)

✅ Graceful error handling

✅ Optimized DOM rendering

🔗 API Endpoint Used

GET
https://jsonplaceholder.typicode.com/users

This API returns structured JSON user data including name, email, and address.

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Fetch API

📂 Project Structure
rest-api-dashboard/
│── index.html
│── style.css
│── script.js
│── README.md

🔄 Application Data Flow

Application loads and sends a GET request using Fetch API

JSON response is stored in a local JavaScript array

User interactions trigger:

Filtering (Array.filter)

Sorting (Array.sort)

Pagination (Array.slice)

Optimized DOM updates using DocumentFragment

Errors are caught using try...catch and displayed to the user

🧠 Key Concepts Demonstrated
🔹 REST Architecture

REST (Representational State Transfer) is a web architecture style where resources are accessed via HTTP methods.

🔹 HTTP Methods

GET – Retrieve data

POST – Create data

PUT – Update data

DELETE – Remove data

🔹 Handling Large Datasets

Implemented pagination to reduce DOM load and improve performance.

🔹 Error Handling

Used async/await with try-catch to prevent UI crashes and improve user experience.

📌 Internship Task Compliance

This project satisfies all requirements of Task 16 – Build a REST API Data Dashboard (Frontend Integration):

Public REST API integration

Structured JSON parsing

Interactive UI

Filtering & sorting

Pagination

Error handling

Clean project documentation

👤 Author

Damarla Teja
Web Development Intern
