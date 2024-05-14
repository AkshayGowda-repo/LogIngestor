import React from "react";

const LogTable = ({ logs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Level
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Message
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Resource ID
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Timestamp
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Trace ID
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Span ID
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Commit
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">
              Parent Resource ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{log.level}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.message}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.resourceId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.traceId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.spanId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.commit}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {log.metadata.parentResourceId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
