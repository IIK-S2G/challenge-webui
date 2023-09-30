New frontend for S2G

The project has come to a temporary standstill due to lack of knowledge. It will be continued throughout the Autumn of 2023 as more knowledge is consumed.

What is left?
```
- Post requests for solving challenges, updating solves, fails etc.
- Post requests on profile for updating username, password etc.
- Connecting a Postmaster or similar mail service to reset password
- Login mechanisms, intended to go through the standard ctfd site
- Sound effects for scoreboard
- Ability to view other peoples profiles

- maybe it will be quicker to just make a backend?
```

Project Structure:
```
.
└── S2Gfrontend/
    ├── README.md - This file
    ├── design/
    │       └── visual sketches for the UI
    ├── documentation/
    │       └── todo docs for all of the frontend, deploying etc
    └── frontend/
            ├── .next/
            │     └── Next config files
            │
            ├── node_modules/
            │     └── Node and dependency files
            │
            ├── .public/
            │     └── Public files
            │
            ├── src/
            │     │──── app/
            │     │      │──── challenges/
            │     │      │       │──── text/
            │     │      │       │      │──── en.json
            │     │      │       │      └──── no.json
            │     │      │       └──── page.tsx
            │     │      │
            │     │      │──── login/..
            │     │      │
            │     │      │──── register/..
            │     │      │
            │     │      │──── reset_password/..
            │     │      │
            │     │      │──── resources/..
            │     │      │
            │     │      │──── scoreboard/..
            │     │      │
            │     │      │──── favicon.ico
            │     │      │──── layout.tsx
            │     │      │──── 403.js
            │     │      │──── page.tsx
            │     │      └──── globals.css
            │     │
            │     │──── styles
            │     │      └──── themes.tsx
            │     │
            │     │──── components
            │     │      └──── Line.tsx
            │     │
            │     └──── components/
            │     │      │──── Navbar.tsx
            │     │      │──── RightNav.tsx
            │     │      └──── LeftNav.tsx
            │     │
            │     └──── redux
            │            │──── reducers/
            │            │       │──── langSlice.tsx
            │            │       └──── themeSlice.tsx
            │            │
            │            │──── store.jsx
            │            └──── reducers
            │
            └── other config files
```