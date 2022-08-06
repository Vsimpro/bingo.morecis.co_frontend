var matrix = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
]


const calculateSum = (arr) => {
  return arr.reduce((total, current) => {
      return total + current;
  }, 0);
}


function CheckWin() {
  // Horizontal check
  for (var i = 0; i < 5; i++) {
    if (calculateSum(matrix[i]) == 5) {
      return true;
    }
  }
 
  // Diagonal check?
  var sum_a = 0; var sum_b = 0;
  for (var i = 0; i < 5; i++) {
    sum_a += matrix[i][i];
    sum_b += matrix[i][4 - i];
  }
  
  if (sum_a >= 5 || sum_b >= 5) {
    return true;
  }

  for (var i = 0; i < 5; i++) {
    var sum = 0;
    for (var j = 0; j < 5; j++) {
      sum += matrix[j][i];
    }
    if (sum >= 5) {
      return true;
    }
  }
  // Vertical check
  for (var i = 0; i < 5; i++) {
    var sum = 0;
    for (var j = 0; j < 5; j++) {
      sum += matrix[i][j];
    }
  }

  return false;
}

$(".bingo-card__item").on('click', function() {
        $(this).toggleClass('active');
  var id = parseInt(this.id);
  var y = parseInt(id / 5);
  var x = parseInt(id % 5); 
  if (matrix[y][x] == 0) {
    matrix[y][x] = 1;
  } else {
    matrix[y][x] = 0;
  };

  if (CheckWin()) {
    alert("BINGO!");
  };
  console.log(matrix);
  
});

$('.clear-button').on('click', function(){
        $('.bingo-card__item').removeClass('active');
        for (var i = 0; i <= 4; i++) {
                matrix[i] = [0,0,0,0,0];
    }
});

$.getJSON( "https://api.morecis.co/v1/bingo/items", function( data ) {
  var items = [];
  $.each( data.pool , function( key, val ) {
    $( "#" + key ).text(val);
  });
});
