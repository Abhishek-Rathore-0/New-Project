import axios from "axios";


export const login = async (email, password, route) => {
    try {
      const res = await axios({
        method: 'POST',
        url: process.env.API_PATH+'api/'+route+'/login',
        data: {
          email,
          password
        }
      });
  
      if (res.data.status === 'success') {
        alert("Login successful");
        window.setTimeout(() => {
          if(route=="agents")
            location.assign('/agent');
          else
            location.assign('/');
        }, 1500);
      }
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.message);
    }
  };

  export const logout = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: process.env.API_PATH+'api/users/logout'
      });
      if ((res.data.status = 'success')) {
        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
    } catch (err) {
      console.log(err.response);
      alert('error');
    }
  };
  
export const signup = async (name, email, password, route) => {
  try {
    const res = await axios({
      method: 'POST',
      url: process.env.API_PATH+'api/'+route+'/signup',
      data: {
        name,
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      alert('Craeted successful.');
      window.setTimeout(() => {
        location.assign('/');
      }, 150);
    }
  } catch (err) {
    alert('error'+err.response.data.message);
  }
}; 

export const signup1 = async(data, route) =>{
  try {
       
    const res = await axios({
      method: 'POST',
      url: process.env.API_PATH+'api/'+route+'/signup',
      data
    });
    
    if (res.data.status === 'success') {
      alert('Craeted successful.');
      window.setTimeout(() => {
        location.assign('/agent');
      }, 150);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
}

export const updatea = async(data) =>{
  try {
       
    const res = await axios({
      method: 'PATCH',
      url: process.env.API_PATH+'api/agents/update',
      data
    });
    
    if (res.data.status === 'success') {
      alert('Changed successful.');
      window.setTimeout(() => {
        location.assign('/agent');
      }, 150);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
}