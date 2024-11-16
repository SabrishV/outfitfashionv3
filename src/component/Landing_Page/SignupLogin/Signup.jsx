import React from 'react';

export default function SignupPage() {
  return (
    <div style={styles.container}>
      {/* Left side: Welcome image */}
      <div style={styles.imageContainer}>
        <img src="/checkout/signup.svg" alt="Welcome illustration" style={styles.image} />
      </div>

      {/* Right side: Signup form */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create your account</h1>
        <p style={styles.subtitle}>Enter your details to sign up</p>

        <form style={styles.form}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Enter your name" style={styles.input} />

          <label style={styles.label}>Email address</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />

          <label style={styles.label}>Password</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />

          <div style={styles.termsContainer}>
            <input type="checkbox" style={styles.checkbox} />
            <label style={styles.termsLabel}>I agree to the <a href="/terms" style={styles.link}>terms and conditions</a></label>
          </div>

          <button type="submit" style={styles.signupButton}>Sign Up</button>

          <div style={styles.divider}>
            <span>or</span>
          </div>

          <p style={styles.loginText}>
            Already have an account? <a href="/login" style={styles.loginLink}>Log In</a>
          </p>
        </form>
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
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    
    maxWidth: '800px',
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
  termsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkbox: {
    marginRight: '10px',
  },
  termsLabel: {
    fontSize: '0.9rem',
  },
  link: {
    color: '#6a6aef',
    textDecoration: 'none',
  },
  signupButton: {
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
  loginText: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
  },
  loginLink: {
    color: '#6a6aef',
    textDecoration: 'none',
  },
};

