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

export async function createActivities(token, activityName, activityDescription) {
  const response = await fetch(`${BASE_URL}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: activityName,
      description: activityDescription,
    }),
  });
  const result = await response.json();
  return result;
}

export async function createRoutine(token, routineName, routineGoal) {
  const response = await fetch(`${BASE_URL}/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: routineName,
      goal: routineGoal,
      isPublic: true
    }),
  });
  const result = await response.json();
  return result;
}

export async function updateActivity(token, activityName, activityDescription, id) {
  const response = await fetch(`${BASE_URL}/activities/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: activityName,
      description: activityDescription
    })
  })
  const result = await response.json()
  return result
}

export async function updateRoutine(token, routineName, routineGoal, id) {
  const response = await fetch(`${BASE_URL}/routines/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: routineName,
      goal: routineGoal
    })
  })
  const result = await response.json()
  return result
}

export async function deleteRoutine(token, id) {
  const response = await fetch(`${BASE_URL}/routines/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const result = await response.json()
    return result
}

export async function attachActivityToRoutine(activityId, count, duration, routineId) {
  const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      activityId: activityId,
      count: count, 
      duration: duration
    })
  })
  const result = await response.json()
  return result
}

export async function updateRoutineActivities(token, id, count, duration) {
  const response = await fetch(`${BASE_URL}/api/routine_activities/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      count: count,
      duration: duration
    })
  })
  const result = await response.json()
  return result
}

export async function getUser(token){
  try { 
    const response = await fetch(`${BASE_URL}/users/me`, {

    headers: {
      'Content-Type': "application/JSON",
      'Authorization': `Bearer ${token}`
    }})
    
    const result = await response.json()
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getUserRoutines(token, username){
  try { 
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {

    headers: {
      'Content-Type': "application/JSON",
      'Authorization': `Bearer ${token}`
    }})
    
    const result = await response.json()
    console.log(result, "API RESULTS GET USER")
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getRoutinesWithActivities(token, id) {
  const response = await fetch(`${BASE_URL}/activities/${id}/routines`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
  return result
}