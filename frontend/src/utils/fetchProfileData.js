let fetchProfileData = async (token, login) => {
  try {
    let res = await fetch("http://localhost:4000/api/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    if (data.status) {
      login(data);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export default fetchProfileData;
