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





 const  questionBtn = document.querySelector('.faq-questions__name'),
    answer = document.querySelector('.faq-questions__answer'),
    open = document.querySelector('.open'),
    blockQuestions = document.querySelector('.general-faq__questions'),
    blockQuestions1 = document.querySelector('.financial-faq__questions'),
    blockQuestions2 = document.querySelector('.technical-faq__questions'),
    questions = document.querySelectorAll('.faq-questions'),
    conten = document.querySelector('.conten-question'); 

const  tabs = (headerSelector, tabSelector, contentSelector, activeClass) => { 
    let faqBtn = document.querySelectorAll(headerSelector),
        blockBtn = document.querySelector(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    })
    faqBtn.forEach(item => {
      item.classList.remove(activeClass)
    })
  }

  function showTabContent(i = 0) {
    content[i].style.display = 'block';
    faqBtn[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

blockBtn.addEventListener('click', (e) =>{
  const target = e.target;
  if(target.classList.contains(tabSelector.replace(/\./, "")) || (target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
    faqBtn.forEach((item, i) =>{
      if(target == item || target.parentNode ==item){
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

tabs('.block-btn__item', '.block-btn', '.conten-question',  'active-btn')

questionBtn.addEventListener('click', function(){
  if(answer.style.display == 'block') {
      answer.style.display = 'none';
  }else{(answer.style.display = 'block')
}
  open.classList.toggle('close');
}) 







