"use strict";
console.log("js work")



var body = document.querySelector('body');
body.classList.add("main-body")

var lowEyesPanel = document.querySelector('#js-low-eyes');
console.log(lowEyesPanel.innerHTML)
// var docFregment = document.createDocumentFragment();
// var element = lowEyesPanel.content.cloneNode(true);
//     docFregment.appendChild(element);
// console.log(lowEyesPanel)

var element = document.createElement('div');
element = lowEyesPanel.cloneNode(true);
element.innerHTML = lowEyesPanel.innerHTML;
// element.classList.add('above')
console.log('element=' + element.innerHTML)


var target = document.querySelector("head");
target.parentNode.insertBefore(element, target.nextSibling);


var btnstart = document.querySelector('.js-loweyes')

btnstart.addEventListener('click', function (evt) {
  evt.preventDefault();
  alert('click')
})

// //slider on js
// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);
// function nextSlide() {
//     slides[currentSlide].className = slides[currentSlide].className.replace(' showing','');
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].className += ' showing';
// }
// var slides2 = document.querySelectorAll('#slides2 .slide2');
// var currentSlide2 = 0;
// var slideInterval = setInterval(nextSlide2, 2000);
// function nextSlide2() {
//     slides2[currentSlide2].className = slides2[currentSlide2].className.replace(' showing','');
//     currentSlide2 = (currentSlide2+1)%slides.length;
//     slides2[currentSlide2].className += ' showing';
// }
// end of slider on js

/*
читый локал сторедж
открыть панель
изменить свойства
сохранить эти свойства
загрузить их в локал сторедж

*/


 var DefaultSettings = ['16px','Times New Roman','normal','normal','BlackAndWhite','ShowImages'];
 var UserSettings = ['16px','Times New Roman','normal','normal','BlackAndWhite','ShowImages']
//console.log(UserSettings)



var ShowDefaultSetting = function () {
  for (var i=0; i <DefaultSettings.length; i++) {
    console.log(i + ' свойство ' + DefaultSettings[i]);
  }
}

// ShowDefaultSetting();
// var UserSettings = [];

// var compare = function(a1,a2) {
//     'use strict';
//   var NumbersPropertiesThatMatchSuccessfully = 0;
//   for (var i=0; i <a1.length; i++) {
//     if (a1[i]===a2[i]) {
//       NumbersPropertiesThatMatchSuccessfully++;
//   }
// }
//     if (NumbersPropertiesThatMatchSuccessfully===6) return true;
//     return false;
// };

// var SaveSettingForNextPages = function() {
//  if (compare(DefaultSettings,UserSettings)) {
//   return true;
//  } else {
//     var NameOfProperty = '';
//       for (var i=0; i<UserSettings.length; i++) {
//           NameOfProperty = "LocalProperty";
//           NameOfProperty +=i;
//           // console.log(NameOfProperty);
//           localStorage[NameOfProperty] = UserSettings[i];
//           //console.log(localStorage[NameOfProperty]);
//         };
//  }
// return false;
// };


//mifomen
var ShowLocalStorage = function () {
 var NameOfProperty = '';
for (var i=0; i<UserSettings.length+1; i++) {
   NameOfProperty = "LocalProperty";
   NameOfProperty +=i;
   console.log(NameOfProperty + ' ' +localStorage[NameOfProperty]);
  };
};

var ClearLocalStorage = function () {
  var NameOfProperty = '';
    for (var i=0; i<UserSettings.length; i++) {
      NameOfProperty = "LocalProperty";
      NameOfProperty +=i;
      delete localStorage[NameOfProperty];
    };
    return true;
};

// var LoadSettingFromUser  = function () {
//   for (var i = 0; i<UserSettings.length;i++) {
//       NameOfProperty = "LocalProperty";
//       NameOfProperty +=i;
//       UserSettings[i] = localStorage[NameOfProperty];
//       console.log(UserSettings[i] + ' + ' + localStorage[NameOfProperty] )
//   }
// };
// localStorage["LocalProperty0"] = '16px';
var body=document.querySelector(".main-body");

var LoadFont = function () {
  // body.style.fontSize =  localStorage["LocalProperty0"];
  SetFontSizeForTag('.main-body *',parseInt(localStorage["LocalProperty0"]));
  // UserSettings[0] = localStorage["LocalProperty0"];
};

var LoadFontFamily = function () {
  if (localStorage["LocalProperty1"] == 'Times New Roman') {
    SetFontFamilyForElements('.main-body *','Times New Roman');
  }
  if (localStorage["LocalProperty1"] == 'Arial') {
    SetFontFamilyForElements('.main-body *','Arial');
  }
};

var LoadLetter = function () {
  body.style.letterSpacing =  localStorage["LocalProperty2"];
};

var LoadLine = function () {

  // body.style.lineHeight = localStorage["LocalProperty3"];
  if (localStorage["LocalProperty3"] == '2.8') {
    SetLineHeightForElements('.main-body *','2.8')
  }
  if (localStorage["LocalProperty3"] == '1.7') {
    SetLineHeightForElements('.main-body *','1.7');
  }
   if (localStorage["LocalProperty3"] == 'normal' || '') {
      LineHeightDefault();
  }

};



var LoadColorScheme = function () {
  if (localStorage["LocalProperty4"] == 'BlackAndWhite') {
    ChangeColorShemeToBlackAndWhite();
    return true;
  };
  if (localStorage["LocalProperty4"] == 'WhiteAndBlack') {
    ChangeColorShemeToWhiteAndBlack();
      return true;
  };
  if (localStorage["LocalProperty4"] == 'SchemeGreyColor') {
    ChangeColorShemeToSchemeGreyColor();
      return true;
  }
};

var LoadStatusImages = function () {
  if (localStorage["LocalProperty5"] == 'ShowImages') {
    ChangeStatusImageToFullColorImages();
      return true;
  }
  if (localStorage["LocalProperty5"] == 'GreyColorImagesYes') {
    ChangeStatusImageToGreyScaleImagess();
      return true;
  }
  if (localStorage["LocalProperty5"] == 'HideImages') {
    ChangeStatusImageToDisableImages();
      return true;
  }
};

var FullLoad = function (arr) {
  if (arr) {
    //panel.classList.add('open-panel');
    LoadFont();
    LoadFontFamily();
    LoadLetter();
    LoadLine();
    LoadColorScheme();
    LoadStatusImages();
    // AddFixedPositionForPanel();

    if (localStorage["PanelStatusOpened"]==0) {
      RemoveFixedPositionForPanel();
    }
 if (localStorage["PanelStatusOpened"]==1) {
      AddFixedPositionForPanel();
    }

//ActivePanel.innerHTML = 'Вернуться обратно';
  };
  return true;
};

// var HowManyTimesClickOnButtonLowEyesPanel = 0;
// localStorage["HowManyTimesClickOnButtonLowEyesPanel"]=0;
var show=document.querySelector(".showing");
var panel=document.querySelector(".low-eyes-panel");
var ActivePanel = document.querySelector(".active-low-eyes");

var FindPanel = document.querySelector(".above");


var AddFixedPositionForPanel = function() {
  if (document.querySelector(".above")) {
    document.querySelector(".above").classList.add('fixed');
    };
  }

var RemoveFixedPositionForPanel = function() {
  if (document.querySelector(".above")) {
    document.querySelector(".above").remove('fixed');
  }
};

// ActivePanel
ActivePanel.addEventListener("click",function(evt) {
  evt.preventDefault();
// HowManyTimesClickOnButtonLowEyesPanel++;
// localStorage["HowManyTimesClickOnButtonLowEyesPanel"]++;

if (ActivePanel.innerHTML== 'Версия для слабовидящих') {
          panel.classList.add('open-panel');
          body.style.fontSize='16px';
          AddFixedPositionForPanel();
          ActivePanel.innerHTML = 'Вернуться обратно';
          localStorage["PanelStatusOpened"]=1;
          // if (localStorage["PanelStatusOpened"]=1) {
            // проверку, загружать локалку если вкладка открыта
          // }
          //console.log('панель открыта '+ localStorage["PanelStatusOpened"]);

} else {
          ActivePanel.innerHTML = 'Версия для слабовидящих';
          localStorage["PanelStatusOpened"]=0;
          reset();
          panel.classList.remove('open-panel');
          RemoveFixedPositionForPanel();
          ClearLocalStorage();
          //   body.className= localStorage['LowEyesStyle'];
}
return false;
});

var SetFontSizeToLow = function() {
  body.classList.add('LowFontSize');
  body.classList.remove('LargeFontSize');

};
var SetFontSizeToLarge = function () {
 body.classList.add('LargeFontSize');
 body.classList.remove('LowFontSize');
};

// var FontsDeacrease = function (element) {
// var number = parseInt(element.style.fontSize);
//   if (number<=4) {
//    return element.style.fontSize='4px';
//   } else {
//     number -=4;
//     element.style.fontSize=number +'px';}
//      UserSettings[0] = element.style.fontSize;
//      // console.log(parseInt(element.style.fontSize) + ' ' + element.style.fontSize)
//      localStorage["LocalProperty0"] = element.style.fontSize;
//      localStorage["LocalProperty6"] =  element.style.fontSize;
//     // SaveSettingForNextPages();
//    return false;
// };


var FontsDefault = function() {
  var FindAllTags = document.querySelectorAll('.main-body *'); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {

    return it.style.cssText = it.style.cssText.replace('font-size: ' + localStorage["LocalProperty0"],'');
    // it.style.cssText.replace(f,'');
  })
    localStorage["LocalProperty0"] = "16px";
    localStorage["LocalProperty6"] = "16px";
    UserSettings[0] = "16px";
    // SaveSettingForNextPages();
    return true;
};

var SetFontSizeForTag = function (tag,number) {
  var FindAllTags = document.querySelectorAll(tag); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {
    return it.style.fontSize = number + 'px';
  })
  return true;
};

 var FontsIncrease = function (number) {
  if (number>75) {
    SetFontSizeForTag('.main-body *',80);
  } else {
   number +=4;
   SetFontSizeForTag('.main-body *',number);
 }
 UserSettings[0] = number + 'px';
 localStorage["LocalProperty0"] =  number + 'px';
 localStorage["LocalProperty6"] =  number + 'px';

}

var FontsDeacrease = function (number) {
  if (number<=4) {
    SetFontSizeForTag('.main-body *',4);
  } else {
   number -=2;
   SetFontSizeForTag('.main-body *',number);
 }
 UserSettings[0] = number + 'px';
 localStorage["LocalProperty0"] =  number + 'px';
 localStorage["LocalProperty6"] =  number + 'px';
}

var SetFontFamilyForElements = function (tag,family) {
  var FindAllTags = document.querySelectorAll(tag); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {
     UserSettings[1] = family;
     return it.style.fontFamily   =  family + ",sans-serif";
  })
    return true;
};

var FontsFamilyDefault = function() {
  var FindAllTags = document.querySelectorAll('.main-body *'); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {
     UserSettings[1] = "";
    return it.style.fontFamily  =  "";
  })
    localStorage["LocalProperty1"] = "";
    UserSettings[1] = "";
    return true;
};
// line-height normal 1,7 2.8  style.lineHeight

var SetLineHeightForElements = function (tag,multiplier) {
  var FindAllTags = document.querySelectorAll(tag); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {
     UserSettings[3] = multiplier;
     return it.style.lineHeight =  multiplier;
  })
    return true;
};

var LineHeightDefault = function() {
  var FindAllTags = document.querySelectorAll('.main-body *'); //.main-body *
  var TimeMassive = [];
  TimeMassive = Array.from (FindAllTags);
  TimeMassive.forEach(function (it) {
     UserSettings[3] = "";
    return it.style.lineHeight  =  '';
  })
    localStorage["LocalProperty3"] = "";
    UserSettings[3] = "";
    return true;
};

var BtnLowFontSize = document.querySelector (".LowFontSize");
var BtnMIddleFontSize = document.querySelector (".MiddleFontSize");
var BtnLargeFontSize= document.querySelector (".LargeFontSize");
  BtnLowFontSize.addEventListener("click",function(evt) {
    evt.preventDefault();
    FontsDeacrease(parseInt(UserSettings[0]));
// SetFontSizeToLow();

  });
   // var FontSize = 16;
  BtnLargeFontSize.addEventListener("click",function(evt) {
    evt.preventDefault();
    FontsIncrease(parseInt(UserSettings[0]));
});
  BtnMIddleFontSize.addEventListener("click",function(evt) {
    evt.preventDefault();
    FontsDefault();
  });


var Arial=document.querySelector(".Arial");
var TimesNewRoman= document.querySelector(".TimesNewRoman");
Arial.addEventListener("click",function(evt) {
  evt.preventDefault();
  // SetFontFamilyForElements('.main-body *','Times New Roman');
SetFontFamilyForElements('.main-body *','Arial');
  // body.classList.add('Arial');
  // body.classList.remove('TimesNewRoman');
  // UserSettings[1] = 'Arial';
       localStorage["LocalProperty1"] = 'Arial'
    // SaveSettingForNextPages();

});
TimesNewRoman.addEventListener("click",function(evt) {
  evt.preventDefault();
    SetFontFamilyForElements('.main-body *','Times New Roman');
  // body.classList.add('TimesNewRoman');
  // body.classList.remove('Arial');
  // UserSettings[1] = 'Times New Roman';
       localStorage["LocalProperty1"] = 'Times New Roman';
    // SaveSettingForNextPages();
});
var LetterDefault = document.querySelector(".letter-spacing-default");
var LetterMiddle = document.querySelector(".letter-spacing-middle");
var LetterLarge = document.querySelector(".letter-spacing-large");
LetterDefault.addEventListener("click",function(evt) {
  evt.preventDefault();
  body.style.letterSpacing = "normal";
  UserSettings[2] = 'normal';
       localStorage["LocalProperty2"] = 'normal'
    // SaveSettingForNextPages();
});
LetterMiddle.addEventListener("click",function(evt) {
  evt.preventDefault();
   body.style.letterSpacing = "2px";
   UserSettings[2] = '2px';
       localStorage["LocalProperty2"] = '2px'
    // SaveSettingForNextPages();
});
LetterLarge.addEventListener("click",function(evt) {
  evt.preventDefault();
  body.style.letterSpacing = "4px";
    UserSettings[2] = '4px';
       localStorage["LocalProperty2"] = '4px'
    // SaveSettingForNextPages();
});
var LineDefault = document.querySelector(".line-height-default");
var LIneMiddle = document.querySelector(".line-height-middle");
var LIneLarge = document.querySelector(".line-height-large");
LineDefault.addEventListener("click",function(evt) {
  evt.preventDefault();
  // body.style.lineHeight = "normal";
  LineHeightDefault();
  // SetLineHeightForElements('.main-body *','')
  // UserSettings[3] = '';
  //      localStorage["LocalProperty3"] = ''
    // SaveSettingForNextPages();
});
LIneMiddle.addEventListener("click",function(evt) {
  evt.preventDefault();
   // body.style.lineHeight = "1.7";
   SetLineHeightForElements('.main-body *','1.7')
    UserSettings[3] = '1.7';
       localStorage["LocalProperty3"] = '1.7'
    // SaveSettingForNextPages();
});
LIneLarge.addEventListener("click",function(evt) {
  evt.preventDefault();
  // body.style.lineHeight = "2.8";
    SetLineHeightForElements('.main-body *','2.8')
   UserSettings[3] = '2.8';
       localStorage["LocalProperty3"] = '2.8'
    // SaveSettingForNextPages();
});
var BlackAndWhite = document.querySelector(".BlackAndWhite");
var WhiteAndBlack = document.querySelector(".WhiteAndBlack-bg");
var SchemeGreyColor = document.querySelector(".DarkBlue");

var ChangeColorShemeToBlackAndWhite = function() {
  var above = document.querySelector(".above");
above.style.backgroundColor = '#FFF';
    body.classList.remove('DarkBlue');
    body.classList.remove('WhiteAndBlack');
    body.classList.add('BlackAndWhite');
    body.classList.remove('grayscaleFilterFull');
};
BlackAndWhite.addEventListener("click",function(evt) {
    evt.preventDefault();
    ChangeColorShemeToBlackAndWhite ();
    UserSettings[4] = 'BlackAndWhite';
       localStorage["LocalProperty4"] = 'BlackAndWhite'
    // SaveSettingForNextPages();
});

var ChangeColorShemeToWhiteAndBlack=function() {
var above = document.querySelector(".above");
above.style.backgroundColor = '#000';
    body.classList.remove('DarkBlue');
    body.classList.remove('BlackAndWhite');
    body.classList.remove('grayscaleFilterFull');
    body.classList.add('WhiteAndBlack');
};
WhiteAndBlack.addEventListener("click",function(evt) {
    evt.preventDefault();
    ChangeColorShemeToWhiteAndBlack();
    UserSettings[4] = 'WhiteAndBlack';
       localStorage["LocalProperty4"] = 'WhiteAndBlack'
    // SaveSettingForNextPages();
});

var ChangeColorShemeToSchemeGreyColor = function() {
   // body.classList.remove('WhiteAndBlack');
    body.classList.remove('BlackAndWhite');
    body.classList.add('grayscaleFilterFull');
}
SchemeGreyColor.addEventListener("click",function(evt) {
    evt.preventDefault();
    ChangeColorShemeToSchemeGreyColor();
    UserSettings[4] = 'SchemeGreyColor';
       localStorage["LocalProperty4"] = 'SchemeGreyColor'
    // SaveSettingForNextPages();
});
var ShowImage = function () {
var images = document.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++)
      images[i].style.display = "";
var SVGimages = document.getElementsByTagName("svg");
      for (var i = 0; i < SVGimages.length; i++)
      SVGimages[i].style.display = "";


}
var HideImage = function () {
var images = document.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++)
      images[i].style.display = "none";

var SVGimages = document.getElementsByTagName("svg");
      for (var i = 0; i < SVGimages.length; i++)
      SVGimages[i].style.display = "none";

}
var GreyColorForImages = function () {
      var images = document.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++)
      images[i].classList.add('grayscaleFilterFull');
var SVGimages = document.getElementsByTagName("svg");
      for (var i = 0; i < SVGimages.length; i++)
       SVGimages[i].classList.add('grayscaleFilterFull');

}
var DeleteGreyColorForImages = function () {
      var images = document.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++)
         images[i].classList.remove('grayscaleFilterFull');
var SVGimages = document.getElementsByTagName("svg");
      for (var i = 0; i < SVGimages.length; i++)
       SVGimages[i].classList.remove('grayscaleFilterFull');

}

var FullColorImages = document.querySelector(".FullColorImages");
var GreyScaleImages = document.querySelector(".GreyScaleImages");
var DisableImages = document.querySelector(".DisableImages");

var ChangeStatusImageToFullColorImages = function () {
  ShowImage();
  DeleteGreyColorForImages();
  UserSettings[5] = 'ShowImages';
       localStorage["LocalProperty5"] = 'ShowImages'
    // SaveSettingForNextPages();
};
FullColorImages.addEventListener("click",function(evt) {
  evt.preventDefault();
  ChangeStatusImageToFullColorImages();
});
var ChangeStatusImageToGreyScaleImagess =function () {
  GreyColorForImages();
  ShowImage();
  UserSettings[5] = 'GreyColorImagesYes';
       localStorage["LocalProperty5"] = 'GreyColorImagesYes'
    // SaveSettingForNextPages();
};
GreyScaleImages.addEventListener("click",function(evt) {
  evt.preventDefault();
  ChangeStatusImageToGreyScaleImagess();
});
var  ChangeStatusImageToDisableImages = function() {
  HideImage();
  UserSettings[5] = 'HideImages';
       localStorage["LocalProperty5"] = 'HideImages'
    // SaveSettingForNextPages();
};
DisableImages.addEventListener("click",function(evt) {
  evt.preventDefault();
  ChangeStatusImageToDisableImages();
});
function reset() {
    body.style.fontSize=('16px');
    // body.style.lineHeight=('normal');
    body.style.letterSpacing=('normal');
    body.className='main-body';
    DeleteGreyColorForImages();
    ShowImage();
    FontsDefault();
    FontsFamilyDefault();
    LineHeightDefault();
    RemoveFixedPositionForPanel();
  //  console.log('reset complite');
 };

var ButtonReset=document.querySelector(".reset");
ButtonReset.addEventListener("click",function(evt){
evt.preventDefault();
     reset();
});
// var ActivePanel=document.querySelector(".active-low-eyes");
// ActivePanel.addEventListener("click",function(evt) {
//   evt.preventDefault();


 document.addEventListener("DOMContentLoaded",function(e){
  // console.log('js works')
  FullLoad(localStorage["PanelStatusOpened"]);
  OpenPanel();
});

 var OpenPanel = function () {
  if (localStorage["PanelStatusOpened"]=='1') {
// console.log('banan')
// if ( localStorage["LocalProperty6"] != localStorage["LocalProperty0"] )  {
// body.style.fontSize = localStorage["LocalProperty6"];
// localStorage["LocalProperty0"] = localStorage["LocalProperty6"];
// } else {
//   localStorage["LocalProperty0"] = '16px';
// };
    panel.classList.add('open-panel');
    ActivePanel.innerHTML = 'Вернуться обратно';
    return true;
  } else {

    // console.log('ogyrec')
  //  panel.classList.remove('open-panel');
  return false;
  }
};

// localStorage["HowManyTimesClickOnButtonLowEyesPanel"]=0;

// // var name = function(){
//   var HowManyTimesClickOnButtonLowEyesPanel=0;
//   if (localStorage["HowManyTimesClickOnButtonLowEyesPanel"]=='1') {
//     body.style.fontSize='16px';
//     console.log('успешно подгружен размер шрифта');
//     return true;
//   } else {
//  return false;
//   }
// };
