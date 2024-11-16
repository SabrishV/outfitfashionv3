import React from 'react';

export default function LoginPage() {
  return (
    <div style={styles.container}>
      {/* Left side: Login form */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Welcome back!</h1>
        <p style={styles.subtitle}>Enter your Credentials to access your account</p>

        <form style={styles.form}>
          <label style={styles.label}>Email address</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input type="password" placeholder="Enter your password" style={styles.input} />
            <a href="/forgot-password" style={styles.forgotPassword}>Forgot password?</a>
          </div>

          <div style={styles.rememberContainer}>
            <input type="checkbox" style={styles.checkbox} />
            <label style={styles.rememberLabel}>Remember for 30 days</label>
          </div>

          <button type="submit" style={styles.loginButton}>Login</button>

          <div style={styles.divider}>
            <span>or</span>
          </div>

          <p style={styles.signupText}>
            Don’t have an account? <a href="/signup" style={styles.signupLink}>Sign Up</a>
          </p>
        </form>
      </div>

      {/* Right side: Welcome image */}
      <div style={styles.imageContainer}>
        <img src="/checkout/login.svg" alt="Welcome illustration" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 15%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '30px',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.9rem',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '20px',
  },
  passwordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: '0.8rem',
    color: '#6a6aef',
    textDecoration: 'none',
  },
  rememberContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkbox: {
    marginRight: '10px',
  },
  rememberLabel: {
    fontSize: '0.9rem',
  },
  loginButton: {
    padding: '12px 20px',
    backgroundColor: '#a280f2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '20px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    color: '#aaa',
    marginBottom: '20px',
  },
  signupText: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
  },
  signupLink: {
    color: '#6a6aef',
    textDecoration: 'none',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    maxWidth: '850px',
  },
};
