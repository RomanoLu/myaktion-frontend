import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', margin: '0' }}>
          Masterarbeit Luca Romano © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
