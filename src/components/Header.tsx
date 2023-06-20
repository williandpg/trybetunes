import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

function Header() {
  const [user, setUser] = useState<string>('');
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      setUser(response.name);
      setLoad(false);
    };
    fetchUser();
  }, []);

  if (load) return <p>Carregando...</p>;

  return (
    <header data-testid="header-component">
      <nav>
        <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
        <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
        <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      </nav>
      <h2 data-testid="header-user-name">{user}</h2>
    </header>
  );
}

export default Header;
