$(document).ready(function () {
  let tabsItem = $('.tabs-item');
  
  tabsItem.on('click', function(event){
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible'); //Эти 2 класса позволяют отображать правильно активный таб, скрывая открытый по умолчанию
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active'); //Этот класс дает присвоение оранжевого цвета по активному Табу в данный момент. 
  });
});
