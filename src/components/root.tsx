import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Menu } from './menu';

export function Root() {
  return (
    <div className="w-full h-full space-y-10">
      <Header />

      <div className="h-full flex flex-col items-start lg:flex-row">
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}
