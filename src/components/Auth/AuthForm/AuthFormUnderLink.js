import React from "react";
import { Link } from "react-router-dom";

export default function AuthFormUnderLink({ message, route, link }) {
  return (
    <div className="w-100 text-center mt-2">
      {message} <Link to={route}>{link}</Link>
    </div>
  );
}
