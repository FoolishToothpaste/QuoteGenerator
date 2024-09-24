const img = document.querySelector("#image");
const text = document.querySelector("#text");
const but = document.querySelector('button');

but.addEventListener('click', function Rand(){
    const choice = Math.floor(Math.random()*10);
    let imgstring = "";
    let textstring = "";

    switch(choice)
    {
        case 1: //Einstein
            imgstring="https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg";
            textstring="\"It's better to piss in the sink than sink in the piss\" -- Lebron James";
            break;
        case 2: //Scorsese
            imgstring="https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg";
            textstring="\"ABSOLUTE CINEMA\" -- Quentin Tarantino";
            break;    
        case 3: //Tagore
            imgstring="https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2011/5/6/1304698764515/Tagore-007.jpg?width=465&dpr=1&s=none";
            textstring="\"তুমি রান্না হোইয়া গিয়াছো\" -- Roddur Roy";
            break;
        case 4: //Soham
            imgstring="https://i.ibb.co/nk81Qjf/girlsoham.jpg";
            textstring="\"Tru real ok alright.\" -- Who?";
            break;
        case 5: //Glorb
            imgstring="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/Aliens.jpg";
            textstring="\"Gleep Glorb Berzeleklb Bleep\" -- Glorb";
            break;
        case 6: //Vader
            imgstring="https://i.ytimg.com/vi/nIAYtHiCjN8/maxresdefault.jpg";
            textstring="\"NOOOOOOOOOOOOOO\" -- Darth Vader";
            break;
        case 7: //Lincoln
            imgstring="https://cdn.britannica.com/72/220272-138-7355553C/pop-culture-Abraham-Lincoln.jpg?w=800&h=450&c=crop";
            textstring="\"He\'s right behind me isn\'t he?\" -- JFK";
            break;
        case 8: //MJ
            imgstring="https://akm-img-a-in.tosshub.com/aajtak/images/story/201610/micheal_jackson_sm_fb_650_101316030018.jpg";
            textstring="\"Hee Hee\" -- John Lennon";
            break;
        case 9: //Steve
            imgstring="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/jack-black-as-steve-looking-excitedly-with-fire-around-him-in-a-minecraft-movie.jpg";
            textstring="\"I am placing blocks and shi cuz I'm in fu'in Minecraft\" -- Jack Black";
            break;
        case 0: //HT
            imgstring="https://www.rollingstone.com/wp-content/uploads/2024/06/Screen-Shot-2024-06-25-at-4.25.18-PM.jpg?w=1581&h=1054&crop=1";
            textstring="\"Hawk Tuah respect button --> \" -- Jonkler";
            break;
    }
        text.removeChild(text.firstChild);
        const quo = document.createTextNode(textstring);
        const h1 = document.createElement('h1');
        h1.setAttribute('class','quotes');
        h1.appendChild(quo);
        text.appendChild(h1);
        img.setAttribute('src', imgstring);

    
})