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
                    <label for="RnB">RnB</label>
                    <br />
                    <input type="checkbox" name="Hip-Hop" value="Hip-Hop"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Hip-Hop">Hip-Hop</label>
                    <br />
                    <input type="checkbox" name="Trap" value="Trap"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Trap">Trap</label>
                    <br />
                    <input type="checkbox" name="Rock" value="Rock"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Rock">Rock</label>
                </div>
            </div>

            <div className="sideNavSection">
                <p>Mood</p>
                <div className="sideNavSubSection" id="moodInfo">

                    <input type="checkbox" name="Happy" value="Happy"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Happy">Happy</label>
                    <br />
                    <input type="checkbox" name="Sad" value="Sad"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Sad">Sad</label>
                    <br />
                    <input type="checkbox" name="Motivated" value="Motivated"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Motivated">Motivated</label>
                    <br />
                    <input type="checkbox" name="Relaxed" value="Relaxed"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="Relaxed">Relaxed</label>
                    <br/>





                    <input type="radio" name="FoodCategory" value="All" checked="checked"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">All</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Vegetables"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Vegetables</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Fruits"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Fruits</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Dairy"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Dairy Products</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Beverages"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Juice/Beverages</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Cooking"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Cooking Products</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Bakery"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Bakery</label>
                    <br />
                    <input type="radio" name="FoodCategory" value="Meats"
                        onClick="populateListProductChoices('dietInfo', 'foodCat', 'displayProduct')" />
                    <label for="FoodCategory">Meats</label>
                </div>
            </div>

        </div>
    )

}

export default FindABeat