  // function next(){
  //   currentIndex = (currentIndex + 1) % images.length;
  //   moveDots(currentIndex+1);
  // }
  
  // function prev(){
  //   currentIndex = (currentIndex - 1 + images.length) % images.length;
  //   moveDots(currentIndex+1);
  // }
  
  function moveDots(index){
    let dots = document.getElementsByClassName("dot");
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    dots[index-1].className += " active";
  }
  
//   function showImage(index) {
//     var displayImgResto = document.getElementById("display-img-resto");
//     var displayTitleResto = document.getElementById("resto-title");
//     displayTitleResto.innerText = resto_titles[currentIndex];
//     displayImgResto.src = images[currentIndex];
//   }
  
//   function setDefault(index) {
//     // Access the set of users based on the provided index
//     let setOfUsers = users[index];
  
//     for (let i = 0; i < setOfUsers.length; i++) {
//       switch (i){
//         case 0: {
//             document.getElementById("first-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("first-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("first-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//         case 1 : {
//             document.getElementById("second-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("second-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("second-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//         case 2 : {
//             document.getElementById("third-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("third-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("third-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//       }
//     }
//   }
  
//   function switchFeedback(index){
//     let setOfUsers = users[index]; //index 0 {[1,2,3]}
//     //get user data 
  
//     for (let i = 0; i < setOfUsers.length; i++){ 
//       switch (i){
//         case 0: {
//           document.getElementById("first-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("first-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("first-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//         case 1 : {
//           document.getElementById("second-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("second-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("second-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//         case 2 : {
//           document.getElementById("third-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("third-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("third-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//       }
//     }
//   }
  
  // Function to set stars based on rating
  function setStars(num_review, rating) {
    let stars = document.getElementById(num_review).querySelectorAll(".fa-star");
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add("checked");
    }
  }
  
//   function removeStars() {
//     let stars1 = document.getElementById("first-review").querySelectorAll(".fa-star");
//     let stars2 = document.getElementById("second-review").querySelectorAll(".fa-star");
//     let stars3 = document.getElementById("third-review").querySelectorAll(".fa-star");
  
//     for (let i = 0; i < stars1.length; i++) {
//         stars1[i].classList.remove("checked");
//         stars2[i].classList.remove("checked");
//         stars3[i].classList.remove("checked");
//     }
//   }

  function showLogIn() {
    document.querySelector(".popup-login").style.display = "flex";
    document.querySelector(".options").style.display = "none";
  }
  
  function closeLogIn() {
    document.querySelector(".popup-login").style.display = "none";
  
    let username = document.getElementById("username");
    username.value = '';
  
    let password = document.getElementById("password");
    password.value = '';
  
    document.querySelector(".options").style.display = "block";
  }
  
  function showSignup() {
    document.querySelector(".popup-signup").style.display = "flex";
    document.querySelector(".options").style.display = "none";
  }
  
  function closeSignup() {
    document.querySelector(".popup-signup").style.display = "none";
  
    let username = document.getElementById("username-signup");
    username.value = '';
  
    let password = document.getElementById("password-signup");
    password.value = '';
  
    let v_password = document.getElementById("verify-password-signup");
    v_password.value = '';
  
    document.querySelector(".options").style.display = "block";
  }
  
  function verifyPassword(){
    let p1 = document.forms["signup"]["password-signup"].value;
    let p2 = document.forms["signup"]["verify-password-signup"].value;
  
    if (p1 == p2){
      closeSignup();
      return true;
    }
    else {
      alert("Password does not match");
      return false;
    }
  }
  
  function successfulLogin(){
    closeLogIn();
    return true;
  }
  
//   window.onload = function () {
//     setDefault(0); // Pass the index of the set you want to use as default
//   };

  function next(i){
    const size = 5;
    i = (i + 1) % size;
    return i;
  }

  function previous(i){
    const size = 5;
    i = (i - 1 + size) % size;
    return i;
  }

  $(document).ready(function(){
    let order = 0;  // Initialize i outside the click handler

    $('#next-button').click(function(){
      $.post(
          '/update-image',
          { input: next(order), sts: "next" },
          function(data, status){
              if(status === 'success'){
                $('#display-img-resto').attr('src', data.url);
                $('#resto-title').text(data.title); // Update restoName
  
                //---
  
                const commentData = data.commentData;
  
                console.log(commentData[0].username);

                // Handle the first review popup
                if (commentData && commentData.length > 0) {
                  $('#firstUsername').text(commentData[0].username);
                  $('#firstContent').text(commentData[0].content);
                  $('#first-review .right-review-popup-odd').empty();
                  commentData[0].ratingCount.forEach(function() {
                    $('#first-review .right-review-popup-odd').append('<span class="fa fa-star checked"></span>');
                  });
                  $('#first-review').show();
                } else {
                  $('#first-review').hide();
                }
  
                // Handle the second review popup
                if (commentData && commentData.length > 1) {
                  $('#secondUsername').text(commentData[1].username);
                  $('#secondContent').text(commentData[1].content);
                  $('#second-review .left-review-popup-even img').attr('src', 'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg');
                  $('#second-review .right-review-popup-even').empty();
                  commentData[1].ratingCount.forEach(function() {
                    $('#second-review .right-review-popup-even').append('<span class="fa fa-star checked"></span>');
                  });
                  $('#second-review').show();
                } else {
                  $('#second-review').hide();
                }
  
                // Handle the third review popup
                if (commentData && commentData.length > 2) {
                  $('#thirdUsername').text(commentData[2].username);
                  $('#thirdContent').text(commentData[2].content);
                  $('#third-review .right-review-popup-odd').empty();
                  commentData[2].ratingCount.forEach(function() {
                    $('#third-review .right-review-popup-odd').append('<span class="fa fa-star checked"></span>');
                  });
                  $('#third-review').show();
                } else {
                  $('#third-review').hide();
                }
  
                //---
                order = data.index;  // Update the order variable
                moveDots(order+1);
              }
          }
      );
    });
  
  
  

    $('#previous-button').click(function(){
        $.post(
            '/update-image',
            { input: previous(order), sts: "previous"},
            function(data, status){
                if(status === 'success'){
                  $('#display-img-resto').attr('src', data.url);
                  $('#resto-title').text(data.title); // Update restoName
                  order = data.index;  // Update the order variable
                  moveDots(order+1);
                }
            }
        );
    });
  });




  // function next(){
  //   $.post(
  //     /* Link sent to the server */
  //     'update',
  //     /* Input sent to the server */
  //     { input: ++order },
  //     /* Call-back function that processes the server response */
  //     function(data, status){
  //         if(status === 'success'){
  //             let textContent = "{{restoData[" + data.index + "].restoPic}}";
  //             $('#display-img-resto').attr('src', textContent);  
  //         }//if
  //     }//function
  //   );//post
  // }

  // function previous(){
  //   $.post(
  //     /* Link sent to the server */
  //     'update',
  //     /* Input sent to the server */
  //     { input: --order },
  //     /* Call-back function that processes the server response */
  //     function(data, status){
  //         if(status === 'success'){
  //             let textContent = "{{restoData[" + data.index + "].restoPic}}";
  //             $('#display-img-resto').attr('src', textContent);  
  //         }//if
  //     }//function
  //   );//post
  // }