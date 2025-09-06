import React from 'react';
import { MsalProvider, useMsal, useIsAuthenticated } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: 'your-frontend-app-client-id',
    authority: 'https://login.microsoftonline.com/your-tenant-id',
    redirectUri: 'http://localhost:3000',
  },
};

const pca = new PublicClientApplication(msalConfig);

function SecureApi() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [message, setMessage] = React.useState('');

  const callApi = async () => {
    if (!isAuthenticated) return;
    const token = await instance.acquireTokenSilent({
      scopes: ['api://your-backend-app-client-id/.default'],
      account: accounts[0],
    });
    const res = await fetch('http://localhost:5000/api/secure', {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={callApi} disabled={!isAuthenticated}>Call Secure API</button>
      <div>{message}</div>
    </div>
  );
}

function App() {
  return (
    <MsalProvider instance={pca}>
      <h1>App Security Demo (Frontend)</h1>
      <SecureApi />
    </MsalProvider>
  );
}

export default App;
