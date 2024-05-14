import React, { useState, useEffect } from "react";
import LogSearch from "./components/LogSearch";
import LogTable from "./components/LogTable";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({});

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const fetchLogs = async () => {
    // Construct the query parameters from searchQuery and filter
    const queryParams = new URLSearchParams({
      searchQuery,
      ...filter,
    });

    try {
      const response = await fetch(
        `http://your-api-url.com/logs?${queryParams.toString()}`
      );
      const data = await response.json();
      setLogs(data.logs || []); // Assuming the logs are returned under a 'logs' key
    } catch (error) {
      console.error("Failed to fetch logs:", error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [searchQuery, filter]); // Refetch logs when searchQuery or filter changes

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">
        Log Ingestor System
      </h1>
      <LogSearch onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <div className="mt-5">
        <LogTable logs={logs} />
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default App;
