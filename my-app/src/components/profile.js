import React, { useState } from "react";

function Profile({ setPage }) {

    const themeSwiter = {

        init: function () {
            this.wrapper = document.getElementById('theme-switcher-wrapper')
            this.button = document.getElementById('theme-switcher-button')
            this.theme = this.wrapper.querySelectorAll('[data-theme]')
            this.themes = ['theme-orange', 'theme-purple', 'theme-green', 'theme-blue']
            this.events()
            this.start()
        },

        events: function () {
            this.button.addEventListener('click', this.displayed.bind(this), false)
            this.theme.forEach(theme => theme.addEventListener('click', this.themed.bind(this), false))
        },

        start: function () {
            let theme = this.themes[Math.floor(Math.random() * this.themes.length)]
            document.body.classList.add(theme)
        },

        displayed: function () {
            (this.wrapper.classList.contains('is-open'))
                ? this.wrapper.classList.remove('is-open')
                : this.wrapper.classList.add('is-open')
        },

        themed: function (e) {
            this.themes.forEach(theme => {
                if (document.body.classList.contains(theme))
                    document.body.classList.remove(theme)
            })
        }

        

    }

    return (
                <div class="profile-page">
                    <div class="content">
                        <div class="content__cover">
                            <div class="content__avatar"></div>
                            <div class="content__bull"><span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                        <div class="content__actions"><a href="./new_lesson">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor" d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"></path>
                                <path fill="currentColor" d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"></path>
                            </svg><span>Create New Lesson</span></a><a href="./new_lesson">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"></path>
                                    <path fill="currentColor" d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"></path>
                                </svg><span>Message</span></a></div>
                        <div class="content__title">
                            <h1>Momo</h1><span>New York, United States</span>
                        </div>
                        <div class="content__description">
                            <p>Web Producer - Web Specialist</p>
                            <p>Columbia University - New York</p>
                        </div>
                        <ul class="content__list">
                            <li><span>65</span>Friends</li>
                            <li><span>43</span>Photos</li>
                            <li><span>21</span>Comments</li>
                        </ul>
                        <div class="content__button"><a class="button" href="#">
                            <div class="button__border"></div>
                            <div class="button__bg"></div>
                            <p class="button__text">Show more</p></a></div>
                    </div>
                    <div class="bg">
                        <div><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <style>
                        {
                            `
                        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: rgba(0,0,0,0.6);
}
.profile-page {
  display: flex;
  min-height: 100vh;
  padding-top: 5rem;
}
@media (max-width: 990px) {
  .profile-page {
    padding-top: 0;
  }
}
.profile-page .content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: auto;
  padding: 2rem;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);
}
@media (max-width: 990px) {
  .profile-page .content {
    max-width: 420px;
    padding: 0;
    border-radius: 0;
  }
}
.profile-page .content__cover {
  position: relative;
  background: linear-gradient(150deg, #1d8cf8 20%, #3358f4 100%);
}
.theme-orange .profile-page .content__cover {
  background: linear-gradient(150deg, #ff4086 20%, #fd8d76 100%);
}
.theme-purple .profile-page .content__cover {
  background: linear-gradient(150deg, #8700ff 20%, #f000ff 100%);
}
.theme-green .profile-page .content__cover {
  background: linear-gradient(150deg, #1dcc45 20%, #42b883 100%);
}
.theme-blue .profile-page .content__cover {
  background: linear-gradient(150deg, #0098f0 20%, #00f2c3 100%);
}
.profile-page .content__bull {
  display: none;
  height: 12rem;
  position: relative;
  overflow: hidden;
}
@media (max-width: 990px) {
  .profile-page .content__bull {
    display: block;
  }
}
.profile-page .content__bull span:nth-child(1) {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
}
.profile-page .content__bull span:nth-child(2) {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
}
.profile-page .content__bull span:nth-child(3) {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
}
.profile-page .content__bull span:nth-child(4) {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
}
.profile-page .content__bull span:nth-child(5) {
  display: block;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
}
.profile-page .content__bull span:nth-child(1) {
  width: 5rem;
  height: 5rem;
  top: -6%;
  left: -3%;
  background: rgba(255,255,255,0.12);
}
.profile-page .content__bull span:nth-child(2) {
  width: 8rem;
  height: 8rem;
  top: 18%;
  left: 18%;
  background: rgba(255,255,255,0.05);
}
.profile-page .content__bull span:nth-child(3) {
  width: 3rem;
  height: 3rem;
  top: 8%;
  right: 2%;
  background: rgba(255,255,255,0.05);
}
.profile-page .content__bull span:nth-child(4) {
  width: 6rem;
  height: 6rem;
  top: 28%;
  right: 12%;
  background: rgba(255,255,255,0.1);
}
.profile-page .content__bull span:nth-child(5) {
  width: 4rem;
  height: 4rem;
  top: 70%;
  left: -6%;
  background: rgba(255,255,255,0.04);
}
.profile-page .content__avatar {
  width: 12rem;
  height: 12rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, 50%);
  background: #8f6ed5 url("https://image.freepik.com/free-photo/friendly-brunette-looking-camera_23-2147774849.jpg") center center no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);
}
.profile-page .content__avatar::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
}
@media (max-width: 990px) {
  .profile-page .content__avatar {
    width: 11rem;
    height: 11rem;
    border: 0.3rem solid #fff;
    box-shadow: none;
  }
}
.profile-page .content__actions {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}
@media (max-width: 990px) {
  .profile-page .content__actions {
    padding: 0.8rem 2rem;
  }
}
.profile-page .content__actions a {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0.2rem 1rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 0.9rem;
}
@media (max-width: 990px) {
  .profile-page .content__actions a {
    padding: 0.5rem;
  }
}
@media (max-width: 990px) {
  .profile-page .content__actions a span {
    display: none;
  }
}
.profile-page .content__actions a svg {
  width: 2rem;
  margin-right: 0.4rem;
}
@media (max-width: 990px) {
  .profile-page .content__actions a svg {
    margin: 0;
  }
}
.profile-page .content__actions a svg path:last-child {
  opacity: 0.5;
}
.profile-page .content__actions a:first-child {
  color: #ff4086;
}
.theme-orange .profile-page .content__actions a:first-child {
  color: #ff4086;
}
.theme-purple .profile-page .content__actions a:first-child {
  color: #8700ff;
}
.theme-green .profile-page .content__actions a:first-child {
  color: #1dcc45;
}
.theme-blue .profile-page .content__actions a:first-child {
  color: #0098f0;
}
.profile-page .content__actions a:last-child {
  color: #d782d9;
}
.theme-orange .profile-page .content__actions a:last-child {
  color: #fd8d76;
}
.theme-purple .profile-page .content__actions a:last-child {
  color: #f000ff;
}
.theme-green .profile-page .content__actions a:last-child {
  color: #42b883;
}
.theme-blue .profile-page .content__actions a:last-child {
  color: #00f2c3;
}
.profile-page .content__actions a:hover:first-child {
  background: #1d8cf8;
  color: #fff;
}
.theme-orange .profile-page .content__actions a:hover:first-child {
  background: #ff4086;
}
.theme-purple .profile-page .content__actions a:hover:first-child {
  background: #8700ff;
}
.theme-green .profile-page .content__actions a:hover:first-child {
  background: #1dcc45;
}
.theme-blue .profile-page .content__actions a:hover:first-child {
  background: #0098f0;
}
.profile-page .content__actions a:hover:last-child {
  background: #1d8cf8;
  color: #fff;
}
.theme-orange .profile-page .content__actions a:hover:last-child {
  background: #fd8d76;
}
.theme-purple .profile-page .content__actions a:hover:last-child {
  background: #f000ff;
}
.theme-green .profile-page .content__actions a:hover:last-child {
  background: #42b883;
}
.theme-blue .profile-page .content__actions a:hover:last-child {
  background: #00f2c3;
}
.profile-page .content__title {
  margin-top: 4.5rem;
  text-align: center;
  order: 1;
}
@media (max-width: 990px) {
  .profile-page .content__title {
    margin-top: 1.5rem;
  }
}
.profile-page .content__title h1 {
  margin-bottom: 0.1rem;
  font-size: 2.4rem;
}
@media (max-width: 990px) {
  .profile-page .content__title h1 {
    font-size: 1.8rem;
  }
}
.profile-page .content__title span {
  font-size: 1rem;
}
@media (max-width: 990px) {
  .profile-page .content__title span {
    font-size: 0.9rem;
  }
}
.profile-page .content__description {
  margin-top: 2.5rem;
  text-align: center;
  order: 2;
}
@media (max-width: 990px) {
  .profile-page .content__description {
    margin-top: 1.5rem;
    order: 3;
  }
}
.profile-page .content__description p {
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
}
@media (max-width: 990px) {
  .profile-page .content__description p {
    font-size: 1rem;
  }
}
.profile-page .content__list {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  list-style-type: none;
  order: 3;
}
@media (max-width: 990px) {
  .profile-page .content__list {
    margin-top: 1.5rem;
    order: 2;
  }
}
.profile-page .content__list li {
  padding: 0 1.5rem;
  text-align: center;
  font-size: 1rem;
}
@media (max-width: 990px) {
  .profile-page .content__list li {
    font-size: 0.8rem;
  }
}
.profile-page .content__list li span {
  display: block;
  margin-bottom: 0.1rem;
  font-weight: bold;
  font-size: 1.6rem;
}
@media (max-width: 990px) {
  .profile-page .content__list li span {
    font-size: 1.2rem;
  }
}
.profile-page .content__button {
  margin: 3rem 0 2rem;
  text-align: center;
  order: 4;
}
@media (max-width: 990px) {
  .profile-page .content__button {
    margin: 1.5rem 0 2.2rem;
  }
}
.profile-page .content__button .button {
  display: inline-block;
  padding: 1.2rem 1.8rem;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(100deg, #1d8cf8 30%, #3358f4 100%);
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
}
.theme-orange .profile-page .content__button .button {
  background: linear-gradient(100deg, #ff4086 10%, #fd8d76 100%);
}
.theme-purple .profile-page .content__button .button {
  background: linear-gradient(100deg, #8700ff 10%, #f000ff 100%);
}
.theme-green .profile-page .content__button .button {
  background: linear-gradient(100deg, #1dcc45 10%, #42b883 100%);
}
.theme-blue .profile-page .content__button .button {
  background: linear-gradient(100deg, #0098f0 10%, #00f2c3 100%);
}
.profile-page .content__button .button:hover {
  color: #fff;
}
@media (max-width: 990px) {
  .profile-page .content__button .button {
    padding: 1rem 1.4rem;
    font-size: 0.9rem;
  }
}
.profile-page .bg {
  width: 0%;
  height: 50%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
.profile-page .bg div {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(150deg, #1d8cf8 20%, #3358f4 100%);
}
.theme-orange .profile-page .bg div {
  background: linear-gradient(150deg, #ff4086 20%, #fd8d76 100%);
}
.theme-purple .profile-page .bg div {
  background: linear-gradient(150deg, #8700ff 20%, #f000ff 100%);
}
.theme-green .profile-page .bg div {
  background: linear-gradient(150deg, #1dcc45 20%, #42b883 100%);
}
.theme-blue .profile-page .bg div {
  background: linear-gradient(150deg, #0098f0 20%, #00f2c3 100%);
}
.profile-page .bg span:nth-child(1) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(2) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(3) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(4) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(5) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(6) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(7) {
  display: block;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  animation: floating 34s infinite;
}
.profile-page .bg span:nth-child(1) {
  width: 11rem;
  height: 11rem;
  top: 30%;
  left: 16%;
  background: rgba(255,255,255,0.05);
  animation-duration: 34s;
}
.profile-page .bg span:nth-child(2) {
  width: 8rem;
  height: 8rem;
  top: 18%;
  left: 1%;
  background: rgba(255,255,255,0.12);
  animation-duration: 40s;
}
.profile-page .bg span:nth-child(3) {
  width: 8rem;
  height: 8rem;
  top: 34%;
  right: 10%;
  background: rgba(255,255,255,0.1);
  animation-duration: 38s;
}
.profile-page .bg span:nth-child(4) {
  width: 4rem;
  height: 4rem;
  top: 34%;
  right: 3%;
  background: rgba(255,255,255,0.2);
  animation-duration: 34s;
}
.profile-page .bg span:nth-child(5) {
  width: 12rem;
  height: 12rem;
  top: 42%;
  right: 28%;
  background: rgba(255,255,255,0.1);
  animation-duration: 40s;
}
.profile-page .bg span:nth-child(6) {
  width: 8rem;
  height: 8rem;
  top: 72%;
  left: 6%;
  background: rgba(255,255,255,0.05);
  animation-duration: 38s;
}
.profile-page .bg span:nth-child(7) {
  width: 4rem;
  height: 4rem;
  top: 82%;
  right: 8%;
  background: rgba(255,255,255,0.05);
  animation-duration: 34s;
}
.theme-switcher-button {
  position: fixed;
  top: calc(50% - 3.6rem);
  right: 0;
  z-index: 2;
  padding: 1rem;
  background: rgba(0,0,0,0.6);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: inherit;
  color: #fd7686;
  cursor: pointer;
}
.theme-orange .theme-switcher-button {
  color: #fd7686;
}
.theme-purple .theme-switcher-button {
  color: #80f;
}
.theme-green .theme-switcher-button {
  color: #42b883;
}
.theme-blue .theme-switcher-button {
  color: #1d8cf8;
}
.theme-switcher-button svg {
  width: 1.1rem;
}
.theme-switcher-wrapper {
  width: 200px;
  position: fixed;
  top: calc(50% - 5rem);
  right: 5rem;
  z-index: 2;
  padding: 1.5rem 0;
  background: linear-gradient(#222a42, #1d253b);
  box-shadow: 0 10px 50px 0 rgba(0,0,0,0.2);
  border-radius: 0.25rem;
  opacity: 0;
  text-align: center;
  font-size: 1rem;
  color: inherit;
  visibility: hidden;
  transform: translateY(-15%) translateZ(0);
  transform-origin: 0 0;
  transition: transform 0.15s cubic-bezier(0.43, 0.195, 0.02, 1);
}
.theme-switcher-wrapper.is-open {
  opacity: 1;
  visibility: visible;
  transform: translate3d(0, 1px, 0);
}
.theme-switcher-wrapper span {
  display: block;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.9);
  cursor: default;
}
.theme-switcher-wrapper ul {
  margin-top: 0.8rem;
  list-style-type: none;
  font-size: 0;
}
.theme-switcher-wrapper li {
  display: inline-block;
  vertical-align: middle;
  padding: 0 0.2rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.9);
  cursor: pointer;
}
.theme-switcher-wrapper li em {
  display: block;
  border-radius: 1rem;
}
.theme-switcher-wrapper [data-theme] {
  width: 20px;
  height: 20px;
}
.theme-switcher-wrapper [data-theme="orange"] {
  background: #ff4086;
}
.theme-switcher-wrapper [data-theme="purple"] {
  background: #80f;
}
.theme-switcher-wrapper [data-theme="green"] {
  background: #42b883;
}
.theme-switcher-wrapper [data-theme="blue"] {
  background: #1d8cf8;
}
@-moz-keyframes floating {
  0% {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
@-webkit-keyframes floating {
  0% {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
@-o-keyframes floating {
  0% {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
@keyframes floating {
  0% {
    -webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
                        `
                        }
                    </style>
                </div>
            )

}

export default Profile;
