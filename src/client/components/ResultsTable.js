import React from 'react';

const Table = () => {
  return (
    <table className="table table-hover table-borderless m-0 bg-white shadow">
      <thead>
      <tr className="border-bottom">
        <th scope="col">Audience Topic</th>
        <th scope="col">Audience Size</th>
        <th scope="col">Combined Size</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Advertising</th>
        <td>15000000</td>
        <td>1500000</td>
      </tr>
      <tr>
        <th scope="row">Online advertising</th>
        <td>6600000</td>
        <td>790000</td>
      </tr>
      <tr>
        <th scope="row">Advertising agency</th>
        <td>310000</td>
        <td>81000</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;
