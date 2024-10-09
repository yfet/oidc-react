 ### Launch following commands to get started

```
git clone https://github.com/yfet/oidc-react.git
cd oidc-react
npm install
cp .env .env.local
```

Change environment variables values in **.env.local**

Set PORT to match redirect url port (for e.g. 1337)

**Linux/MacOS**

`export PORT=1337`

**Windows**

`set PORT=1337`

**Launch application**

`npm start`

Open [http://localhost:1337](http://localhost:1337) to view it in your browser.

Click **Login** button to initiate authentication

Athentication details (token + user's info) will be printed into the page when authentication successfull.

Click **Logout** button to logout
