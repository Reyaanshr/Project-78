var image = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAs5WErBAPHcXFfMfL7MG8PXHfCnDQcS9mA&usqp=CAU",
    "https://imgix.bustle.com/uploads/image/2020/6/18/5a8e1fa2-eab8-4048-a072-daa0b4094367-dad-throwing-daughter.png?w=350&h=298&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5026666666666667&fp-y=0.2622601279317697",
    "https://thumbs.dreamstime.com/z/grandfather-portrait-old-man-wearing-glasses-grey-hair-mustache-wearing-sweater-cartoon-grandpa-senior-man-standing-vector-86364474.jpg",
    "https://i.pinimg.com/originals/db/f5/08/dbf508e27715f8ed3730bec349092789.jpg",
    "https://media.istockphoto.com/vectors/two-boys-smile-and-hug-vector-id625457882?k=6&m=625457882&s=612x612&w=0&h=OFxWm_XMDYZgeKbPcVH4XfbQmWZofu9GIiEMEIsFykU=",
];
var names = [
    "Saumita","Subhendu","Subhash","Reba","Kaushtab"
];
var i = 0;
function update()
{
    i++;
    var number_of_names = 4
    if(i > number_of_names){
        i = 0;
    }
    var updatedImg = image[i];
    var updatedName = names[i];
    document.getElementById("family").src = updatedImg;
    document.getElementById("names").innerHTML = updatedName;
}