export const checkUser = async (user) => {
  
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const loggedIn = await response.json();
    return loggedIn;
  };

  export const registerUser = async (user) => {
    
    const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const register = await response.json();
    return register;
  };