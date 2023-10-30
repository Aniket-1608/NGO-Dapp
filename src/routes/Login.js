const Login = () => {
    return (
        <>
  <title>Login Form</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Add your CSS styles here to customize the appearance of the form */\n    "
    }}
  />
  <div>
    <h1>Login</h1>
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        required=""
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required=""
      />
      <br />
      <br />
      <a href="#">Forgot Password?</a>
      <br />
      <br />
      <a href="#">Sign Up</a>
      <br />
      <br />
      <p>
        Don't have an account? <a href="#">Sign up here</a>
      </p>
      <br />
      <button type="submit">Login</button>
      <button type="button">Back</button>
      <br />
      <br />
      <div>
        <p>Or sign in with:</p>
        <button type="button">Sign up with Google</button>
        <button type="button">Sign up with Facebook</button>
      </div>
    </form>
  </div>
</>

    );
};
export default Login;