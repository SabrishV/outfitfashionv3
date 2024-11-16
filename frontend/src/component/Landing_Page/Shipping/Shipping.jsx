import React from 'react';

export default function ShippingAddress() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SHIPPING ADDRESS</h1>
      <form style={styles.form}>
        <input type="text" placeholder="First Name" style={styles.input} />
        <input type="text" placeholder="Last Name" style={styles.input} />
        <input type="text" placeholder="Full Address" style={{ ...styles.input, ...styles.fullWidthInput }} />
        <div style={styles.row}>
          <input type="text" placeholder="City" style={styles.halfInput} />
          <input type="text" placeholder="Country" style={styles.halfInput} />
        </div>
        <input type="text" placeholder="Postal Code" style={styles.input} />
        <input type="text" placeholder="Contact Number" style={styles.input} />
        <button type="submit" style={styles.button}>Confirm Address</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#a483ea', // Purple color for title
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  fullWidthInput: {
    width: '100%',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#28104e', // Dark purple for button
    color: 'white',
    padding: '10px 20px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};
