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
        <p>Hey..um...I've been trying to find the words to tell you, but this just isn't working.</p>
        <p>It's not you, it's me. I promise.</p>
        <p>Actually, we just couldn't find the page you were looking for. Give us another chance, will you?</p>
        <Link to="/"> Go back to homepage </Link>
      </center>
    </div>
  );
};

export default NotFoundPage;
