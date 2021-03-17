const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const connections = [
    {
        
        id: "1",
        name:"International Coffee Hour for you",
        EventCategory: "Event",
        HostedBy: "ISSO",
        date: "2021-03-16",
        Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
        Location: "Woodward 230",
        StartTime:"2PM",
        EndTime: "2:30PM",
        image: "1.jpg"
        
    },
    {
        id: "2",
        name:"Charlotte Host Family",
        EventCategory: "Event",
        HostedBy: "ISSO",
        date: "2021-03-17",
        Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
        Location: "Woodward 230",
        StartTime:"2PM",
        EndTime: "2:30PM",
        image: "./images/1.jpg"
        },
    {
        id: "3",
        name:"Speed Friending",
        EventCategory: "Event",
        HostedBy: "ISSO",
        date: "2021-03-18",
        Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
        Location: "Woodward 230",
        StartTime:"2PM",
        EndTime: "2:30PM",
        image: "./images/1.jpg"
        } ,
    {
        id: "4",
        name:"OPT Registration Workshop",
        EventCategory: "Workshop",
        HostedBy: "ISSO",
        date: "2021-03-24",
        Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
        Location: "Woodward 130",
        StartTime:"2PM",
        EndTime: "2:30PM",
        image: "./images/1.jpg"
        }  ,
    {
            id: "5",
            name:"CPT Registration Workshop",
            EventCategory: "Workshop",
            HostedBy: "ISSO",
            date: "2021-03-25",
            Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
            Location: "Woodward 130",
            StartTime:"2PM",
            EndTime: "2:30PM",
            image: "./images/1.jpg"
            },
    {
                id: "6",
                name:"Q&A Session with CCI Faculties",
                EventCategory: "Workshop",
                HostedBy: "ISSO",
                date: "2021-03-26",
                Details:"Meet people from around the world, play games and enjoy really good conversations*. Or just relax and listen in with a tasty, homemade beverage. Plus no reservations required!",
                Location: "Woodward 130",
                StartTime:"2PM",
                EndTime: "2:30PM",
                image: "./images/1.jpg"
                }  
    
]

exports.save = function(story) {
    story.id = uuidv4();
    connections.push(story);
} 

exports.find = () =>  connections;
exports.findById= function(id){
    return connections.find(connection=>connection.id === id);
};

exports.updateById = function(id, newStory){
    let story = connections.find(story=>story.id === id);
    if(story){
        story.name = newStory.name;
        story.EventCategory = newStory.EventCategory;
        story.HostedBy = newStory.HostedBy;
        story.date = newStory.date;
        story.Location = newStory.Location;
        story.StartTime = newStory.StartTime;
        story.EndTime = newStory.EndTime;
        story.image = newStory.image;
        return true
    }else {
        return false;
    }
}

exports.deleteById = function(id){
    let index = connections.findIndex(story =>story.id === id);
    if(index !== -1){
        connections.splice(index, 1);
        return true;
    }else{
        return false;
    }
}

        