import React from 'react';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';

const Table = ({ datasets }) => {

  const columns = [{
    Header: 'Audience Topic',
    accessor: 'audienceTopic',
    Filter: ({filter, onChange}) => (
      <input
        type="text"
        placeholder="Filter Topic..."
        value={filter ? filter.value : ''}
        onChange={e => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    ),
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['audienceTopic'] }),
    filterAll: true,
    minWidth: 150
  }, {
    Header: 'Audience Size (\'000s)',
    accessor: 'audienceSize',
    filterable: false,
  }, {
    Header: 'Combined Size (\'000s)',
    accessor: 'combinedSize',
    filterable: false,
  }, {
    Header: 'Product Interest (%)',
    accessor: 'productInterest',
    filterable: false,
  }];

  return (
    <ReactTable
      data={datasets}
      columns={columns}
      className="-striped -highlight bg-white border-0 shadow"
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
