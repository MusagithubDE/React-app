import React, { useState } from 'react';

const DataRecovery = () => {
  const [filePath, setFilePath] = useState('');

  const handleRecovery = () => {
    alert(`Recovering data from: ${filePath}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl">Data Recovery</h2>
      <input
        type="text"
        placeholder="Enter file path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleRecovery} className="bg-blue-500 text-white p-2">
        Recover Data
      </button>
    </div>
  );
};

export default DataRecovery;
