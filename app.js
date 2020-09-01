// дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// санхүүтэй ажиллах контроллер
var finalController = (function () {})();

// Програмыг холбогч ажиллах контроллер

var appController = (function (uiController, finalController) {
  function ctrlAddItem() {
    //оруулах өгөгдлийг дэлгэцээс олж авна
    //олж авсан өгөгдлийг санхүүгийн контролруу дамжуулж хадгална
    //олж авсан өгөгдлүүдийг тохирох газар гаргана
    //төсвийг тооцоолно
    //эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
  }
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13 || event.which == 13) {
      ctrlAddItem();
    }
  });
})(uiController, finalController);
