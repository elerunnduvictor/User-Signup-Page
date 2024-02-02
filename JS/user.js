// the JavaScript code here is for disabling form submissions if there are invalid fields
document.addEventListener('DOMContentLoaded', function() {
    // Fetch all the forms that need custom Bootstrap validation styles
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

// this function submits the form and also makes a POST request using FEtch API
function submitForm() {
    var form = document.getElementById('myForm');
    if (form.checkValidity()) {
        // If the form is valid, construct JSON object
        var formData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            phonenumber: document.getElementById('phonenumber').value,
            address: document.getElementById('address').value,
            age: document.getElementById('age').value,
            dateofbirth: document.getElementById('dateofbirth').value,
            emergencycontact: document.getElementById('emergencycontact').value,
            emergencyemail: document.getElementById('emergencyemail').value,
            country: document.getElementById('country').value,
            city: document.getElementById('city').value,
            zip: document.getElementById('zip').value
        };

        // Convert the object to JSON
        var jsonData = JSON.stringify(formData);


        // Make a POST request using Fetch API

        /* fetch('https://myfunapi.fake/user/signup', {
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',

                        body: jsonData
                    })
            .then(response => response.json())
                .then(data => {
                    // Handle the response data as needed
                    console.log('API response:', data);
                })
                .catch(error => {
                    // Handle errors during the request
                    console.error('Error:', error);
                }); */

        // Log the JSON data
        console.log(jsonData);
    } else {
        // If the form is not valid, trigger validation and show error messages
        form.classList.add('was-validated');
    }




    // Fake UserHelper library for mock purposes
    const UserHelper = {
        createUser: function() {
            // This simulates creating a new user object in the database
            console.log('User object created in the database');
            return { userId: 'mockUserId' };
        },
        readUserData: function(userId) {
            // This simulates reading user data from the database
            console.log('Reading user data for userId:', userId);
            return { firstname: 'John Doe', email: 'john.doe@example.com' };
        },
        saveUser: function(userId, userData) {
            // This simulates saving user data to the database
            console.log('Saving user data for userId:', userId, 'Data:', userData);
            return true; // Assume success for the mock
        }
    };

    // MockAPI function
    /* function mockAPI(jsonData) {
    // Return object with initial values
    const response = { message: '', result: false };

    try {
        // Validate required fields
        if (!jsonData || !jsonData.name || !jsonData.email) {
            response.message = 'FirstName, Phonenumber, Address, DOB, Emergency Contact name, Country, City, and email fields are required.';
            return response;
        }

        // Create a new user object
        const newUser = UserHelper.createUser();

        // Read all data from the JSON and set it in the user object
        newUser.firstname = jsonData.firstname;
        newUser.lastname = jsonData.lastname;
        newUser.email = jsonData.email;
        newUser.phonenumber = jsonData.phonenumber;
        newUser.address = jsonData.address;
        newUser.age = jsonData.age;
        newUser.dateofbirth = jsonData.dateofbirth;
        newUser.emergencycontact = jsonData.emergencycontact;
        newUser.emergencyemail = jsonData.emergencyemail;
        newUser.country = jsonData.country;
        newUser.city = jsonData.city;
        newUser.zip = jsonData.zip;

        // Save the user object
        const saveResult = UserHelper.saveUser(newUser.userId, newUser);

        // Check for errors during save
        if (!saveResult) {
            response.message = 'Error saving user data.';
            return response;
        }

        // Success
        response.message = 'User data saved successfully.';
        response.result = true;
        return response;
    } catch (error) {
        // Handle any unexpected errors
        console.error('Unexpected error:', error);
        response.message = 'An unexpected error occurred.';
        return response;
    }
} */

    function mockAPI(jsonData) {
        // Return object indicating success
        return { message: 'User data saved successfully.', result: true };
    }

}
const apiResponse = mockAPI(jsonData);
console.log(apiResponse);

// User class definition
class User {
    constructor() {
        // Initialize fields
        this.firstname = '';
        this.email = '';
        this.address = '';
    }

    // Setter method for the 'name' field
    setField(fieldName, value) {
        if (typeof value === 'string') {
            this[fieldName] = value;
            return true;
        }
        return false;
    }

}

// Example usage
const myUser = new User();

const nameSetSuccessful = myUser.setField('firstname', 'John Doe');
console.log('Name set successful:', nameSetSuccessful);

const emailSetSuccessful = myUser.setField('email', 'john.doe@example.com');
console.log('Email set successful:', emailSetSuccessful);

const addressSetSuccessful = myUser.setField('address', '1234 Fake St');
console.log('Address set successful:', addressSetSuccessful);

// Check the user object
console.log('User object:', myUser);