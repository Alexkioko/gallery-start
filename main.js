const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    //Add the event directly
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    });
}
/*using for each
document.querySelectorAll('.thumb-bar>img').forEach(function(img) {
    img.onclick = function() {
        displayedImage.setAttribute('src', img.getAttribute('src'));
    }
}); 

/* using a for loop 
const imgs = document.querySelectorAll('.thumb-bar>img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function() {
        displayedImage.setAttribute('src', imgs[i].getAttribute('src'));
    });
}*/
/* using delegation 
thumbBar.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'IMG') {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
    }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    let btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
})


