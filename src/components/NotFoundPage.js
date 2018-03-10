import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <center>
        <h1>
          404 Page Not Found
        </h1>
        <br />
        <p>Hey..um...I&apos;ve been trying to find the words to tell you, but this just isn&apos;t working.</p>
        <p>It&apos;s not you, it&apos;s me. I promise.</p>
        <p>Actually, we just couldn&apos;t find the page you were looking for. Give us another chance, will you?</p>
        <Link to="/"> Go back to homepage </Link>
      </center>
    </div>
  );
};

export default NotFoundPage;
