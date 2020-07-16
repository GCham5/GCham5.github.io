import React from 'react'

const FindABeat = ({updateBeatList}) => {
    return (
        //  Inspired by https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp
        <div className="sidenav">
            <p id="sideNavTitle">FILTER BY</p>
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
                    <input type="checkbox" name="Rock" value="Rock"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Rock">Rock</label>
                </div>
            </div>

            <div className="sideNavSection">
                <p>Mood</p>
                <div className="sideNavSubSection" id="moodInfo">

                    <input type="checkbox" name="Happy" value="Happy"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Happy">Happy</label>
                    <br />
                    <input type="checkbox" name="Sad" value="Sad"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Sad">Sad</label>
                    <br />
                    <input type="checkbox" name="Motivated" value="Motivated"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Motivated">Motivated</label>
                    <br />
                    <input type="checkbox" name="Relaxed" value="Relaxed"
                       onClick={() => {updateBeatList('genreInfo','moodInfo')}} />
                    <label htmlFor="Relaxed">Relaxed</label>
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