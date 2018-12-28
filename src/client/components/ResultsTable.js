import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const TableHeader = () => (
  <tr className="border-bottom">
    <th scope="col">Audience Topic</th>
    <th scope="col">Audience Size</th>
    <th scope="col">Combined Size</th>
    <th scope="col">Product Interest</th>
  </tr>
);

const TableRow = ({ topic2, topic2_size, combined_size }) => {
  const topic2Size = parseInt(topic2_size, 10);
  const combinedSize = parseInt(combined_size, 10);
  const productInterest = Math.floor(combinedSize / topic2Size * 100);
  return (
    <tr key={topic2}>
      <th scope="row">{topic2}</th>
      <td>{topic2Size}</td>
      <td>{combinedSize}</td>
      <td>{`${productInterest}%`}</td>
    </tr>
  );
};

const Table = ({ results }) => {

  const columns = [{
    Header: 'Audience Topic',
    accessor: 'audienceTopic'
  }, {
    Header: 'Audience Size',
    accessor: 'audienceSize',
  }, {
    Header: 'Combined Size',
    accessor: 'combinedSize'
  }, {
    Header: 'Product Interest',
    accessor: 'productInterest'
  }];

  // {/*<table className="table table-hover table-borderless m-0 bg-white shadow">*/}
  // {/*<thead>*/}
  // {/*<TableHeader />*/}
  // {/*</thead>*/}
  // {/*<tbody>*/}
  // {/*{rows}*/}
  // {/*</tbody>*/}
  // {/*</table>*/}

  return (
    <ReactTable
      data={results}
      columns={columns}
      className="-striped -highlight"/>
  );
};

export default Table;
