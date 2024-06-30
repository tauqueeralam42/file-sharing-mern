# Vite React File Sharing Web Application

A file sharing web application built using Vite, React, Node.js, Express, Multer, and MongoDB. Users can upload files of any type, receive a unique link for each upload, and share this link with others for downloading files securely.

## Features

- **File Upload:** Upload files of any type through a user-friendly interface.
- **Unique Links:** Each uploaded file gets a unique link that can be shared for downloading.
- **Secure Access:** Files are accessible only through the generated links.
- **MongoDB Storage:** Files and link metadata are stored in MongoDB for persistence.
- **Responsive Design:** User interface is responsive and works well on different devices.

## Demo

You can try the live demo of the application [here](https://tauqueer-file-sharing-app.netlify.app/).

## Technologies Used

- **Frontend:** Vite for fast development and React.js for building the user interface.
- **Backend:** Node.js and Express.js for server-side logic and API.
- **File Handling:** Multer middleware for handling file uploads.
- **Database:** MongoDB for storing file metadata and links.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/tauqueeralam42/file-sharing-mern.git
   ```
2. Navigate to the project directory:
   ```sh
   cd file-sharing-mern
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd frontend
    npm install
    cd ../backend
    npm install
    ```
4. Configure MongoDB:

- Ensure MongoDB is installed and running locally or provide a MongoDB URI.
- Update the MongoDB URI in the backend configuration files if necessary.

5. Start the server:
   ```sh
    cd ../backend
    npm start
   ```
6. Start the frontend:
   ```sh
    cd ../frontend
    npm start
   ```
7. Open your browser and visit http://localhost:5173 to view the application.

## Usage

1. Upload a file using the provided interface.
2. Once uploaded, copy the generated link and share it with others.
3. Recipients can download the file using the shared link.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any questions or suggestions, feel free to reach out.

- GitHub: [tauqueeralam42](https://github.com/tauqueeralam42)
- Email: tauqueeralam42@gmail.com.com

