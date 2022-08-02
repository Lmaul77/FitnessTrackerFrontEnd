const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser(registerUsername, registerPassword) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: registerUsername,
      password: registerPassword,
    }),
  });
  const result = await response.json();
  return result;
}

export async function loginUser(Username, Password) {
  console.log(Username, Password);
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: Username,
      password: Password,
    }),
  });
  const result = await response.json();
  return result.token;
}

export async function getActivities() {
  const response = await fetch(`${BASE_URL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result, "line 53");
  return result;
}

export async function getRoutines() {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
