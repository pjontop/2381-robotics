// counter variable which keeps track of time for automatic slideshow
slideshowCounter = 0;
// left value to shift the slideshow images
left = 0;
// getting the width of the window for later use 
pageWidth = document.documentElement.clientWidth;

teamsHTML = [
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Kevin Chen, Ricky Chen, Lawrence Ju, Chris Liu, Robert Macwha, Eric Luo, and Eren Suner</p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381a'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381A</h1><hr><img src='images/2381A.JPG'></td>",
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Allen Tao, Xiao Liu, Edward Song, Abby Towaij, Malav Mehta, Louis Zhang, and Erick Chen</p><h2>Awards</h2><p><uL><li>Excellence (Massey Vanier)</li><li>Tournament Champions (Brampton)</li><li>Tournament Champions (Terrerbone)</li><li>Excellence (Terrerbone)</li><li>Tournament Champtions (Ottawa)</li></uL></p><h2>Qualifications</h2><p><uL><li>Provincials (13th)</li></uL></p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381c'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381C</h1><hr><img src='images/2381C.JPG'></td>",
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Ray Bao, Daniel Chen, Linda Chu, Michelle Ma, Keiron Brandt, and Tharun Ganeshram</p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381d'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381D</h1><hr><img src='images/massey-vanier-11.jpg'></td>",
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Ayan Hafeez, Caleb Liu, David Hao, Anthony Eurokov, Matthew Biniam, Alex Chen, and Awwab Mahdi</p><h2>Awards</h2><p><uL><li>Skills Champion (Terrerbone)</li></uL></p><h2>Qualifications</h2><p><uL><li>Provincials (19th)</li><li>World Championship</li></uL></p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381w'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381W</h1><hr><img src='images/2381W.JPG'></td>",
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Jeffrey Li, Ethan Wu, Eshwar Chockalingam, Evan Guo, Jeffrey Zhang, Jenna Wang, and John Ma</p><h2>Qualifications</h2><p><uL><li>Provincials (6th)</li><li>World Championship</li></uL></p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381y'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381Y</h1><hr><img src='images/2381Y.JPG'></td>",
    "<td valign='center'><div data-aos='flip-left' style='transition-duration: 0.75s;' class='backgroundYellow'><h2>Members</h2><p>Sam Lu, Danny Zhang, Terrence Zhang, Alice Yang, Jamie Tsai, and Christina Zhang</p><h2>Awards</h2><p><uL><li>Design (Massey Vanier)</li><li>Innovate (WPI)</li><li>Build (Ottawa)</li></uL></p><h2>Qualifications</h2><p><uL><li>Provincials (38th)</li></uL></p><h2>Team Stats</h2><a target='_blank' href='https://vexdb.io/teams/view/2381z'>View Stats</a></div></td><td valign='top' style='transition-duration: 0.75s;' data-aos='fade-up'><h1>2381Z</h1><hr><img src='images/2381Z.JPG'></td>"
]

window.setInterval(function() {
    pageWidth = document.documentElement.clientWidth;
    pageWidth *= 1.02;
    slideshowCounter++;
    if (slideshowCounter >= 5) {
        slideshowCounter = 0;
        left -= pageWidth;
        if (left <= pageWidth * -10) {
            left = 0;
        }
        document.getElementById("s1").style.marginLeft = left;
    }

}, 1000);

function changeSlide(slide) {
    pageWidth = document.documentElement.clientWidth;
    pageWidth *= 1.02;
    left = slide * -pageWidth;
    document.getElementById("s1").style.marginLeft = left;
    slideshowCounter = 0;

}

function selectTeam(team) {
    document.getElementById('teamContent').innerHTML = teamsHTML[team];
    AOS.init();
    for (i = 0; i < 6; i++) {
        document.getElementsByClassName('tab')[i].classList.remove('activeTab');
    }
    document.getElementsByClassName('tab')[team].classList.add('activeTab');
}