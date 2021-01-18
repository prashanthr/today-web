import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Column = ({ data = {} }) => (
  Object
    .entries(data)
    .map(([key, value], idx) => (
      <td key={`${key}-${idx}`}>
        {value}
      </td>
    ))
)

const Row = ({ data }) => (
  <tr>
    <Column data={data} />
  </tr>
)

const RowHeader = ({ data }) => (
  <thead>
    <tr>
      {Object
        .keys(data)
        .map((key, idx) => (
          <th key={idx}>
            {key}
          </th>
      ))}
    </tr>
  </thead>
)

const RowBody = ({ rows }) => (
  <tbody>
    {rows.map((row, idx) => (
      <Row key={idx} data={row} />
    ))}
  </tbody>
)

const Table = ({ rows, showHeader }) => (
  <div className='today-web-table-wrap'>
    <table className='today-web-table'>
      {showHeader && <RowHeader data={rows[0] || []} />}
      <RowBody rows={rows} />
    </table>
  </div>
)

Table.propTypes = {
  rows: PropTypes.array,
  showHeader: PropTypes.bool
}

Table.defaultProps = {
  rows: [],
  showHeader: true
}

export default Table
