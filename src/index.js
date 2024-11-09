import './index.html';
import './index.scss';
import shop_bag from './img/shop_bag.svg';
import search from './img/search.svg';
import user from './img/user.svg';
import placeholder from './img/book-placeholder.jpg';

let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide1, .slide2, .slide3');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideIndex = 0;

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    dots[n].classList.add('active-dot');
};

dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
    });
  });

function nextSliders() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSliders, 5000);
showSlide(currentSlide);

const key = "AIzaSyDzuQMPaY6w-ea3dDCUwTQzwu2ud3sU2Nw";
let startIndex = 0;
let subject = "Architecture";

function useRequest(cb1, cb2) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${subject}"&${key}"
        API>&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`)
        .then(response => response.json())
        .then(data => {
            if (cb1) {
                cb1(data);
            }
            else {
                console.log("cb1 error");
            }
            if (cb2) {
                cb2();
            }
            else {
                console.log("cb2 error");
            }
        })
        .catch(error => console.log(error));
}

function isUndefined(str) {
    if (str) {
        return str;
    }
    else {
        return "&nbsp;";
    }
}

function displayResult(data) {
    let cards = '';
    data.items.forEach(item => {
        const thumbnail = item.volumeInfo.imageLinks?.thumbnail || placeholder;
        let card = `
            <div class="book-card">
                <div>
                    <img class="book-card__img" src="${thumbnail}" loading="lazy">
                </div>
                <div class="book-info">
                    <p class="book-info__authors"> ${isUndefined(item.volumeInfo.authors)} </p>
                    <p class="book-info__title"> ${isUndefined(item.volumeInfo.title)} </p>
                    <p class="book-info__ratingsCount"> ${isUndefined(item.volumeInfo.ratingsCount)} </p>
                    <p class="book_info__description"> ${isUndefined(item.volumeInfo.description)} </p>
                    <p class="book-info__retailPrice">${item.saleInfo?.retailPrice ? 
                        `${item.saleInfo.retailPrice.amount} ${item.saleInfo.retailPrice.currencyCode}` : 
                        '&nbsp;'}</p>
                    <button class="book-info__button">buy now</button>
                </div>
            </div>
        `;
        cards += card;
        let bookData = {
            title: isUndefined(item.volumeInfo.title),
            author: isUndefined(item.volumeInfo.authors),
            price: isUndefined(item.saleInfo.listPrice)
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || { books: [] };
        cart.books.push(bookData);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    document.querySelector('.books-page').innerHTML += cards;
}

function loadMoreFn() {
    const btn = document.querySelector('.load-button__item');
    btn.addEventListener('click', () => {
        startIndex += 6;
        useRequest(displayResult, buyFn);
    });
};

function chooseCategoryFn() {
    const categories = document.querySelectorAll('.bookshop-list__item');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            subject = category.textContent;
            document.querySelector('.books-page').innerHTML = " ";
            useRequest(displayResult, buyFn);
            
            categories.forEach(cat => {
                cat.classList.remove('active-bookshop-list__item');
            });

            category.classList.add('active-bookshop-list__item');
        });
    });
};

function buyFn() {
    let counter = 0;
    let bagCounter = document.querySelector('.header__bag-count');
    window.addEventListener('scroll', ()=>{
        bagCounter = document.querySelector('.header__bag-count');
    })
    const buttons = document.querySelectorAll('.book-info__button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === "buy now") {
                button.textContent = "in the cart";
                button.classList.add('book-info__button-active');
                counter++;
                bagCounter.style.display = "block";
                bagCounter.textContent = counter;
            } else {
                button.textContent = "buy now";
                button.classList.remove('book-info__button-active');
                counter--;
                bagCounter.textContent = counter;
                if (counter === 0) {
                    bagCounter.style.display = "none";
                }
            }
        })
    });
};

useRequest(displayResult,buyFn);
loadMoreFn();
chooseCategoryFn();

const originalHeaderContainer = document.querySelector('.header').innerHTML;

function fixedHeader(){
    const headerContainer = document.querySelector('.header');
    let headerNav = document.querySelector('.header__navigation');
    let header = document.querySelector('header');
    window.onscroll = function showHeader(){
        if (window.scrollY > 500){
            headerNav.style.width = "100px";
            header.classList.add('header-fixed');
            headerContainer.innerHTML = `
            <ul class="header__navigation navigation-fixed">
                <li class="header__navigation-link">gifts</li>
                <li class="header__navigation-link">blog</li>
            </ul>
            <div class="header__icons">
                <div class="header__user-icon">
                <img src="${user}" alt="">
            </div>
            <div class="header__search-icon">
                <img src="${search}" alt="">
            </div>
            <div class="header__bag-icon">
                <img src="${shop_bag}" alt="">
                <div class="header__bag-count">
                    </div>
                </div>
            </div>
            `;
        }
        else {
            header.classList.remove('header-fixed');
            headerContainer.innerHTML = originalHeaderContainer;
        }
    }
}

fixedHeader();
