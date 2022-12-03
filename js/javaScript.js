const text = ["HTML","CSS","JavaScript",1,432,true,"C++"]
// let name_one ="ion";
const body = document.querySelector("body")
//tipe project
text.forEach((element,index)=>{
    const tag_div= document.createElement("div")
    const tag_a = document.createElement("a")
    tag_a.className = "tag_a";
    tag_a.id ="tag_unical";
    tag_a.innerHTML = element; //добавляет текст в теги 
    tag_div.append(tag_a)
    body.append(tag_div)  //добавляет тег внутри тега
})





















// const text_1 = text[2];
// const text_2 = text[1];
// const text_3 = text[4];
// const array =text_1 +" "+ text_2 +" "+ text_3;

// console.log(array);
// console.log(text_2);

// let obj = {
//     array: text,
//     name : name_one,
// }
// //console.log(obj.array);