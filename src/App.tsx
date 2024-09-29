import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from './components/error-page';
import { Root } from './components/root';
import { Community } from './routes/community';
import { NewProject } from './routes/newProject';
import { Project } from './routes/project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <NewProject />,
      },
      {
        path: 'comunidade',
        element: <Community />,
      },
      {
        path: 'projeto/:projectId',
        element: <Project />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
