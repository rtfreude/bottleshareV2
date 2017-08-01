import React from 'react';

const LoginModal = () => (

    <div data-target="modal1" className="modal">
      <div className="modal-content">
        <li><a href="/auth/google">Google Login</a></li>
        <li><a href="/auth/facebook">Facebook Login</a></li>
        <li><a href="/auth/linkedin">Linkedin Login</a></li>
      </div>
    </div>

);

export default LoginModal


