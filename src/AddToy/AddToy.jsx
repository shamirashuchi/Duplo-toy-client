import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const AddToy = () => {
    return (
        <div>
            <Header></Header>
            <h1>Add A Toy</h1>
            <form id="addToyForm">
                <label for="pictureUrl">Picture URL:</label>
                <input type="text" id="pictureUrl" name="pictureUrl" required/><br></br>

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/><br></br>

                <label for="sellerName">Seller Name:</label>
                <input type="text" id="sellerName" name="sellerName" readonly/><br></br>

                <label for="sellerEmail">Seller Email:</label>
                <input type="email" id="sellerEmail" name="sellerEmail" readonly/><br></br>

                <label for="subCategory">Sub-category:</label>
                <select id="subCategory" name="subCategory" required>
                <option value="">Select Sub-category</option>
                <option value="Math Toys">Math Toys</option>
                <option value="Language Toys">Language Toys</option>
                <option value="Science Toys">Science Toys</option>
                </select><br></br>

                <label for="price">Price:</label>
                <input type="number" id="price" name="price" required/><br></br>

                <label for="rating">Rating:</label>
                <input type="number" id="rating" name="rating" required/><br></br>

                <label for="quantity">Available Quantity:</label>
                <input type="number" id="quantity" name="quantity" required/><br></br>

                <label for="description">Description:</label><br></br>
                <textarea id="description" name="description" rows="4" cols="50"></textarea><br></br>

                <input type="submit" value="Submit"/>
            </form>
             <Footer></Footer>
        </div>
    );
};

export default AddToy;