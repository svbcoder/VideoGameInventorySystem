// This component is a form that adds individual video games from user input
import React from 'react';

const AddVideoGameItemForm = props => {
    return (
        <form onSubmit={ props.addVideoGameItem }>
          <div>
            {/* Video game name text field */}
            <div class = "row">
                <div class = "form-group col-lg-6">
                    <label>Name of Video Game</label>
                    <input type="text" className = "form-control input-sm" name="videogame" value={props.videogame} onChange={ props.handleInputChange}/>
                </div>
            </div>
              {/* Video game cost text field */}
            <div class = "row">
                <div class = "form-group col-lg-6">
                    <label>Cost of Video Game </label>
                    <input type="number" className = "form-control input-sm" name="cost" value={props.cost} onChange={ props.handleInputChange} />
                </div>
            </div>
              {/* Button that adds the video game to the list */}
            <button class = "btn btn-primary">Add</button>
          </div>
        </form>
    )
}

export default AddVideoGameItemForm;