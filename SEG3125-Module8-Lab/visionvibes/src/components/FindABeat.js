import React from 'react';
import langData from '../data/language';

const FindABeat = ({updateBeatList}) => {

   const lang = langData['lang']

    return (
        //  Inspired by https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp
        <div className="sidenav">
            <p id="sideNavTitle">{lang === 'EN' ? "FILTER BY" : "FILTRER PAR"}</p>
            <div className="sideNavSection">
                <p>Genre</p>
                <div className="sideNavSubSection" id="genreInfo">
                    <input type="checkbox" name="RnB" value="RnB"
                        onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="RnB">RnB</label>
                    <br />
                    <input type="checkbox" name="Hip-Hop" value="Hip-Hop"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Hip-Hop">Hip-Hop</label>
                    <br />
                    <input type="checkbox" name="Trap" value="Trap"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Trap">Trap</label>
                    <br />
                    <input type="checkbox" name="Gospel" value="Gospel"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Gospel">Gospel</label>
                </div>
            </div>

            <div className="sideNavSection">
                <p>{lang === 'EN' ? 'Mood' : 'Ambiance'}</p>
                <div className="sideNavSubSection" id="moodInfo">

                    <input type="checkbox" name="Happy" value="Happy"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Happy">{lang === 'EN' ? 'Happy' : 'Heureux'}</label>
                    <br />
                    <input type="checkbox" name="Sad" value="Sad"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Sad">{lang === 'EN' ? 'Sad' : 'Triste'}</label>
                    <br />
                    <input type="checkbox" name="Motivated" value="Motivated"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Motivated">{lang === 'EN' ? 'Motivated' : 'Motivé'}</label>
                    <br />
                    <input type="checkbox" name="Relaxed" value="Relaxed"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Relaxed">{lang === 'EN' ? 'Relaxed' : 'Relâché'}</label>
                    <br/>





                    {/* <input type="radio" name="FoodCategory" value="All" checked="checked"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">All</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Vegetables"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Vegetables</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Fruits"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Fruits</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Dairy"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Dairy Products</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Beverages"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Juice/Beverages</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Cooking"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Cooking Products</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Bakery"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Bakery</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Meats"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="FoodCategory">Meats</label> */}
                </div>
            </div>

        </div>
    )

}

export default FindABeat