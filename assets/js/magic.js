$(document).ready(function(){
    console.log("wow cool");
    const whoAmI = [`I am a person on the Earth learning the language that we use to produce content on the internet. How fortunate to be alive at a time when our technology is on the brink of so many new and exciting developments. I am hoping to use computer code to create programs that improve our world. I am committed to environmental and social justice, and to being a good, reliable, and honest person in general.`,`As an undergraduate, I studied Liberal Arts, Enironmental Studies, and creative writing at <a id="inParagraph" href="http://www.prescott.edu/" target="_blank">Prescott College</a>. I was fortunate to experience the splendors of the natural world, and fell in love with the marine ecosytems, and with the Sonoran Desert. I now live in Tucson, Arizona. 🌵`,`I like to have fun, get exercise, spend time with my family and our animals, write and perform music, see live music, run, play scrabble, try new things, learn new things, cook, ride a skateboard, learn how to surf, eat, laugh, make jokes, watch some decent TV, do home improvement projects, sleep when tired, and just generally enjoy the experience of life.`,`Have a look around my portfolio website, and don't hesitate to get in touch, with comments, questions, concerns, or inspirations. I welcome your interest in whatever all of this means to you. :-)`,`(click to find out)`];
    const whatCanIDo = [`Technical Skills: <br/><a id="inParagraph" href="https://www.javascript.com/" target="_blank">JavaScript</a> - <a id="inParagraph" href="https://nodejs.org/" target="_blank">Node.js</a> - <a id="inParagraph" href="https://www.mysql.com/" target="_blank">MySQL</a> - <a id="inParagraph" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">HTML5</a> - <a id="inParagraph" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">CSS3</a>`,`Soft Skills: <br/> Sing, Snowboard, Bartend, Barista, Play Guitar, Draw Abstract Pictures`,`Skill Skills: <br/> Try new things, learn new things`,`(click to find out)`];
    const why = [`Why not?`,`(click to find out)`]
    let whoIndex = 0;
    let whatIndex = 0;
    let whyIndex = 0;
    $(".whoClick").on("click", function(){
        console.log("clik'd!");
        if(whoIndex >= whoAmI.length) {
            whoIndex = 0;
        }
        $(".pContent")
            .html(whoAmI[whoIndex]);
        whoIndex++;
    });
    $(".whatClick").on("click", function(){
        console.log("clik'd!");
        if(whatIndex >= whatCanIDo.length) {
            whatIndex = 0;
        }
        $(".pContent")
            .html(whatCanIDo[whatIndex]);
        whatIndex++;
    });
    $(".whyClick").on("click", function(){
        console.log("clik'd!");
        if(whyIndex >= why.length) {
            whyIndex = 0;
        }
        $(".pContent")
            .html(why[whyIndex]);
        whyIndex++;
    });
});