const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api"


export async function registerUser(registerUsername, registerPassword){
      console.log(registerUsername, registerPassword, "This is line 6 API INDEX")
      const response = await 
          fetch(`${BASE_URL}/users/register`,
          {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
                username: registerUsername,
                password: registerPassword
            })
          }
          )
          const result = await response.json();
          console.log( result, "This is line 22 API INDEX")

          
          return result
      } 

  export async function loginUser(Username, Password){
      console.log(Username, Password)
      const response = await 
          fetch(`${BASE_URL}/users/login`,
          {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
                username: Username,
                password: Password
            })
          }
          )
          const result = await response.json();
  
          return result.token}
   
  export async function getActivities() {
    const response = await
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  headers: {
    'Content-Type': 'application/json',
  },
})
const result = await response.json()
console.log(result, "line 53")
return result
  }
  // export async function getUserInfo(token){
  //   try { 
  //     const response = await fetch(`${BASE_URL}/users/me`, {
  
  //     headers: {
  //       'Content-Type': "application/JSON",
  //       'Authorization': `Bearer ${token}`
  //     }})
      
  //     const result = await response.json()
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  
  
//   export async function makeNewPost(title, description, price, location){
//     const token = localStorage.getItem("token")
//     const response = await fetch(`${BASE_URL}/posts`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         post: {
//           title: title,
//           description: description,
//           price: price,
//           location: location
//         }
//     })
//   })
//     console.log(response, "response from makeNewPost")
//     const result = await response.json()
//     return result
    
//   }
  
  
//   export async function editPost(
//     title,
//     description,
//     price,
//     location,
//     willDeliver,
//     POST_ID
//   ) {
//     const token = getToken();
  
//     try {
//       const response = await fetch(`${BASE_URL}/users/me`, 
//         {
//           post: {
//             title,
//             description,
//             price,
//             location,
//             willDeliver,
//           },
//         },
//         {
//           headers: {
//             "Content-Type": "application/JSON",
//             "Authorization": `Bearer ${token}`,
//           },
//         }
//       );
//       const result = await response.json();
//       const token = result.data.token;
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
  
  
//   export const deletePost = async (token, POST_ID) => {
//     try {
//       await fetch(`${BASE_URL}/posts/${POST_ID}`, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
     
//   export async function getAllPosts() {
//           try {
//               const response = await fetch(`${BASE_URL}/posts`)
//               const result = await response.json()
//               const posts = result.data.posts
//               console.log(posts)
//               return posts
//           }
//           catch (error) {
//               console.error(error);
  
//          }
//   }
  