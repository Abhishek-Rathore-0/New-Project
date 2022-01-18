import axios from "axios";


export const login = async (email, password, route) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/'+route+'/login',
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
      alert(err.response.data.message);
    }
  };

  export const logout = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/users/logout'
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
      url: 'http://localhost:3000/api/'+route+'/signup',
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
    alert('error');
  }
}; 

export const signup1 = async(data, route) =>{
  try {
       
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/'+route+'/signup',
      data
    });
    
    if (res.data.status === 'success') {
      alert('Craeted successful.');
      window.setTimeout(() => {
        location.assign('/agent');
      }, 150);
    }
  } catch (err) {
    alert('error'+err);
  }
}

export const updatea = async(data) =>{
  try {
       
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:3000/api/agents/update',
      data
    });
    
    if (res.data.status === 'success') {
      alert('Changed successful.');
      window.setTimeout(() => {
        location.assign('/agent');
      }, 150);
    }
  } catch (err) {
    alert('error'+err);
  }
}