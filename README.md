# Audiophile - An e-commerce web application for audio enthusiast

## Built With

- **Front-end**:
  - [React](https://reactjs.org/) with [JavaScript](https://javascript.info/document): For building dynamic and interactive user interfaces.
  
- **Back-end**:
  - [Java](https://www.java.com/): A versatile and high-performance programming language.
  - [Spring Boot](https://spring.io/projects/spring-boot): For rapid development and RESTful API support.
  - [MongoDB](https://www.mongodb.com/): A NoSQL document-based database for efficient data storage.

- **Security**:
  - [Spring Security](https://spring.io/projects/spring-security): Ensuring secure user authentication and data protection.

This tech stack ensures Audiphile's reliability, scalability, and performance while providing advanced features like sentiment analysis and collaborative feedback management.

## Installation

1. Clone the repository: `git clone https://github.com/iam-gokull/Audiophile.git`
2. Navigate to the project directory: `cd audiophile`
3. Install dependencies: `npm install` (for the front-end) and `mvn clean install` (for the back-end).
4. Start the application: `npm start` (for the front-end) and `mvn spring-boot:run` (for the back-end).

## Configuration

To run Audiphile locally or in your own environment, you'll need to set up the following configuration parameters in the Audiophile and Audiophile-security directories. These values are usually stored in environment variables or configuration files. Please make sure to keep sensitive information secure.

### Application Configuration

- `SECRET_KEY`: Your secret key for the application.
- `VALIDITY`: The validity duration for JWT (JSON Web Token).

### MongoDB Configuration

- `MONGODB_DATABASE`: The name of your MongoDB database.
- `MONGODB_USER`: Your MongoDB username.
- `MONGODB_PASSWORD`: Your MongoDB password.
- `MONGODB_CLUSTER`: The MongoDB cluster URL.

### Email Configuration

- `APP_PASSWORD`: Your application password for sending emails via SMTP. (Note: Keep this secure)

Please ensure you have these configurations set up correctly to run Audiophile without issues. You can either configure them as environment variables or place them in a configuration file, as per your preferred deployment method.

## Usage

- Access the application at `http://localhost:5173` (front-end) and `http://localhost:8080` (back-end).
- Create boards, collect feedback, and explore the features to streamline your feedback management process.

<!-- ## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md). -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. -->

## Questions?

If you have any questions or need further assistance, please don't hesitate to reach out.
