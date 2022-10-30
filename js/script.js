/*Показ дополнительных картинок*/
let more = document.querySelectorAll(".news__deeper");
let box = document.querySelectorAll(".news__img");

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    let showPerClick = 3;
    let hidden = this.parentNode.querySelectorAll("img.hidden");
    if (hidden.length > 0) {
      for (let i = 0; i < showPerClick; i++) {
        if (!hidden[i]) return (this.outerHTML = "");
        hidden[i].classList.add("news__img");
        hidden[i].classList.remove("hidden");
      }
    }
  });
}

/*Попап с благодарностью за подписку
let subscribeButton = document.querySelector('.enter-profile-button');
let popupThanks = document.querySelector('.popup-thanks');
let nameField = document.querySelector('.name-field');
let enterField = document.querySelector('.enter-field');
let fieldArea = document.querySelector('.enter-field-area');

subscribeButton.addEventListener('click', function(){
  if(nameField.value !== '' && enterField.value !== '' && fieldArea.value !== '' ) {
    popupThanks.classList.add('show');
  }
});*/

/*Валидация и AJAX для основной формы*/
$(document).ready(function () {
  $('button[type="submit"]').click(function () {
    /*Валидация полей формы*/
    $.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[а-яА-ЯёЁa-zA-Z\-\ ]+$/.test(value);
      },
      "Цифры в имени не допустимы"
    );

    $("#mainform").validate({
      //Правила валидации
      rules: {
        name: {
          required: true,
          lettersonly: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        text: {
          required: false,
        },
        typeofwork: {
          required: true,
        },
        typeofproduct: {
          required: true,
        },
      },
      //Сообщения об ошибках
      messages: {
        name: {
          required: "Заполните поле",
        },
        email: {
          required: "Заполните поле",
          email: "Неверный формат Email",
        },
        text: {
          required: "Заполните поле",
        },
        phone: {
          required: "Заполните поле",
        },
        typeofproduct: {
          required: "Заполните поле",
        },
        typeofwork: {
          required: "Заполните поле",
        },
      },

      //Место вывода сообщения об ошибке
      errorElement: "span",
      errorClass: "invalid",
      validClass: "valid",
      errorPlacement: function (error, element) {
        element.before(error);
      },
      highlight: function (element, errorClass) {
        $(element).removeClass(errorClass);
        $(element).addClass("fieldinvalid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass);
        $(element).removeClass("fieldinvalid");
        $(element).addClass(validClass);
      },
      /*Отправка формы в случае успеха валидации*/
      submitHandler: function () {
        sendAjaxForm("mainform", "ajax-form.php");
        return false;
      },
    });
  });

  function sendAjaxForm(mainform, url) {
    $.ajax({
      url: url, //Указано для примера
      type: "POST",
      dataType: "html",
      data: $("#" + mainform).serialize(),
      success: function (response) {
        //Данные отправлены успешно
        let alertSuccess = document.querySelector(".alert__success");
        let popupThanks = document.querySelector(".popup-thanks");
        alertSuccess.classList.add("add_alert_shift");
        popupThanks.classList.add("add_alert_popup");
      },
      error: function (response) {
        // Данные не отправлены
        let alertError = document.querySelector(".alert__error");
        alertError.classList.add("add_alert_shift");
      },
    });
  }
});

/*Скроллы для меню*/
let upperMenuCheck = document.querySelector(".upper-menu");
let middleMenuCheck = document.querySelector(".portfolio-title");

$(".home-item-click").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});
$(".port-item-click").click(function () {
  $("html, body").animate(
    {
      scrollTop:
        $($(this).attr("href")).offset().top -
        (middleMenuCheck.offsetHeight + 10),
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});
$(".how-to-work-click").click(function () {
  $("html, body").animate(
    {
      scrollTop:
        $($(this).attr("href")).offset().top -
        middleMenuCheck.offsetHeight / 2.5,
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});
$(".price-click").click(function () {
  $("html, body").animate(
    {
      scrollTop:
        $($(this).attr("href")).offset().top -
        (middleMenuCheck.offsetHeight + 10),
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});
$(".order-click").click(function () {
  $("html, body").animate(
    {
      scrollTop:
        $($(this).attr("href")).offset().top -
        (middleMenuCheck.offsetHeight + 10),
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});
$(".coworkers-click").click(function () {
  $("html, body").animate(
    {
      scrollTop:
        $($(this).attr("href")).offset().top -
        (middleMenuCheck.offsetHeight + 10),
    },
    1000,
    "easeInOutCubic"
  );
  return false;
});

/*
  if(window.innerWidth >= 660 && window.innerWidth < 960){
    $('.port-item-click').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 80
      }, 1000, 'easeInOutCubic');
      return false;
    });
    $('.how-to-work-click').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 34
        }, 1000, 'easeInOutCubic');
        return false;
    });
    $('.price-click').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 80
        }, 1000, 'easeInOutCubic');
        return false;
    });
    $('.order-click').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 78
        }, 1000, 'easeInOutCubic');
        return false;
    });
  };
*/

/*Swiper*/
popup = {
  init: function () {
    $("figure").click(function () {
      popup.open($(this));
      let captions = document.querySelectorAll(".education-wrap__list-item");
      for (let i = 0; i <= captions.length - 1; i++) {
        captions[i].classList.add("hide-caption");
      }
    });

    $(document)
      .on("click", ".popup img", function () {
        return false;
      })
      .on("click", ".popup", function () {
        popup.close();
      });
  },
  open: function ($figure) {
    $(".gallery").addClass("pop");
    $popup = $('<div class="popup" />').appendTo($("body"));
    $fig = $figure.clone().appendTo($(".popup"));
    $bg = $('<div class="bg" />').appendTo($(".popup"));
    $close = $('<div class="close"></div>').appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $("img", $fig).attr("src");
    $shadow.css({ backgroundImage: "url(" + src + ")" });
    $bg.css({ backgroundImage: "url(" + src + ")" });
    setTimeout(function () {
      $(".popup").addClass("pop");
    }, 10);
  },
  close: function () {
    $(".gallery, .popup").removeClass("pop");
    setTimeout(function () {
      $(".popup").remove();
    }, 100);
  },
};

popup.init();

/*Новый бургер*/
let mainButton = document.getElementById("main-btn");
let barOne = document.querySelector(".bar1");
let barTwo = document.querySelector(".bar2");
let barThree = document.querySelector(".bar3");
let menuBox = document.querySelector(".menu__box");
let menuItem = document.querySelectorAll(".menu__item");

mainButton.addEventListener("click", changeCond);

for (let i = 0; i <= menuItem.length - 1; i++) {
  menuItem[i].addEventListener("click", changeCond);
}

function changeCond() {
  mainButton.classList.toggle("change");
  barOne.classList.toggle("change1");
  barTwo.classList.toggle("change2");
  barThree.classList.toggle("change3");
  menuBox.classList.toggle("show-box");
}

/*Privacy-popup*/
let showPrivacy = document.querySelector(".privacy-button");
let showPrivacyUpper = document.querySelector(".doc-conf");
let closePrivacy = document.querySelector(".privacy-close");
let popupPrivacy = document.querySelector(".popup-privacy");

showPrivacy.addEventListener("click", function () {
  popupPrivacy.classList.remove("closed-privacy");
  popupPrivacy.classList.add("opened-privacy");
});
if (showPrivacyUpper) {
  showPrivacyUpper.addEventListener("click", function () {
    popupPrivacy.classList.remove("closed-privacy");
    popupPrivacy.classList.add("opened-privacy");
  });
}
closePrivacy.addEventListener("click", function () {
  popupPrivacy.classList.remove("opened-privacy");
  popupPrivacy.classList.add("closed-privacy");
});

/*Contract-popup*/
let showContractUpper = document.querySelector(".doc-contract");
let showContract = document.querySelector(".contract-button");
let closeContract = document.querySelector(".contract-close");
let popupContract = document.querySelector(".popup-contract");

showContract.addEventListener("click", function () {
  popupContract.classList.remove("closed-privacy");
  popupContract.classList.add("opened-privacy");
});
if (showContractUpper) {
  showContractUpper.addEventListener("click", function () {
    popupContract.classList.remove("closed-privacy");
    popupContract.classList.add("opened-privacy");
  });
}
closeContract.addEventListener("click", function () {
  popupContract.classList.remove("opened-privacy");
  popupContract.classList.add("closed-privacy");
});

/*Phone mask*/

$(document).ready(function () {
  $("#user_phone")
    .click(function () {
      $(this).setCursorPosition(3);
    })
    .mask("+7(999)999-99-99", { autoclear: false });
});

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};

function myFunction(x) {
  if (x.matches) {
    // Если медиа запрос совпадает
    $(document).ready(function () {
      let lastScrollTop = 0;
      $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
          upperMenuCheck.style.transform = "translateY(-30px)";
        }
        if (st < 100) {
          upperMenuCheck.style.transform = "translateY(0px)";
        }
        lastScrollTop = st;
      });
    });
  } else {
    $(document).ready(function () {
      let lastScrollTop = 0;
      $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
          upperMenuCheck.style.transform = "translateY(0px)";
        }
        if (st < 100) {
          upperMenuCheck.style.transform = "translateY(0px)";
        }
        lastScrollTop = st;
      });
    });
  }
}

let x = window.matchMedia("(min-width: 960px)");
myFunction(x); // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction); // Присоединить функцию прослушивателя при изменении состояния

/* Выделение активного пункта меню */

let pageId = document
    .querySelector("[data-id-page]")
    .getAttribute("data-id-page"),
  navItem = document.querySelector(`[data-id-nav=${pageId}]`);

if (pageId == navItem.getAttribute("data-id-nav")) {
  navItem.classList.add("active");
}

/*Search video*/

let filter = function () {
  let search = document.getElementById("search");
  if (search) {
    search.addEventListener("keyup", function () {
      let filter = search.value.toLowerCase(),
        filterItems = document.querySelectorAll(".blog-items-inner-wrapper");
      filterItems.forEach((item) => {
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
};
filter();

/*Search articles*/

let filterArticles = function () {
  let search = document.getElementById("search-articles");
  if (search) {
    search.addEventListener("keyup", function () {
      let filter = search.value.toLowerCase(),
        filterItems = document.querySelectorAll(".article-wrapper");
      filterItems.forEach((item) => {
        let itemTitle = item.querySelector(".article-title");
        if (itemTitle.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
};
filterArticles();

/*Search notifocations*/

let filterNotifications = function () {
  let search = document.getElementById("search-notification");
  if (search) {
    search.addEventListener("keyup", function () {
      let filter = search.value.toLowerCase(),
        filterItems = document.querySelectorAll(".notification-wrapper");
      filterItems.forEach((item) => {
        let itemTitle = item.querySelector(".notification-title");
        if (itemTitle.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
};
filterNotifications();

/*Загрузка видео с ютуб-канала
let nextPageToken ="";
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCtljxRy92SbRHNs7DqCZVHQ&maxResults=10&order=date&key=AIzaSyDpSry6y6Y-pk7EQJSSRY0OdTnsGJ3UmO0&pageToken=' + nextPageToken)
  .then((result) => {
    return result.json()
  }).then((data) =>{
    let videos = data.items;
    nextPageToken = data.nextPageToken;
    let videoContainer = document.querySelector('.blog-items');
    for(video of videos) {
      videoContainer.innerHTML += `
        <div class="blog-items__blog-link">
          <h2 class="blog-link__title">${video.snippet.title}</h2>
          <div class="blog-link__inner-wrapper">
            <img src="${video.snippet.thumbnails.high.url}" class="blog-link__image">
            <button class="blog-link__play">
            <svg class="play-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 490.718 490.718" style="enable-background:new 0 0 490.718 490.718;" xml:space="preserve">
            <g>
              <path d="M245.359,0.359C109.852,0.359,0,110.049,0,245.358s109.852,245,245.359,245s245.359-109.691,245.359-245
                S380.866,0.359,245.359,0.359z M176.828,341.011V140.824l187.489,100.098L176.828,341.011z"/>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
            </button>
          </div>
          <div class="video">
            <iframe class="yt-frame" width="560" height="315"></iframe>
          </div>
        </div>
      `
      let playButton = document.querySelectorAll('.blog-items__blog-link');
      
      for(let i = 0; i < playButton.length; i++) {
        let insideImage = playButton[i].querySelector('.blog-link__image');
        let insideButton = playButton[i].querySelector('.blog-link__play');
        let ytFrame = playButton[i].querySelector('.video');
        let innerYtFrame = playButton[i].querySelector('.yt-frame');
        let query = '?rel=0&showinfo=0&autoplay=1';
        playButton[i].addEventListener('click', function() {
          insideImage.remove();
          insideButton.remove();
          ytFrame.classList.add('show-frame');
          innerYtFrame.setAttribute('src', 'https://www.youtube.com/embed/' + video.id.videoId + query);
          innerYtFrame.setAttribute('allowfullscreen', '');
          innerYtFrame.setAttribute('allow', 'autoplay');
        })
      }
    }
  })

function getVideos() {
  fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCtljxRy92SbRHNs7DqCZVHQ&maxResults=10&order=date&key=AIzaSyDpSry6y6Y-pk7EQJSSRY0OdTnsGJ3UmO0&pageToken=' + nextPageToken)
  .then((result) => {
    return result.json()
  }).then((data) =>{
    let videos = data.items;
    nextPageToken = data.nextPageToken;
    let videoContainer = document.querySelector('.blog-items');
    for(video of videos) {
      videoContainer.innerHTML += `
        <h2>${video.snippet.title}</h2>
        <img src="${video.snippet.thumbnails.medium.url}">
      `
    }
  })
}
*/

/*Показать ещё*/

$(document).ready(function () {
  let list = $(".blog-items-first-wrapper .blog-items-inner-wrapper");
  let numToShow = 9; //сколько показывать элементов
  let button = $(".show-more");
  let numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  } else {
    button.hide();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    let showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    let nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

/*Показать ещё - статьи*/

$(document).ready(function () {
  let list = $(".article-all .article-wrapper");
  let numToShow = 10; //сколько показывать элементов
  let button = $(".show-more-articles");
  let numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  } else {
    button.hide();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    let showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    let nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

$(document).ready(function () {
  let list = $(".notification-all .notification-wrapper");
  let numToShow = 10; //сколько показывать элементов
  let button = $(".show-more-notification");
  let numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  } else {
    button.hide();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    let showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    let nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

$(".scrollto a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top - 100,
    },
    {
      duration: 300, // по умолчанию «400»
      easing: "swing", // по умолчанию «swing»
    }
  );

  return false;
});

//PDF js
