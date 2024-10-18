import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...');
  const [healthData, setHealthData] = useState('');
  const [response, setResponse] = useState('');

  // Получение статуса API
  useEffect(() => {
    fetch('/api/health/status')
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(() => setStatus('Error fetching status'));
  }, []);

  // Отправка данных о состоянии здоровья
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/health/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: healthData }),
    })
      .then(res => res.text())
      .then(data => setResponse(data))
      .catch(() => setResponse('Error submitting data'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Health Monitoring App</h1>
      <h2>API Status: {status}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter health data"
          value={healthData}
          onChange={(e) => setHealthData(e.target.value)}
          required
        />
        <button type="submit">Submit Health Data</button>
      </form>

      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default App;
