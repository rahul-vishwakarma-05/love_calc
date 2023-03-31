const btn        = document.querySelector('button');


btn.addEventListener('click' , () =>{
  const random_num = Math.random() * 100;
  const random = Math.floor(random_num);

  const show_result = document.querySelector('.percentage > input');
  
  const male_input = document.querySelector('.male_name > input');
  const female_input = document.querySelector('.female_name > input');

  if (male_input.value == '' || female_input.value == '') {
   alert('plz enter the names');
  }else{
    show_result.value = random + " % "; 
  }
  
});
