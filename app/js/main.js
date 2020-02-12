$('.title-slider').slick({
  dots: true,
 prevArrow: '<img class="slider-arrows__up" src="img/arrowL.png" alt="" ></img>',
 nextArrow: '<img class="slider-arrows__down" src="img/arrowR.png" alt="" ></img>', 
 autoplay: true,
 autoplaySpeed: 3000,
})

$('.recommendation-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows__left" src="img/arrow1.png" alt="" ></img>',
  nextArrow: '<img class="slider-arrows__right" src="img/arrow2.png" alt="" ></img>', 
})

$('.news-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
})




let faqBtn = document.querySelectorAll('.block-btn__item'),
    blockBtn = document.querySelector('.block-btn'),
    questionBtn = document.querySelector('.faq-questions__name'),
    answer = document.querySelector('.faq-questions__answer'),
    open = document.querySelector('.open'),
    blockQuestions = document.querySelector('.general-faq__questions'),
    blockQuestions1 = document.querySelector('.financial-faq__questions'),
    blockQuestions2 = document.querySelector('.technical-faq__questions'),
    questions = document.querySelectorAll('.faq-questions');
   
questionBtn.addEventListener('click', function(){
  if(answer.style.display == 'block') {
      answer.style.display = 'none';
  }else{(answer.style.display = 'block')
}
  open.classList.toggle('close');
}) 

$('.block-btn__item.gen').click(function() {
  $('.financial-faq__questions').hide();
  $('.technical-faq__questions').hide();
  $('.general-faq__questions').show();
  $('.block-btn__item.gen').addClass('active-btn');
  $('.block-btn__item.tech').removeClass('active-btn');
  $('.block-btn__item.fin').removeClass( 'active-btn');
});

$('.block-btn__item.fin').click(function() {
  $('.financial-faq__questions').show();
  $('.technical-faq__questions').hide();
  $('.general-faq__questions').hide();
  $('.block-btn__item.fin').addClass('active-btn');
  $('.block-btn__item.tech').removeClass('active-btn');
  $('.block-btn__item.gen').removeClass( 'active-btn');
});

$('.block-btn__item.tech').click(function() {
  $('.technical-faq__questions').show();
  $('.general-faq__questions').hide();
  $('.financial-faq__questions').hide();
  $('.block-btn__item.tech').addClass('active-btn');
  $('.block-btn__item.fin').removeClass('active-btn');
  $('.block-btn__item.gen').removeClass( 'active-btn');
});


    
/* blockBtn.addEventListener('click', function(event){
  let target = event.target;
  if(target && target.classList.contains('block-btn__item')){
    for (let i = 0 ; i < faqBtn.length; i++){
      if(target == faqBtn[0]){
        blockQuestions.classList.add('show')
        faqBtn[0].classList.toggle('active-btn');
      }


  */


  function hideTabContent(a) {

    for (let i = a; i < answer.length; i++){
      answer[i].classList.remove('show');
      answer[i].classList.add('hide');
    }
  }
    hideTabContent(1);

    function showTabContent(b){
      if(answer[b].classList.contains('hide')) {
        answer[b].classList.remove('hide');
          answer[b].classList.add('show');
      }
    }

    blockQuestions.addEventListener('click', function(event) {
      let target = event.target;
      if ( target && target.classList.contains('faq-questions__answer')) {
        for (let i = 0; i < questions.length; i++) {
          if (target == questions[i]) {
            hideTabContent(0);
            showTabContent(i);
          break;
          }
        }
      }
    });