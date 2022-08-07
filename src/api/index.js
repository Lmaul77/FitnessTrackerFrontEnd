const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function registerUser(registerUsername, registerPassword) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function loginUser(Username, Password) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function getActivities() {
  try {
  const response = await fetch(`${BASE_URL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
} catch (error) {
  next (error)
}
}

export async function getRoutines() {
  try {
  const response = await fetch(`${BASE_URL}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
} catch (error) {
  next (error)
}
}

export async function createActivities(token, activityName, activityDescription) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function createRoutine(token, routineName, routineGoal) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function updateActivity(token, activityName, activityDescription, id) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function updateRoutine(token, routineName, routineGoal, id) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function deleteRoutine(token, id) {
  try {
  const response = await fetch(`${BASE_URL}/routines/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const result = await response.json()
    return result
} catch (error) {
  next (error)
}
}



export async function attachActivityToRoutine(activityId, count, duration, routineId) {
  try {
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
} catch (error) {
  next (error)
}
}

export async function updateRoutineActivities(token, id, count, duration) {
  try {
  const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
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
} catch (error) {
  next (error)
}
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
    next (error);
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
    return result;
  } catch (error) {
    next (error);
  }
}

export async function getRoutinesWithActivities(token, id) {
  try {
  const response = await fetch(`${BASE_URL}/activities/${id}/routines`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  const result = await response.json()
  return result
} catch (error) {
  next (error)
}
}


export async function deleteActivityFromRoutine(token, id) {
  try {
  const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await response.json()
  return result
} catch (error) {
  next (error)
}
}
