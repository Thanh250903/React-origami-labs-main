import React from 'react';

const Link = ({ href, children }) => {
  return (
    <li className="Link_listItem__139zd">
      <a href={href}>{children}</a>
    </li>
  );
};

const Navigation = () => {
  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  return (
    <nav className="Navigation_Navigation__2CDGq" style={navStyle}>
      <ul>
        {Array.from({ length: 5 }, (_, i) => (
          <Link href={`#section${i + 1}`} key={i}>
            Going to {i + 1}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
