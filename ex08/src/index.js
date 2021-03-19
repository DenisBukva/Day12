var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScropt", "Node", "HTML & CSS"]
    },
];
function lookUpProfile(name, prop){
    var hasName = false;
    var hasProp = false;
    for (var i = 0; i<contacts.length; i++){
        if(contacts[i].firstName == name){
            hasName = true;
        }
        if(contacts[i].hasOwnProperty(prop)){
            hasProp = true;
        }
        if(hasName && hasProp){
            return contacts[i][prop];
        }
        
        }
        if(hasName == false){
            return "No such contact"
        }
        if(hasProp == false){
            return "No such property"
        }

}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));

module.exports = lookUpProfile;