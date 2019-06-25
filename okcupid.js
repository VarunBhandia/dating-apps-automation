var confirmBox = confirm('Start swiping right?');
var count = 1;
var like = function(){
    if (confirmBox){
      if(document.querySelector('.cardactions-action--like').click()){
      console.log('Liked ' + count);						 
      count++;									      
      }
      };
    setTimeout(like, 100);
};
setTimeout(like, 100);