const news = [
    'know galaxies a galaxy is any of the systems of stars and interstellar matter that make up the universe',
'black holes a black hole is a region of spacetime where gravity is so strong that nothing can escape from it',
'nasa enters the solar atmosphere a spacecraft has touched the sun, nasa’s parker solar probe has now flown through the sun’s upper atmosphere',
'weird things in outer space space is dominated by invisible electromagnetic forces that we typically don’t feel. it’s also of matter that we never experience on earth.',
'2021 review from commercial space race to operations on the red planet space exploration was in the public spotlight',
'space travel in 2022 the exciting space exploration missions for 2022',
'journey to mars how nasa is preparing humans for a journey to Mars ',
'kessler syndrome how runaway space junk could trap humans on earth',
'china space plan china astc has planned more than 40 space launches for 2022.',
'asteroid set to fly-by earth the rock will pass earth at a distance of 1.98 million km',
'earth conditions the earth may have been more inhospitable to life than scientists previously thought.',
'earth climate change there have been a large variation in the earth climate',
'pacific tic tac toe the lines in the ocean are a common atmospheric feature',
'webb telescope webb will show us things never before seen by any other telescope',
'2022 space technologies the five biggest space technology trends for 2022',
'redwire corporation the face of space exploration over the next decade',
'high tech sleeping bag in space astronauts can suffer from vision problems',

];

function search_new(){
    const input = document.getElementById('search-input').value.toLowerCase();
    for (i = 0; i< news.length; i++){
        if (news[i].includes(input)){
            document.getElementById(i+1+'-n').style.display = 'block';
        }
        else{
            document.getElementById(i+1+'-n').style.display = 'none';
        }
    }
    if (input == ''){
        for (i = 0; i< news.length; i++){
            document.getElementById(i+1+'-n').style.display = 'none';
            
        }
    }
}

$(document).ready(function (){
    $('#1-n').click(function (){
        $("#main").load("News/Main-1.txt");
        $(window).scrollTop(0);
    });
    $('#2-n').click(function (){
        $("#main").load("News/Main-2.txt");
        $(window).scrollTop(0);
    });
    $('#3-n').click(function (){
        $("#main").load("News/Main-3.txt");
        $(window).scrollTop(0);
    });
    $('#4-n').click(function (){
        $("#main").load("News/Main-4.txt");
        $(window).scrollTop(0);
    });
    $('#5-n').click(function (){
        $("#main").load("News/Main-5.txt");
        $(window).scrollTop(0);
    });
    $('#6-n').click(function (){
        $("#main").load("News/New-1-1.txt");
        $(window).scrollTop(0);
    });
    $('#7-n').click(function (){
        $("#main").load("News/New-1-2.txt");
        $(window).scrollTop(0);
    });
    $('#8-n').click(function (){
        $("#main").load("News/New-1-3.txt");
        $(window).scrollTop(0);
    });
    $('#9-n').click(function (){
        $("#main").load("News/New-1-4.txt");
        $(window).scrollTop(0);
    });
    $('#10-n').click(function (){
        $("#main").load("News/New-2-1.txt");
        $(window).scrollTop(0);
    });
    $('#11-n').click(function (){
        $("#main").load("News/New-2-2.txt");
        $(window).scrollTop(0);
    });
    $('#12-n').click(function (){
        $("#main").load("News/New-2-3.txt");
        $(window).scrollTop(0);
    });
    $('#13-n').click(function (){
        $("#main").load("News/New-2-4.txt");
        $(window).scrollTop(0);
    });
    $('#14-n').click(function (){
        $("#main").load("News/New-3-1.txt");
        $(window).scrollTop(0);
    });
    $('#15-n').click(function (){
        $("#main").load("News/New-3-2.txt");
        $(window).scrollTop(0);
    });
    $('#16-n').click(function (){
        $("#main").load("News/New-3-3.txt");
        $(window).scrollTop(0);
    });
    $('#17-n').click(function (){
        $("#main").load("News/New-3-4.txt");
        $(window).scrollTop(0);
    });
});