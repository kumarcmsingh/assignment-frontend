import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage, perPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(' http://127.0.0.1:5000/api/data', {
        params: { page: currentPage, per_page: perPage },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Calculate the total number of pages based on the data length and items per page
    setTotalPages(Math.ceil(data.length / perPage));
  }, [data, perPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array based on the current page and items per page
    const slicedData = data.slice(startIndex, endIndex);

    return slicedData.map((item, index) => (
      <tr key={index}>
        <td>{item._measurement}</td>
        <td>{item._start}</td>
        <td>{item._stop}</td>
        <td>{item.data_type_of_sensor}</td>
        <td>{item.sensor_id}</td>
        <td>{item.sensor_name}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    // Generate an array of page numbers
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              <span className="page-link">{page}</span>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <h2>Data Display</h2>
      <h3>Tabular Data</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>Start</th>
            <th>Stop</th>
            <th>Data Type of Sensor</th>
            <th>Sensor ID</th>
            <th>Sensor Name</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      {renderPagination()}
    </div>
  );
};

export default App;
