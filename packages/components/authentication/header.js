import React from 'react';

const Header = props => (
  <div
    style={{
      width: '100%',
      height: '55px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '45px',
      boxShadow: '0 1px 2px 0px rgba(0, 0, 0, 0.16)'
    }}>
    <div
      style={{
        alignSelf: 'auto',
        justifyContent: 'center',
        width: '280px',
        padding: '0px'
      }}
      name="home"
      onClick={() => props.history.push('/')}>
      <img
        alt="syook-logo"
        width="30"
        height="auto"
        style={{ width: '30px' }}
        src="https://s3-ap-southeast-1.amazonaws.com/syookassets/rootassets/webicon+transparent.png"
      />

      <span
        style={{
          marginLeft: '8px',
          fontSize: '17px',
          textAlign: 'left',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontStretch: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          color: '#26547c'
        }}>
        Syook Track
      </span>
    </div>
  </div>
);

export default Header;
