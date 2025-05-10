import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Movie Explorer. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  },
};

export default Footer;
