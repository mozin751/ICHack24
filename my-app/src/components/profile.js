import React, { useState } from "react";
import "../App.css";

function Profile() {

    return (
                <div class="profile-page">
                    <div class="content">
                        <div class="content__cover">
                            <div class="content__avatar"></div>
                            <div class="content__bull">
                            </div>
                        </div>
                        <div class="content__actions"><a href="./new_lesson">
                            <span>Create New Lesson</span></a><a href="./new_lesson">
                                <span>Message</span></a>
                                </div>
                        <div class="content__title">
                            <h1>Rohan Shah</h1><span>London, United Kingdom</span>
                        </div>
                        <div class="content__description">
                            <p>Computer Science Teacher</p>
                            <p>Secondary School</p>
                        </div>
                        <ul class="content__list">
                            <li><span>30</span>Students</li>
                            <li><span>15</span>Lessons</li>
                            <li><span>3</span>Classes</li>
                            <li><span>H306</span>Office</li>
                        </ul>
                        <div class="content__button">
                            <div class="button__border"></div>
                            <div class="button__bg"></div>
                            </div>
                    </div>
                    <style>
                    
                    </style>
                </div>
            )

}

export default Profile;
