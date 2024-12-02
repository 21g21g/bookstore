📚 Books Collection RESTful API
A RESTful API for managing a collection of books, developed as part of the Stage Two Backend Track Task. This API allows users to perform CRUD operations on books while ensuring proper data validation and integration with a MongoDB database. The project includes a custom endpoint to enhance functionality.

🚀 Features
CRUD Operations: Create, Read, Update, and Delete books.
Data Validation: Ensures valid data input for fields such as Title, Author, ISBN, and Published Year.
Database Integration: MongoDB for data persistence.
Custom Endpoint: /books/favorite to mark books as favorites.
🛠️ Tech Stack
Backend Framework: Node.js with Express.js
Database: MongoDB (via Mongoose ODM)
Validation: Express Validator
Hosting Platform: Render / Vercel
📑 API Endpoints
Books Collection Routes
HTTP Method	Endpoint	Description	Required Fields (for POST/PUT)
GET	/books	Fetch all books	-
POST	/books	Add a new book	title, author, isbn, publishedYear
PUT	/books/:id	Update a book by ID	title, author, isbn, publishedYear
DELETE	/books/:id	Delete a book by ID	-
Custom Endpoint
HTTP Method	Endpoint	Description
GET	/books/favorite	Marks a book as a favorite
🔧 Setup Instructions
1. Clone the Repository

git clone git@github.com:21g21g/bookstore.git
cd books-collection-api
2. Install Dependencies
Ensure you have Node.js installed, then run:


npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following:

MONGO_URI=<mongodb+srv://assegagebeyehu21:ljZEBrnc0YS7TKHB@book.f1mtg.mongodb.net/?retryWrites=true&w=majority&appName=book>
PORT=5000

4. Run the Server Locally
Start the development server:

npm run dev
The API will be available at http://localhost:5000.

5. Test the API
You can use tools like Postman or cURL to test the endpoints.

🌐 Deployed API
The API is deployed and accessible at: https://your-api-url.com

🧪 Sample API Requests
Create a Book
Endpoint: POST /books

Body:

{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "publishedYear": 1925
}
Response:

{
    "_id": "638fa5c47c4f6c3b2f1f321c",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "publishedYear": 1925
}
