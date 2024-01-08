const token = sessionStorage.getItem("jwtToken");
const logout = document.querySelector('.logout');
const logoutIcon = logout.querySelector("i.fa.fa-sign-out");

fetch("http://localhost:3030/api/auth/getuser", {
  method: "POST",
  headers: {
    "auth-token": token,
  },
})
  .then((res) => res.json())
  .then((userdata) => {
    let user = document.querySelector(".user");
    user.innerHTML = token ? `${userdata.name}` : "";
    if (token) {
      logoutIcon.style.display = "inline-block"; // Show the logout icon
    } else {
      logoutIcon.style.display = "none"; // Hide the logout icon
    }
  });

logout.addEventListener("click", () => {
  sessionStorage.clear();
  logoutIcon.style.display = "none"; // Hide the logout icon when logged out
});

        // Get all the image elements
        const images = document.querySelectorAll('.menu3 .swiper-slide img');

        // Add click event listener to each image
        images.forEach((image) => {
          image.addEventListener('click', () => {
            // Get the ID of the clicked image
            const id = image.id;
            
            // Redirect to different pages based on the ID
            switch (id) {
              case 'i1':
                window.location.href = 'psa.html';
                break;
              case 'i2':
                window.location.href = 'sgp.html';
                break;
              case 'i3':
                window.location.href = 'ps4.html';
                break;
              case 'i4':
                window.location.href = 'ps3.html';
                break;
              // Add more cases for additional IDs and corresponding page URLs
              default:
                break;
            }
          });
        });
        