$(function() {
var anim = false;
function typed(finish_typing) {
  return function(term, message, delay, finish) {
      anim = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
          term.set_prompt('');
          var interval = setInterval(function() {
              term.insert(message[c++]);
              if (c == message.length) {
                  clearInterval(interval);
                  // execute in next interval
                  setTimeout(function() {
                      // swap command with prompt
                      finish_typing(term, message, prompt);
                      anim = false
                      finish && finish();
                  }, delay);
              }
          }, delay);
      }
  };
}
var typed_prompt = typed(function(term, message, prompt) {
  // swap command with prompt
  term.set_command('');
  term.set_prompt(message + ' ');
});
var typed_message = typed(function(term, message, prompt) {
  term.set_command('');
  term.echo(message)
  term.set_prompt('[[;#f4c025;]manish@tilda:~] ');
});

function progress(percent, width) {
    var size = Math.round(width*percent/100);
    var left = '', taken = '', i;
    for (i=size; i--;) {
        taken += '=';
    }
    if (taken.length > 0) {
        taken = taken.replace(/=$/, '>');
    }
    for (i=width-size; i--;) {
        left += ' ';
    }
    return '[' + taken + left + '] ' + percent + '%';
}
var animation = false;
var timer;
var prompt;
var string;
$('body').terminal(function(cmd, term) {
  var finish = false;
  var msg = "Wait I'm executing ajax call";
  term.set_prompt('[[;#f4c025;]manish@tilda:~] ');
  var commandText = function(text){
    return "[[;#009688;]" + text + "]";
  }
  var list = function(text){
    return "[[;#2196F3;]" + text + "]";
  }
  var listHead = function(text){
    return "[[;#5b727f;]" + text + "]";
  }
  var listText = function(text){
    return "[[i;#009688;]" + text + "]";
  }
  var highLight = function(text){
    return "[[iu;#009688;]" + text + "]";
  }
  var whoami = "[[ib;#5b727f;]Hello world!, my name is  ]"+highLight("Manish Kumar,")
  +"[[;#5b727f;]A designer, developer, gamer, engineer, loser and ...I don't know. May be I'm not an expert in any particular field but I just do things.]";

  if (cmd == 'help') {
      term.echo(commandText("   contact")+"          display contact infomation");
      term.echo(commandText("   whoami")+"           display my short brief");
      term.echo(commandText("   clear")+"            clear terminal text");
      term.echo(commandText("   address")+"          display address infomation");
      term.echo(commandText("   about")+"            information about this page");
      term.echo(commandText("   techskills")+"       display my technical skills");
      term.echo(commandText("   recent")+"           display my recent projects/intern");
      term.echo(commandText("   age")+"              display my Age");
      term.echo(commandText("   cgpa")+"             display my cgpa");
    }
  else if (cmd=='whoami'){
      term.echo("[[ib;#5b727f;]Hello world!, my name is \n]"+highLight("Manish Kumar \n")
      +"[[i;#5b727f;]A designer, developer, gamer, engineer, loser and ...I don't know. May be I'm not an expert in any particular field but I just do things.]\n"
    );
  }
  else if (cmd == 'age') {
      term.echo("[[i;#5b727f;]00010100 (Years)]");
    }
  else if (cmd == 'about') {
      term.echo("[[i;#FF9800;] V 0.9.1\n");
    }
  else if (cmd == 'school') {
      term.echo("[[i;#5b727f;]Jawahar Navodaya Vidalaya, Sawai Madhopur]");
    }
  else if (cmd == 'address') {
      term.echo("[[i;#5b727f;]SE-05, Girnar Hostel, IIT Delhi, Hauz khas, New Delhi, 110016]");
    }
  else if (cmd == 'cgpa') {
      term.echo("[[i;#5b727f;]..... .-.-.- ---.. (Figure it out yourself)]");
    }
  else if (cmd == 'ls') {
      term.echo("[[i;#dd4b39;]/Porn   /Rick and Morty   /Documents    /Videos   /Games    witcher3.zip]");
    }
  else if (cmd == 'ok') {
      term.echo("Thanks!");
    }
  else if (cmd=='contact'){
    term.echo(listHead("    Get in touch via: \n \n")+"[[i;#dd4b39;]     Email:]"+"          manish9461@gmail.com\n"
    +"[[i;#55acee;]     Twitter:]"+"        @man15h_l\n"
    +"[[i;#dd4b39;]     Google Plus:]"+"    +Manish Kumar\n"
    +"[[i;#0084ff;]     Facebook:]"+"       man1.h");
  }
  else if (cmd == 'recent') {
      term.echo(listHead("Project: \n")+
      list("1")+listText(" Automated Wall Painting Mechanism, Design of Machines, Dr. Harish Hirani - IIT Delhi (Jan, 2015 - May, 2015)\n")
      +list("2")+listText(" Thermal Effect on Buildings, B. Premchandran - IIT Delhi (2015-2016)\n")
      +list("3")+listText(" CFD Analysis of Multimode Heat Transfer in Buildings, BTP, B. Premchandran - IIT Delhi (July, 2016 - Oct, 2016)\n")
      +list("4")+listText(" Archive System Development, IITD Webmail Service, Dr.Huzur Saran(HOD) CSC-IIT Delhi (July, 2016 - Present)\n")
      +list("5")+listText(" Full stack developer, Hexxa CSS, IIT Delhi (Open Source Project)\n")
      +list("6")+listText(" Backend developer, Open House '17, IIT Delhi (April, 2017)\n")
      +list("7")+listText(" Full stack developer, IITD On AIR, IIT Delhi (Oct, 2016 - Dec, 2016)\n\n")
      +listHead("Intern: \n")
      +list("1")+listText(" Front-end Developer, 10x Smart Technologies Pvt. Ltd. Mumbai (Dec, 2015 - Dec, 2015)\n")
      +list("2")+listText(" Part Time Web Developer, Bevy Network Pvt. Ltd., Gurgaon (Mar, 2016 - Apr, 2016)\n")
      +list("3")+listText(" Website Developer, Goryd, Eneo Technologies Pvt. Ltd. (May, 2016 - Jun, 2016)\n\n")
      +listHead("Work: \n")
      +list("1")+listText(" Angular & Firebase developer, Retake Entertainment, IIT Delhi (Mar, 2016 - Present)\n")
      +list("2")+listText(" Full stack web developer/ Python developer, Psylab Pvt. Ltd., Gurgram (Mar, 2017 - Present)\n")
      +list("3")+listText(" Engineer Analyst / Angular Developer, Infosys, Unknows (Aug 2017- Present)\n \n")
      +listHead("Activites: \n")
      +list("1")+listText(" Indus Action Organisation, Social Campaign 2014-15:")+'[[i;#F4511E;] An NGO dedicated to education of underprivileged children]\n'
      +list("2")+listText(" Professional Ethics And Social Responsibility Film-making Workshop\n"));
    }
    else if (cmd == 'techskills') {
        term.echo(listHead("Skills: \n")+
      listText("      - AngularJS, C++, CSS3, Django, Flask, Git, HTML5, Java, JavaScript, MongoDB, MySQL, Nlp, NodeJS, php, Python\n")+
      listText("      - Adobe suits, Android Studio, Ansys Fluent, Ansys, ICEM CFD, Atom, Autodesk Inventor, Creo, MATLAB, MS Office, SolidWorks"));
      }
    else if (cmd == 'graphics') {
           var i = 0, size =91;
           prompt = term.get_prompt();
           string = progress(0, size);
           term.set_prompt(progress);
           animation = true;
           (function loop() {
               string = progress(i++, size);
               term.set_prompt(string);
               if (i <60) {
                   timer = setTimeout(loop, 100);
               }
               else if (60<i<100) {
                  window.location.href = "http://man15h.github.io/graphics/index.html";
               }else {
                   term.echo(progress(i, size) + ' [[b;green;]OK]')
                       .set_prompt(prompt);
                   animation = false

               }
           })();
         }
  else{
    term.echo("[[;#f45957;]this is not a valid command, try 'help' for more information]");
  }
}, {
  name: 'xxx',
  greetings: null,
  width: 1200,
  height: 300,
  onInit: function(term) {
      // first question
      var msg = '“Time you wasted enjoying is not wasted time”                            - John Lennon \n \n';
      typed_message(term, msg, 40, function() {
          // typed_prompt(term, "what's your name:", 100);
      });
  },
  keydown: function(e) {
      //disable keyboard when animating
      if (anim) {
          return false;
      }
  }
});
});
