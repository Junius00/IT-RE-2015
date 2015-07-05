# DOCUMENTATION FOR AWESOME RE PROJECT

-This documentation is set up to ensure that the connection between the front-end and back-end is up

##login
    -As its name suggests, logs user in 
    -root is at sign_in


    -sign_in:
        -renders a login page (TODO: GET THE NAME)
        -POST the request to sign_in_check

    -sign_in_check
        -takes the POST data from sign_in
        -format of request: {
        	"username" : "foo"
        	"password" : "bar"
        }

        -format of response: {
        	"logged_in" : "true || failed || inactive"
        }

        !! FYI : || means "or"
        !! NOTE: this function only authenticates the user. Please process the input with front end script
                 before making a request# it-re-2015-backend-only
