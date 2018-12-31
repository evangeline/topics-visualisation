import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Table = ({ datasets }) => {

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

  return (
    <ReactTable
      data={datasets}
      columns={columns}
      className="-striped -highlight bg-white my-3 border-0 shadow"
      defaultSorted={[
        {
          id: 'productInterest',
          desc: true
        }
      ]}
      defaultPageSize={10}/>
  );
};

export default Table;
