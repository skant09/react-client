import React from 'react';

const LeftSection = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        alt="webicon"
        width="65"
        height="auto"
        style={{ width: '60px' }}
        src="https://s3-ap-southeast-1.amazonaws.com/syookassets/rootassets/webicon+transparent.png"
      />

      <span
        style={{
          marginLeft: '10px',
          fontSize: '60px',
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

    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <span style={{ color: '#e8525e', fontSize: '22px' }}>
        Operations Visualized
      </span>
    </div>

    <div
      className="horizontalLine"
      style={{
        border: 'solid 1px #72add4',
        width: '155px',
        margin: '35px 0px'
      }}
    />

    <div
      style={{
        textAlign: 'center',
        color: '#26547c',
        fontSize: '18px'
      }}>
      <span>Do the maximum out of your location data by visualizing it.</span>
    </div>

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: '18px',
        marginTop: '30px'
      }}>
      <span style={{ color: '#26547c' }}>
        Got feedback for us? Write to{' '}
        <span style={{ color: '#72add4' }}>info@syook.com</span>
      </span>
    </div>
  </div>
);

export default LeftSection;
