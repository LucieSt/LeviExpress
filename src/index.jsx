import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import { Home } from './components/Home';
import { Reservation } from './components/Reservation';
import './style.css';

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
      },
			{
				path: "/reservation",
				element: <Reservation />,
      },
		],
	},
])

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />);
