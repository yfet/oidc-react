import React from "react";

import { useAuth } from "react-oidc-context";

const extraParams = {
  scope: "openid phone profile email",
  resource: process.env.REACT_APP_RESOURCE,
};


function App() {
    const auth = useAuth();

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <div>
                <pre>{JSON.stringify(auth.user, null, 2)}</pre>
                <button onClick={() => void auth.removeUser()}>
                    Log out
                </button>
            </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect(extraParams)}>Log in</button>;
}

export default App;