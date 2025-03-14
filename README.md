# 🌟 Node.js Express Starter Project

This is a simple Node.js project using **Express.js** with **EJS** as the templating engine, following the **MVC (Model-View-Controller)** architecture. This structure ensures maintainability, scalability, and separation of concerns.

## 🏗 How MVC Works in This Project
The **MVC (Model-View-Controller)** architecture divides the project into three main components:

- **Model**: Manages the data, logic, and rules of the application. In this project, the model interacts with a **MySQL database** using **mysql2**.
- **View**: Handles the presentation layer. This project uses **EJS templates** to render dynamic HTML pages based on the data received from the controller.
- **Controller**: Manages the application's logic and responds to client requests. It processes data from the model and sends it to the view.

### Workflow:
1. A user makes a request (e.g., accessing a page or submitting a form).
2. The **Router** directs the request to the appropriate **Controller**.
3. The **Controller** processes the request, interacts with the **Model** (if necessary), and retrieves or modifies data.
4. The **Model** communicates with the **MySQL database** via **mysql2** and returns data to the **Controller**.
5. The **Controller** sends the data to the **View**, where it is rendered into an HTML page using **EJS**.
6. The final **HTML response** is sent back to the user's browser.

---

## 🚀 Features
- 🏗 **Organized Project Structure**: Clear separation of concerns.
- 🎨 **EJS Templating Engine**: Dynamic rendering of web pages.
- 🔀 **Flexible Routing**: Supports both API routes and web routes.
- 🛠 **Middleware Integration**: Enhanced functionality and scalability.
- 💾 **Database Ready**: Integration via models and migrations.
- 🎨 **Static Files Support**: Serve CSS, JS, and images from the `public/` directory.
- 🔌 **Configurable Settings**: Manage settings via the `config/` folder.

---

## 🛠 Technologies Used
- **Node.js** - JavaScript runtime for server-side programming.
- **Express.js** - Fast and minimalist web framework.
- **EJS** - Template engine for dynamic web pages.
- **CSS** - Stylesheets for UI design.
- **MySQL with mysql2** - Relational database connection.
- **Nodemon** - Development tool for automatic restarts.
- **dotenv** - Environment variable management.
- **Body-parser** - Middleware for handling form submissions.
- **Morgan** - HTTP request logger.
- **CORS** - Cross-origin resource sharing support.

---

## 📚 Documentation
- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Node.js Documentation](https://nodejs.org/)
- [mysql2 Documentation](https://www.npmjs.com/package/mysql2)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

## 📧 Contact
- **Author**: Long Nguyen
- **Email**: longwinpro113@gmail.com
- **GitHub**: [https://github.com/longwinpro113](https://github.com/longwinpro113)
