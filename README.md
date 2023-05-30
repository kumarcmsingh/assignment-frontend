# Time-Series Data Visualization

This project is a full-stack application for visualizing time-series data. It consists of a backend API built with Flask and an interactive frontend built with ReactJS. The backend retrieves time-series data from an InfluxDB database and provides an API endpoint for the frontend to fetch and display the data.

## Features

- Fetch time-series data from an InfluxDB database using the InfluxDB-Python library.
- Implement pagination in the backend API to retrieve data in chunks.
- Build a responsive frontend UI with ReactJS and visualize the data using tables and line charts.
- Support pagination in the frontend to display data in a paginated manner.
- Use libraries like React Bootstrap and Chart.js to enhance the UI and improve data visualization.

## Prerequisites

To run this project locally, you need to have the following installed:

- Python 3
- Flask
- InfluxDB
- Node.js
- npm (Node Package Manager)

## Installation and Setup

### Backend

1. Install the required Python packages. From the root directory, run:

2. Configure the InfluxDB connection parameters in `backend/app.py`. Update the `INFLUXDB_HOST`, `INFLUXDB_PORT`, `INFLUXDB_USERNAME`, `INFLUXDB_PASSWORD`, and `INFLUXDB_DATABASE` variables to match your InfluxDB setup.

3. Run the Flask server:

The backend API will be accessible at `http://localhost:5000/api/data`.

### Frontend

1. Navigate to the `frontend` directory:

2. Install the dependencies:

3. Configure the API endpoint URL in `frontend/src/App.js`. Update the `API_URL` variable to match the backend API URL.

4. Run the React development server:

The frontend application will be accessible at `http://localhost:3000`.

## Usage

### Backend

- The backend API provides a single endpoint: `/api/data`.
- The endpoint supports pagination using the `page` and `per_page` query parameters. For example: `/api/data?page=1&per_page=10` retrieves the first 10 data records.
- The backend retrieves time-series data from the InfluxDB database and returns it as JSON.

### Frontend

- The frontend application displays the retrieved time-series data in a visually appealing manner.
- It includes a table component with pagination to display the data in a paginated format.
- The table shows the measurement, start time, stop time, data type of sensor, sensor ID, and sensor name.
- The frontend also includes a line chart component to visualize the time-series data graphically.
- The line chart displays the O2 reading values over time.

## Customization and Enhancement

You can further customize and enhance this project based on your specific requirements. Some possible improvements include:

- Adding authentication and authorization to the backend API.
- Implementing additional data filters and search functionality.
- Enhancing the frontend UI with more interactive features and responsive design.
- Adding error handling and validation in both the frontend and backend.
- Improving data visualization with more chart options and customization.
