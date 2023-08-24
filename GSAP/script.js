async function fetchPokemonData(offset) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
    const data = await response.json();
    // console.log(data);   

    return data.results;

}



const btnFetche = document.querySelector('.title button')
const section = document.querySelector('.pokemon')

btnFetche.addEventListener('click', async () => {
    let number = Math.floor(Math.random() * (895)) + 1
    console.log('clicou');
    const pokemonList = await fetchPokemonData(number)
    console.log(pokemonList);

    for (i = 0; i < pokemonList.length; i++) {
        const divPokemons = `
   <div>
   <span>${pokemonList[i].name}</span>
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(number + 1) + i}.png" alt="">
   </div>   `
        section.innerHTML += divPokemons
    }
   let  divs = document.querySelectorAll('.pokemon div img')
    console.log(divs);

    divs.forEach(image =>{
        image.addEventListener('click', ()=>{
            animateImage(image)
        })
    })


})



//Animations
const h1 = document.querySelector('.title h1')
const pokeball = document.querySelector('.title img')
const pikachu = document.querySelector('.pikachu')
const pokedex = document.querySelector('.pokedex')
const pokedexBtn = document.querySelector('.pokedex button')
const fetch1 = document.querySelector('.title button')
console.log(pokedexBtn);
const warning = document.querySelector('.warning')
console.log(warning);
const nani = new Audio('./audio/nani.mp3')
const open = new Audio('./audio/open.mp3')
const tele = new Audio('./audio/tele.mp3')
console.log(h1);
console.log(pokeball);

const message = document.createElement('div');
message.className = 'message';
message.textContent = 'Click to catch Pikachu';

const text = new TimelineLite();
text
    .to(h1, {
        x: '45vw',
        duration: 1.5,
        ease: 'power2.out'
    })

pokedexBtn.addEventListener('click', () => {
    text


        .to(pokedex, {
            duration: 0,
            onComplete: () => {
                pokedex.classList.add('hiden')
            }
        })

        .to(pokeball, {
            x: '20vw',
            duration: 1.5,
            ease: 'power2.out'
        })
        .to(h1, {
            x: '30vw',
            duration: 1.5,
            ease: 'power2.out'
        })
})


const appear = new TimelineLite();
pokedexBtn.addEventListener('click', () => {
    appear
        .to(pikachu, {
            delay: 4,
            duration: 0,
            ease: 'power2.out',
            onComplete: () => {
                pikachu.classList.remove('hiden')
                tele.play()
            }
        })

        .to(warning, {
            delay: 1,
            duration: 0,
            ease: 'power2.out',
            onComplete: () => {
                warning.classList.remove('hiden')
            }
        })

        .to(pokeball, {
            rotation: 360,
            duration: 2,
            repeat: 0,
            ease: 'linear'
        })


    const timeline = new TimelineLite();
    timeline

    pokeball.addEventListener('click', () => {
        console.log(pikachu);
        timeline            

        .to(warning, {
            duration: 0,
            ease: 'power2.out',
            onComplete: ()=>{
                warning.classList.add('hiden')
            }
        })
            .to(pikachu, {
                duration: .5,
                ease: 'power2.out',
                onComplete: () => {
                    pikachu.src = './img/pikachumeme.png';
                    nani.play();
                }
            })

            .to(pokeball, {
                duration: 3,
                ease: 'power2.out',
                y: "55vh",
                onComplete: () => {
                    pokeball.src = './img/pokeballopen.png';
                    open.play();
                }
            })

            .to([pokeball, pikachu], {
                duration: 5,
                ease: 'power2.out',
                x: "60vw",
                onComplete: () => {
                    pokeball.src = './img/pokeballquestion.png';
                    pikachu.style.display = 'none'
                },
                onStart: () => {
                    pikachu.src = './img/pikachurunning.gif'
                }
            })

            .to(pokeball, {
                duration: 2,
                ease: 'power2.out',
            })

            .to(pokeball, {
                duration: 3,
                ease: 'power2.out',
                x: "20vw",
                y: 0,
                onStart: () => {
                    pokeball.src = './img/pokeball.webp'
                }
            })

            .to(fetch1,{
                duration:0, 
                onComplete: ()=>{
                    fetch1.classList.remove('hiden')
                }
            } )

            .to(fetch1, {
                scale: 1.5,
                duration: 1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 3,                
            })

    })
})

//aumentar a imagem

function animateImage (image){
    gsap.to(image, {
        x: '50%',
        y: '50%',
        scale: 2,
        duration: 2,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(image, {
                scale: 1,  
                x: 0, 
                y: 0,
                duration: 1,
                ease: 'power2.in'
            });
        }
      });
    }
