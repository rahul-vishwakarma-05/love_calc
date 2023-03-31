const btn = document.querySelector('button');

btn.addEventListener('click' , () =>{
  const random_num = Math.random() * 100;
  const random = Math.floor(random_num);

  const show_result = document.querySelector('.percentage > input');
   

  show_result.value = random + " % ";

});