const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementById('change-dog');


const getDogs = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.message;
    } catch (error) {
        console.log(error.message);
    }
}; 

const loadImg = async () => {
    const catImg = document.getElementById('dog');
     catImg.src = await getDogs();
};

catBtn.addEventListener('click', loadImg);

loadImg();

const btn = document.getElementById('change-dog');
btn.addEventListener('click', loadImg);