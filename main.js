const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');



//Configuration For tailwind css
//Added custom colors, font-Family and box-shadow

tailwind.config ={
    theme: {
      colors : {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
        cyan700: 'rgb(14 116 144)'
      },
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif']
        },
        boxShadow: {
          '3xl': '0 0 20px 4px hsl(150, 100%, 66%) 0 0 20px 4px hsl(150, 100%, 66%)  0 0 20px 4px hsl(150, 100%, 66%) 0 0 20px 4px hsl(150, 100%, 66%) ',
        }
      }
    }
  }


  jokeButton.addEventListener('click', function(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
         const  {value }  = data;
            jokeText.innerHTML = `${value}`;
        })
  })