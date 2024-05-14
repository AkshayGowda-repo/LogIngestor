import React, { useState } from 'react';

const LogSearch = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    'metadata.parentResourceId': ''
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    onFilterChange(filter);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="searchQuery" className="font-medium">Search Query</label>
        <input type="text" name="searchQuery" id="searchQuery" placeholder="Enter search query" value={searchQuery} onChange={handleSearchChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="level" className="font-medium">Filter by Level</label>
        <input type="text" name="level" id="level" placeholder="Enter level" value={filter.level} onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-medium">Filter by Message</label>
        <input type="text" name="message" id="message" placeholder="Enter message" value={filter.message} onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <button type="submit" className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700">Search</button>
    </form>
  );
};

export default LogSearch;
