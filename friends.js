"use strict";
(function() {

  /**
   * Name: Robin Luo
   * Date: October 13, 2021
   * Section: CSE 154 AB
   * This is the friends.js script for interactivity on my friends generator website. It primarily
   * contains the stuffed animal photos and functions for buttons response.
   */

  /**
   * photo sources:
   * bear: https://shop.san-x.co.jp/product/detail/RLK8922
   * wizard: https://shop.san-x.co.jp/product/detail/SMG3987
   * father: https://shop.san-x.co.jp/product/detail/RLK8890
   * pumpkin: https://shop.san-x.co.jp/product/detail/SMG3894
   * halloween: https://shop.san-x.co.jp/product/detail/RLK8861
   * strawberry: https://shop.san-x.co.jp/product/detail/RLK8836
   * dinosaur: https://shop.san-x.co.jp/product/detail/RLK8091
   */
  const PHOTOS = ["img/bear.png", "img/dinosaur.png", "img/father.png",
  "img/halloween.png", "img/pumpkin.png", "img/strawberry.png", "img/wizard.png"];
  const PHOTOS_ALT = ["a stuffed beige bear", "a stuffed chicken", "a stuffed brown bear",
  "a stuffed vampire bear", "a stuffed pumpkin", "a stuffed strawberry bear", "a stuffed wizard"];

  window.addEventListener("load", init);

  /** this function initiates the code when the page loads */
  function init() {
    id("time").addEventListener("click", time);
    id("add").addEventListener("click", add);
    id("subtract").addEventListener("click", subtract);
    id("different").addEventListener("click", different);
    id("evil").addEventListener("click", evil);
    id("reset").addEventListener("click", reset);
  }

  /** this function toggles "daytime" or "nighttime" for the page theme */
  function time() {
    id("photos").classList.toggle("night");
    id("body").classList.toggle("nightbkgd");
    id("header").classList.toggle("nighttxt");
    let button1 = document.querySelector('button');
    button1.classList.toggle("nightbtn");
    button1.classList.toggle("nightbtnhvr");
    button1.classList.toggle("nightbtnact");
  }

  /** this function adds another stuffed animal image to the page */
  function add() {
    let friend = document.createElement("img");
    let select = Math.floor((PHOTOS.length) * Math.random());
    friend.src = PHOTOS[select];
    friend.alt = PHOTOS_ALT[select];
    if(id("photos").childNodes.length==0) {
      id("photos").appendChild(friend);
    }
    id("photos").insertBefore(friend, id("photos").firstChild);
  }

  /** this function takes away the last stuffed animal image */
  function subtract() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
  }

  /** this function changes the last added stuffed animal image to a different one */
  function different() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
    add();
  }

  /** this function changes all the images on the page to a bear image with evil eyebrows */
  function evil() {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      // unedited bear source: https://shop.san-x.co.jp/product/detail/RLK8893
      images[i].src = "img/evil.png";
      images[i].alt = "an evil stuffed bear";
    }
  }

  function reset(){
    let all = document.getElementById("photos");
    all.innerHTML = "";
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
})();
