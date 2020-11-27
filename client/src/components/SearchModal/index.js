import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchModal = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon={faSearch} />
    </>
  )
}

export default SearchModal;
