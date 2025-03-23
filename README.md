# GivaAssignment

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
GivaAssignment is a simple URL shortener application. It allows users to input a long URL and generate a shortened version. Users can also provide a custom alias for the shortened URL. The application tracks the number of clicks on each shortened URL.

## Features
- **Shorten URLs:** Generate a short URL for any long URL.
- **Custom Alias:** Optionally provide a custom alias for the shortened URL.
- **Click Tracking:** Track the number of clicks on each shortened URL.
- **Responsive UI:** User-friendly interface for easy interaction.

## Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other Technologies:** Axios, React Toastify

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManiPranshu/GivaAssignment.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd GivaAssignment
   ```
3. **Install dependencies for the frontend:**
   ```bash
   npm install
   ```
4. **Navigate to the server directory and install backend dependencies:**
   ```bash
   cd server
   npm install
   ```
5. **Configure environment variables:**
   - Create a `.env` file in the `server` directory with the following content:
     ```
     MONGO_URI=mongodb+srv://pranshucodes:Pranshu123@cluster0.i2hnc.mongodb.net/urlShortener?retryWrites=true&w=majority
     PORT=5000
     ```
6. **Start the backend server:**
   ```bash
   npm start
   ```
7. **Start the frontend development server:**
   - Navigate back to the root directory:
     ```bash
     cd ..
     ```
   - Run:
     ```bash
     npm run dev
     ```

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. Enter a long URL in the input field.
3. Optionally, provide a custom alias.
4. Click the "Shorten" button to generate a short URL.
5. Use the generated short URL to redirect to the original long URL.

## Contributing
Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a pull request.**

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact
- **Name:** Pranshu Mani
- **Email:** pranshucodes@gmail.com
- **LinkedIn:** [https://www.linkedin.com/in/pranshu-mani-01b04a25b/](https://www.linkedin.com/in/pranshu-mani-01b04a25b/)
- **GitHub:** [https://github.com/ManiPranshu](https://github.com/ManiPranshu)
