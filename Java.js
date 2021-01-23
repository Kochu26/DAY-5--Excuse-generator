function excuse(){

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    var var1= who[Math.floor(Math.random()*who.length)];
    var var2=action[Math.floor(Math.random()*action.length)];
    var var3=what[Math.floor(Math.random()*what.length)];
    var var4=when[Math.floor(Math.random()*when.length)];
    return (var1 + ' ' + var2 + ' ' + var3 + ' ' + var4)
}
document.getElementById("proyecto").innerHTML = excuse();