import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
    const ids=2
    const id=ids+1
    onFilter({ id:id , title: event.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
    onFilter({ title: titleFilter, rating: event.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;
