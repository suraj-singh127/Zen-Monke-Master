populateFilms();
let slides;

function slideIterator(slides) {
    console.log(slides.length);
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < slides.length ?
                { value: slides[nextIndex++], done: false } :
                { done: true };
        }
    }
}

function getObjects() {
    let obj5 = {
        imageUrl: "5.png",
        description: "List five things you can see."
    }
    let obj4 = {
        imageUrl: "4.png",
        description: "Four things you can feel."
    }
    let obj3 = {
        imageUrl: "3.png",
        description: "Three things you can hear around you."
    }
    let obj2 = {
        imageUrl: "2.png",
        description: "Two things you can smell"
    }
    let obj1 = {
        imageUrl: "1.png",
        description: "Think something positive about yourself."
    }
    let arrayOfObjs = [obj5, obj4, obj3, obj2, obj1];
    return arrayOfObjs;
}

function generateHtml(slideInfo) {
    let html = `
        <img src="${slideInfo.imageUrl}" alt="">
        <p>${slideInfo.description}</p>
    `

    document.querySelector('.information').innerHTML = html;
}

function populateFilms() {
    let data = getObjects();
    let slides = data;
    const slide = slideIterator(slides);
    generateHtml(slide.next().value);
    document.getElementById('nextSlide').addEventListener('click', () => {
        document.querySelector('.information').innerHTML = "";
        let slidesInfo =slide.next();
        if (!slidesInfo.done) {
            generateHtml(slidesInfo.value);
        }
        else {
            document.querySelector('.information').innerHTML = "Refresh to catch up from the start.";
            document.getElementById('nextMovie').innerHTML = 'Very Good.'
        }
    });
}
