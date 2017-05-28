import { Injectable } from '@angular/core'; //Import injectable from angular

@Injectable()//Use the decorator for the service
export class AppServices{ //Export a class AppServices
    getData(){ //Define a function getData which returns the array of objects
        return [
            {"name":"Angelina Pickles", "DOB":"29-12-1993", "email": "angie@email.com", "status": "active", "enroll":"http://edition.cnn.com/"},
            {"name":"Donald Duck", "DOB":"17-06-1934", "email": "donnie@email.com", "status": "active", "enroll":"http://channel.nationalgeographic.com/"},
            {"name":"Lola Bunny", "DOB":"02-12-1938", "email": "lola@email.com", "status": "active", "enroll":"https://www.tlc.com/"},
            {"name":"Uncle Scrooge", "DOB":"28-11-1912", "email": "uncle@email.com", "status": "active", "enroll":"http://www.foxnews.com/"}
    ]
    }
}
