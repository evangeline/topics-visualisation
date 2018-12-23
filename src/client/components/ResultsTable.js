import React from 'react';

const fp = require('lodash/fp');

const TableHeader = () => {
  return (
    <tr className="border-bottom">
      <th scope="col">Audience Topic</th>
      <th scope="col">Audience Size</th>
      <th scope="col">Combined Size</th>
    </tr>
  );
}

const TableRow = ({topic2, topic2_size, combined_size}) => {
  return (
    <tr key={topic2}>
      <th scope="row">{topic2}</th>
      <td>{topic2_size}</td>
      <td>{combined_size}</td>
    </tr>
  )
}

const Table = ({results}) => {
  const rows = fp.map(TableRow)(results);
  return (
    <table className="table table-hover table-borderless m-0 bg-white shadow">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
