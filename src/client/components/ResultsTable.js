import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';

const Table = ({ datasets }) => {

  const columns = [{
    Header: 'Audience Topic',
    accessor: 'audienceTopic',
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['audienceTopic'] }),
    filterAll: true,
    minWidth: 200
  }, {
    Header: 'Audience Size',
    accessor: 'audienceSize',
    filterable: false,
  }, {
    Header: 'Combined Size',
    accessor: 'combinedSize',
    filterable: false,
  }, {
    Header: 'Product Interest',
    accessor: 'productInterest',
    filterable: false,
  }];

  return (
    <ReactTable
      data={datasets}
      columns={columns}
      className="-striped -highlight bg-white my-3 border-0 shadow"
      filterable
      defaultSorted={[
        {
          id: 'productInterest',
          desc: true
        }
      ]}
      defaultPageSize={10}
      noDataText="No data found. Select a product topic above."/>
  );
};

export default Table;
