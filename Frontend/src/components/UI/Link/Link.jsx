import React from 'react';
import { NavLink } from "react-router-dom";

interface LinkProps {
  classes: string;
  target: string;
  offset?: number;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <NavLink
      className={props.classes}
      style={{ cursor: 'pointer' }}
      to={props.target}>
      {props.children}
    </NavLink>
  );
};

export default Link;
