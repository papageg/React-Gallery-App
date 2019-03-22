import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(results => (
    <li key={results.id}>
      {results.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions