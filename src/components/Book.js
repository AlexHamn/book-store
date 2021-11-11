import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, category, author, progress, currentChapter,
  } = props;

  return (
    <article className="book">
      <div className="bookLeft">
        <div className="bookData">
          <h3>{title}</h3>
          <p className="author">{author}</p>
          <p className="category">{category}</p>
        </div>
        <div className="bookActions">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="bookCenter">
        <p>
          {progress}
          %
        </p>
        <p>completed</p>
      </div>
      <div className="bookRight">
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
};

export default Book;