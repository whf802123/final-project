const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const imageFolderPath = "./resources/";
const exitBtn = document.getElementById('exit-btn');

exitBtn.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    startScreen.style.display = 'block';
});

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
});

document.getElementById('play-button').addEventListener('click', function () {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
});

document.getElementById('pause-button').addEventListener('click', function () {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();
});

let state = {}

const textNodesXml = `
  <textNodes>
  
  <textNode id="1">
  <text>In this game, you will play the role of a detective, and today you received a special case. By making different choices, you will experience different storylines and ultimately lead to different endings. Good luck!</text>
  <options>
  <option nextText="2">
  <text>Accept a case</text>
  </option>
  </options>
  </textNode>
  
  
  <textNode id="2">
  <text>You have received a mysterious letter from someone who instructed you to go to a remote villa at 2 p.m and not to tell anyone about the content of the letter. You noticed that the wax seal on the envelope is very special and there are still two hours left until the specified time. </text>
  <options>
  <option nextText="3">
  <text>Go to the villa immediately</text>
  </option>
      
  <option nextText="4">
  <text>Start investigating the pattern's background</text>
  <setState>
  <information>true</information>
  </setState>
  </option>

  <option nextText="5">
  <text>It must be a prank, ignoring this letter</text>
  </option>
  </options>
  <img>envelope.png</img>
  </textNode>
  
  
  <textNode id="3">
  <text>This area is a typical wealthy area and very quiet. You stop not far from the villa and walk slowly towards the door. There is a person dressed as a security guard standing at the door.</text>
  <options>
  <option nextText="22">
    <text>Walk towards the door</text>
  </option>
  
  <option nextText="14">
    <text>Walk around the villa</text>
  </option>
  </options>
  <img>bodyguard.png</img>
  </textNode>


  <textNode id="22">
  <text>You walk towards the main entrance and the security guard notices you. "Hey, stop!" the security shouts. "Who are you? Why are you here?"</text>
  <options>
  <option nextText="30">
    <text>Be honest</text>
  </option>
  
  <option nextText="31">
    <text>Benjamin hired me to help</text>
    <requiredState>
    <information>true</information>
    </requiredState>
  </option>
  </options>
  <img>bodyguard.png</img>
  </textNode>


  <textNode id="30">
    <text>After listening to your words, the security guard dragged you into the villa. Then you lost consciousness with a gunshot.</text>
    <options>
    <option nextText="-1">
        <text>Restart</text>
    </option>
    </options>
    <img>died.png</img>
  </textNode>


  <textNode id="31">
  <text>"Another one? Do we really need so many people to do this kind of thing?" The security guard opens the door for you. "Go up to the top attic." The interior of this villa is very luxurious, and it is not something that ordinary people can afford to live in. </text>
  <options>
  <option nextText="32">
    <text>Follow the order</text>
  </option>
  
  <option nextText="33">
    <text>Attempt to attack the security</text>
  </option>
  </options>
  <img>interior.png</img>
  </textNode>

  <textNode id="32">
  <text>There are many documents on the table in this room, and there is a local map and many written papers on the wall. Two men in suits are looking at you, and after a while, one of them hands you a folder and says, 'You handle these tables.'. You glance at these documents and it seems like some financial statements.</text>
  <options>
  <option nextText="42">
  <text>Read documents</text>
  </option>
  
  <option nextText="43">
  <text>Ask for reasons</text>
  </option>
  </options>
  <img>room.png</img>
  </textNode>


  <textNode id="43">
    <text>"Why read these tables?" You decisively raised your question. "There's no way Benjamin didn't tell you, unless you're not one of us," One of the men looks at you coolly and says. "I can't believe that the incompetent security guard let you in here like that.". It seems that you have too many questions. They pin you to the ground, and after a while you lose consciousness.</text>
    <options>
    <option nextText="-1">
        <text>Restart</text>
    </option>
    </options>
    <img>died.png</img>
  </textNode>


  <textNode id="42">
  <text>You start reading these tables and notice that these tables are about taxes paid by the tobacco company, and some are income and expenditure statements. You are not an expert of finance, but your instinct tells you that this company's money isn't totally clean. The two men had been crunching numbers, muttering to themselves, so you also have to pretend write some numbers on paper. After a while, "Hey, do you guys want to go outside to have a break and grab a cigar?", one of them says. "Sure!", another one answers without hesitation. </text>
  <options>
  <option nextText="40">
  <text>Consent</text>
  </option>
  
  <option nextText="41">
  <text>Refuse</text>
  </option>
  </options>
  <img>folder.png</img>
  </textNode>


  <textNode id="40">
  <text>"Why not?" You accept their invitation. After smoking a cigar for a while, one man says. "Let's see if our old friend wants to talk now." Then he opens the back door with a key, and a step leading to the basement which is very cold and humid appeared. "I'll be down later." Another one answers. You slowly walk down the steps, and find that there is another door. After opening the door, you are shocked by what you see inside. Mr.Edward's private doctor in handcuffs fainted and leaned back in the chair. </text>
  <options>
   <option nextText="44">
  <text>Wait and see</text>
  </option>
  </options>
  <img>steps.png</img>
  </textNode>


  <textNode id="44">
  <text>He wakes the doctor loudly and says, "Now will you tell me where the treasure is?". The doctor notices you and says "No way!". Then another man comes downstairs and says "Come on, don't force us to use violence." He makes a deliberate clucking of his fist. </text>
  <options>
  <option nextText="61">
  <text>Stop them</text>
  </option>
  
   <option nextText="62">
  <text>Behold</text>
  </option>
  </options>
  <img>doctor.png</img>
  </textNode>
  
  
  <textNode id="61">
  <text>"Maybe we just need to starve him for two or three more days, it's not too late to do it.", You persuade the man. "Fine, today is your lucky day." The man says that, and you go back upstairs together. The doctor looks at you with gratitude. You work for a while, and then a quarrel is heard outside the villa. You seem to be familiar with the voices. </text>
  <options>
  <option nextText="48">
  <text>Go out to check</text>
  </option>
  </options>
  <img>doctor.png</img>
  </textNode>
  
  
  <textNode id="62">
  <text>You don't say anything and just watch. The doctor is beaten black and blue, then you go back upstairs together. When you leave, you can't even look the doctor in the eye. You work for a while, and then a quarrel is heard outside the villa. You seem to be familiar with the voices. </text>
  <options>
  <option nextText="48">
  <text>Go out to check</text>
  </option>
  </options>
  <img>doctor.png</img>
  </textNode>
  
  
  <textNode id="41">
  <text>"I'm not going out. I have to make up time because of the late.", You refuse their invitation. "Fine, that is your loss. These cigars ain't cheap." With that, the two men go downstairs and out. You check their notes immediately and find out that Mr.Edward's company is guilty of serious tax evasion and bribery. If convicted of these charges, the company could be fined heavily and Mr.Edward would lose his reputation.</text>
  <options>
  <option nextText="46">
  <text>Get out of here and report Mr.Edward</text>
  </option>
  
   <option nextText="47">
  <text>Wait for them to come back</text>
  </option>
  </options>
  <img>notebook.png</img>
  </textNode>


  <textNode id="46">
  <text>You left the villa without any obstacles. Then you successfully reported Edward's company to the government, and he received a huge fine and went to prison for bribery. But next day, the headline of the newspaper is a sudden fire in the luxury villa, the cause is currently unknown, and you realize that the truth has still not been revealed.</text>
  <options>
  <option nextText="-1">
        <text>Restart</text>
  </option>
  </options>
  <img>burning.png</img>
  </textNode>


  <textNode id="47">
  <text>After a while, they go back upstairs and you are back in your seat in time to pretend to work. You work for a while, and then a quarrel is heard outside the villa. You seem to be familiar with the voices. </text>
  <options>
  <option nextText="48">
  <text>Go out to check</text>
  </option>
  </options>
  <img>car.png</img>
  </textNode>


  <textNode id="33">
  <text>The security guard doesn't have time to react and is punched by you, and then two people in suits hear sounds and come downstairs. They rush towards you, you are powerless to parry, and then lose consciousness.</text>
  <options>
  <option nextText="-1">
        <text>Restart</text>
  </option>
  </options>
  <img>died.png</img>
  </textNode>


  <textNode id="4">
  <text>You remember receiving a gift from a previous client a month ago. It was a box of expensive cigars with this image on the package. The client is Benjamin, the son of the boss of the largest tobacco company in the region, and he asked you to investigate the suspected poisoning of his father. The murderer was the private doctor. Fortunately, the insufficient dosage of the poison did not cause death. You dialed Benjamin's phone number, but it is a dead number.</text>
  <options>
  <option nextText="3">
    <text>Go to the villa</text>
  </option>
 
  <option nextText="6">
    <text>Go to Benjamin's Home</text>
  </option>
  </options>
  <img>cigars.png</img>
  </textNode>
  
  
  <textNode id="5">
    <text>The next day, the headline of the newspaper was a sudden fire in the luxury villa, and the cause is currently unknown. Do you feel regretful or fortunate?</text>
    <options>
    <option nextText="-1">
        <text>Restart</text>
    </option>
    </options>
    <img>burning.png</img>
  </textNode>
    
    
   <textNode id="6">
    <text>Benjamin opens the door for you with a smile on his face and invited you in, explaining to you that he had changed his phone number. He asked why you suddenly visited?</text>
    <options>
    <option nextText="7">
        <text>Call a spade a spade</text>
    </option>
    
    <option nextText="8">
        <text>Ask about his father's condition</text>
    </option>
    </options>
    <img>visiting.png</img>
   </textNode>
   
   
  <textNode id="7">
  <text>“Interesting,” Benjamin says. "This is our family's previous villa, which has been uninhabited for a long time. Although it's a bit late now, we can go together and I'm curious about what happened." </text>
  <options>
  <option nextText="20">
    <text>Consent</text>
  </option>
  
  <option nextText="21">
    <text>Refuse</text>
  </option>
  </options>
  <img>villa.png</img>
  </textNode>
  
  
  <textNode id="20">
  <text>After arriving there, the agreed time has already passed. This area is a typical wealthy area and very quiet. You stop not far from the villa and walk slowly towards the door. Suddenly, several people dressed like security guards press you to the ground. You struggle hard, but it doesn't help, then you lose consciousness.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
  <img>died.png</img>
  </textNode>
  
  
  <textNode id="21">
  <text>After arriving there, the agreed time has already passed. This area is a typical wealthy area and very quiet. You stop not far from the villa and walk slowly towards the door. Suddenly, several people dressed like security guards pressed you to the ground. You shout for help, but this place is too remote and no one can hear your voice, then you lost consciousness.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
  <img>died.png</img>
  </textNode>
  
  
  <textNode id="8">
  <text>"Thank you for your concern. I still can't imagine a nurse secretly poisoning my father," Benjamin says. "Our family is so kind to her, fortunately my father is fine. By the way, Do you like the cigar I gave you last time? That's a limited edition style that's not for sale." </text>
  <options>
  <option nextText="9">
    <text>I'm not a smoker, but thank you for your kindness.</text>
  </option>
  
  <option nextText="10">
    <text>I really like it. Can you give me another box?</text>
  </option>
  </options>
  <img>visiting.png</img>
  </textNode>

   
  <textNode id="10">
  <text>"Of course, I'll go to the basement to help you find it now, but it may take a while for you to sit down.“ Benjamin brings you a cup of coffee and goes downstairs.</text>
  <options>
  <option nextText="9">
    <text>Waiting for him while drinking coffee</text>
  </option>
  
  <option nextText="12">
    <text>Search his room</text>
  </option>
  </options>
     <img>coffee.png</img>
  </textNode>
   
   
  <textNode id="9">
  <text>After a while, Benjamin brings you a new box of cigars. After you thank him, you leave his home and head for the villa. After arriving there, the agreed time has already passed, This area is a typical wealthy area and very quiet. You stop not far from the villa and walk slowly towards the door.</text>
  <options>
  <option nextText="13">
    <text>Knock at  a door</text>
  </option>
  
  <option nextText="14">
    <text>Walk around the villa</text>
  </option>
  </options>
     <img>villa.png</img>
  </textNode>
   
   
  <textNode id="13">
  <text>After a while, a security guard opens the door with a small crack and shouts at you. “Who are you? Why are you here?”</text>
  <options>
  <option nextText="30">
    <text>Be honest</text>
  </option>
  
  <option nextText="31">
    <text>Benjamin hired me to help</text>
  </option>
  </options>
     <img>interior.png</img>
  </textNode>
   
   
  <textNode id="14">
  <text>You circle to the back of the villa. At this point, You notice that this villa has a back door, and there is also a ladder outside that leads to the attic. To open the door, it seems like you need a key.</text>
  <options>
  <option nextText="26">
    <text>Attempt to open the back door</text>
    <requiredState>
    <key>true</key>
    </requiredState>
  </option>
  
  <option nextText="27">
    <text>Climb the ladder</text>
  </option>
  
  <option nextText="13">
    <text>Return to the front door and knock</text>
  </option>
  </options>
     <img>ladder.png</img>
  </textNode>
   
   
  <textNode id="27">
  <text>There are two men in suits in the room, who look at you in surprise and then take out their guns and shoot at you. You can't dodge, then unconsciously fall off the ladder.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
  <img>died.png</img>
  </textNode>
   
   
  <textNode id="26">
  <text>After opening the back door, a step leading to the basement appeared. The basement is very cold and humid, creating a sharp contrast to the grandeur of the villa's exterior. You slowly walk down the steps, and find that there is another door.</text>
  <options>
  <option nextText="28">
    <text>Open the door</text>
  </option>
  </options>
     <img>steps.png</img>
  </textNode>
   
   
  <textNode id="28">
  <text>A man in handcuffs fainted and leaned back in the chair. Upon closer inspection, you find that this person is the private doctor. He is supposed to be serving his sentence in prison, why does he appear here?</text>
  <options>
  <option nextText="29">
    <text>Wake him up</text>
  </option>
  </options>
     <img>handcuffs.png</img>
  </textNode>
  
  
  <textNode id="29">
  <text>You shake his chair. "Why are you here, detective?" The doctor wakes up and asks in a weak tone. You say, "I was just about to ask you this question, shouldn't you be in prison?" The doctor shakes his head and says with a bitter smile, "We've been fooled, Benjamin replaced my potion with his own poison. Because he learned that his father Mr.Edward was leaving the family treasure to me. Once I am convicted of murder, the will will also become invalid."</text>
  <options>
  <option nextText="35">
    <text>Put your coat over him</text>
  </option>
  </options>
     <img>doctor.png</img>
  </textNode>
  
  
  <textNode id="35">
  <text>"But why did Mr.Edward do this?", You raise your question and put your coat over him. "Thank you. I'm much warmer now." Doctor says, "Benjamin idles around all day and only comes to Mr.Edward when he wants money. And he often does some dirty things relying on his father's influence. I think this is a lesson that the father wants to teach his children. In addition, Benjamin also has connections with the police and imprisoned me here after getting me out of prison, wanting to ask where the treasure was hidden.”</text>
  <options>
  <option nextText="37">
    <text>"Did you send me the letter?"</text>
  </option>
  <option nextText="38">
    <text>"Is there anyone else in this villa?"</text>
  </option>
  </options>
     <img>coat.png</img>
  </textNode>
  
  
  <textNode id="37">
  <text>"Letter? Sorry, I know nothing about it and don't even have a chance to write a letter.” Doctor says.</text>
  <options>
  <option nextText="38">
    <text>"Is there anyone else in this villa?"</text>
  </option>
  
  <option nextText="39">
    <text>Take the doctor out of here</text>
  </option>
  </options>
     <img>envelope.png</img>
  </textNode>
  
  
  <textNode id="38">
  <text>"There are three more people here, all equipped with guns. You must be careful.” Doctor says.</text>
  <options>
  <option nextText="37">
    <text>"Did you send me the letter?"</text>
  </option>
  
  <option nextText="39">
    <text>Take the doctor out of here</text>
  </option>
  </options>
     <img>gun.png</img>
  </textNode>
  
   
  <textNode id="39">
  <text>You try to help the doctor up. "Please wait a moment, detective," The doctor says. "There are some rats in the police, please call Mr.Edward to ask him to bring someone here. His phone number is ..."</text>
  <options>
  <option nextText="50">
    <text>Dial number</text>
  </option>
  </options>
     <img>phone.png</img>
  </textNode>
   
   
  <textNode id="50">
  <text>You dial Mr.Edward's number, and after a long time there was no answer. The doctor shakes his head helplessly. "Maybe Edward's having problems now too. You might have to go to him yourself." Suddenly, you hear the door of basement open, someone is coming down.</text>
  <options>
  <option nextText="51">
    <text>Hide behind the door for a surprise attack</text>
  </option>
  
  <option nextText="52">
    <text>Rush out and confront</text>
  </option>
  </options>
     <img>steps.png</img>
  </textNode>
   
   
  <textNode id="51">
  <text>After the man opens the door, you push it hard on his head. The man screams in pain and you take out your cigar box and continue to punch him, soon he faints. At that moment another man outside the door hears the noise and comes. And you tackle him before he pull out his gun. </text>
  <options>
  <option nextText="53">
    <text>Question their purpose</text>
  </option>
  </options>
     <img>man.png</img>
  </textNode>
   
   
  <textNode id="52">
  <text>You suddenly rush out the door and tackle him. The man was too startled to dodge, then you knock him unconscious with a succession of attacks. At that moment another man outside the door hears the noise and comes. And you tackle him before he pull out his gun. </text>
  <options>
  <option nextText="53">
    <text>Question their purpose</text>
  </option>
  </options>
     <img>man.png</img>
  </textNode>
   
   
  <textNode id="53">
  <text>You ask him out loud what they want, and the man makes a full confession. It turns out Benjamin had hired them to search Mr.Edward's former study for evidence of tax evasion and bribery. And intended to intimidate Mr. Edward into making a new will. Then your cell phone rings. It's Mr.Edward. </text>
  <options>
  <option nextText="54">
    <text>Answer the call</text>
  </option>
  
  <option nextText="55">
    <text>Not answer the call</text>
  </option>
  </options>
     <img>phone.png</img>
  </textNode>
   
   
  <textNode id="54">
  <text>"Detective, it seems like you already found my doctor. I sent the earlier letter, and was supposed to meet you at the villa, but just got in trouble with the IRS. Now I am on my way to the villa, please wait for me, thank you!" Mr. Edward's voice come over the line.</text>
  <options>
  <option nextText="55">
    <text>Get out of here and report him</text>
  </option>
  
  <option nextText="56">
    <text>Wait here</text>
  </option>
  </options>
     <img>phone.png</img>
  </textNode>
   
   
  <textNode id="55">
  <text>You don't want to listen to him. You lock them in the basement, then go upstairs and collect evidence. Then you take your evidence to the government, and report the case to your most trusted sheriff. But you're still a little late, the headline of the newspaper is a sudden fire in the luxury villa on the next day. The cause is currently unknown. </text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
     <img>burning.png</img>
  </textNode>
  
  
  <textNode id="56">
  <text>You wait at the basement door for a while, and then a quarrel is heard outside the villa. You help the doctor out of the basement.</text>
  <options>
  <option nextText="57">
    <text>Go out to check</text>
  </option>
  </options>
     <img>car.png</img>
  </textNode>
   
   
  <textNode id="12">
  <text>This is an old-fashioned study with some chemical experimental instruments. Several sheets of paper with writing on them are neatly stacked on the table and there is an exquisite box next to it. </text>
  <options>
  <option nextText="15">
    <text>Read the files</text>
  </option>
  
  <option nextText="16">
    <text>Attempt to open the box</text>
  </option>
  </options>
     <img>study.png</img>
  </textNode>
   
   
  <textNode id="15">
  <text>The above few files are tax reports, filled with data. You continued to browse and found several documents regarding the details of the estate. At this moment, you heard footsteps going upstairs, so you quickly organized documents and returned to your seat.</text>
  <options>
  <option nextText="11">
    <text>Inquire about inheritance rights</text>
  </option>
  
  <option nextText="9">
    <text>Get out of here</text>
  </option>
  </options>
     <img>files.png</img>
  </textNode>
   
   
  <textNode id="11">
  <text>Benjamin, who was originally smiling, suddenly showed a hint of anger. "Mr. Detective, I appreciate your help with our family, but please do not inquire about our family matters. If there's nothing else, please bring this box of cigars back." Benjamin takes off his glasses and places them on the table.</text>
  <options>
  <option nextText="18">
    <text>Question closely</text>
  </option>
  
  <option nextText="9">
    <text>Get out of here</text>
  </option>
  </options>
     <img>glasses.png</img>
  </textNode>
   
   
  <textNode id="18">
  <text>"Detective, you don't happen to know anything, do you? Or did you just flip through my files? This is really impolite," Benjamin is already getting angry. "My patience is running out. The door is right there. Hurry up and get out!"</text>
  <options>
  <option nextText="19">
    <text>Get to the bottom of this</text>
  </option>
  
  <option nextText="9">
    <text>Get out of here</text>
  </option>
  </options>
     <img>door.png</img>
  </textNode>
   
   
   <textNode id="19">
  <text>"It seems that you already knew everything about it. You deserve to be called a detective." After speaking, he suddenly picks up a chair and throw it at your head. You couldn't dodge in time and fell to the ground, feeling dizzy. Benjamin angrily pounces on you as you touch the cigar box.</text>
  <options>
  <option nextText="24">
    <text>Smash him with the cigar box</text>
    <setState>
    <key>true</key>
    </setState>
  </option>
  
  <option nextText="25">
    <text>Struggle with all your might</text>
  </option>
  </options>
     <img>cigars.png</img>
  </textNode>
   
   
  <textNode id="24">
  <text>You smash Benjamin, who fell to the ground in response. After regaining composure, you open the box, take the key from it, and drive to the villa. As a detective, you realize that things are far from over. After arriving there, the agreed time has already passed, This area is a typical wealthy area and very quiet. You stop not far from the villa and walk slowly towards the door.</text>
  <options>
  <option nextText="13">
    <text>Knock at a door</text>
  </option>
  
  <option nextText="14">
    <text>Walk around the villa</text>
  </option>
  </options>
     <img>villa.png</img>
  </textNode>
   
   
  <textNode id="25">
    <text>You cannot break free from Benjamin. You can only let him hit you hard on the head, and soon you lose consciousness.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
    <img>died.png</img>
  </textNode>
   
   
  <textNode id="16">
  <text>This box has a mechanism, but after a few taps, you open it and there is a delicate old-fashioned key inside. At this moment, you hear footsteps going upstairs. You must make a quick decision and then close the box.</text>
  <options>
  <option nextText="9">
    <text>Take it </text>
    <setState>
    <key>true</key>
    </setState>
  </option>
  
  <option nextText="9">
    <text>Leave it</text>
  </option>
  </options>
     <img>key.png</img>
  </textNode>
   
   
  <textNode id="57">
  <text>The people who are quarrelling are Edward and Benjamin. Benjamin and his security guard have been restrained by several men in black. Seeing you come, Edward says to you, "Thank you for saving my doctor. I will give you a rich reward. I'm sure you already know everything, but it doesn't matter. I just found out what my son was really up to so I'm gonna burn all the evidence now." </text>
  <options>
  <option nextText="64">
    <text>Block and threaten</text>
  </option>
  
  <option nextText="65">
    <text>Go home and act like nothing happened</text>
  </option>
  
  <option nextText="66">
    <text>Listen to the doctor</text>
  </option>
  </options>
     <img>Edward.png</img>
  </textNode>
   
   
  <textNode id="48">
  <text>The people who are quarrelling are Edward and Benjamin. Benjamin and his security guard have been restrained by several men in black. Seeing you come, Edward says to you, "Detective, I sent the earlier letter, and was supposed to meet you at the villa, but just got in trouble with the IRS. I just found out what my son was really up to so I'm gonna burn all the evidence now." Then the other two panick and are overpowered by two men dressed in black. </text>
  <options>
  <option nextText="64">
    <text>Block and threaten</text>
  </option>
  
  <option nextText="65">
    <text>Go home and act like nothing happened</text>
  </option>
  </options>
     <img>Edward.png</img>
  </textNode>

   
  <textNode id="64">
  <text>You're not gonna let him get away with it, but you're not acting rationally. Some men in black pin you to the ground, and you lose consciousness.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
    <img>died.png</img>
  </textNode>
  
  
  <textNode id="65">
  <text>You leave here, and the next day you receive a huge sum of cash as if nothing had happened.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
    <img>money.png</img>
  </textNode>
   
   
  <textNode id="66">
  <text>"I took care of you when you were ill. I know who you are. You are not a bad person. Please don't make another mistake.", doctor earnestly said. "It's not too late." Edward regretted it and gave up the plan. The next day he voluntarily paid back the tax to the IRS and was punished accordingly. Benjamin was also arrested and jailed for kidnapping and attempted homicide. And you made headlines the next day.</text>
  <options>
  <option nextText="-1">
  <text>Restart</text>
  </option>
  </options>
    <img>newspaper.png</img>
  </textNode>
   
   
</textNodes>
`;


function parseTextNodes(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    const textNodeElements = xmlDoc.getElementsByTagName("textNode");

    const textNodes = Array.from(textNodeElements).map(textNodeElement => {
        const id = parseInt(textNodeElement.getAttribute("id"));
        const text = textNodeElement.getElementsByTagName("text")[0].textContent;
        const imageElement = textNodeElement.getElementsByTagName("img");
        const image = imageElement.length > 0 ? imageFolderPath + imageElement[0].textContent : null;
        const options = Array.from(textNodeElement.getElementsByTagName("option")).map(optionElement => {
            const nextText = parseInt(optionElement.getAttribute("nextText"));
            const optionText = optionElement.getElementsByTagName("text")[0].textContent;

            const requiredStateElements = optionElement.getElementsByTagName("requiredState");
            const setStateElements = optionElement.getElementsByTagName("setState");

            const parseState = (stateElements) => {
                const state = {};
                if (stateElements.length > 0) {
                    const stateNode = stateElements[0].children;
                    Array.from(stateNode).forEach(stateElement => {
                        state[stateElement.tagName] = stateElement.textContent === "true";
                    });
                }
                return state;
            }

            const requiredState = parseState(requiredStateElements);
            const setState = parseState(setStateElements);

            return {
                text: optionText,
                requiredState: Object.keys(requiredState).length > 0 ? requiredState : null,
                setState: Object.keys(setState).length > 0 ? setState : null,
                nextText: nextText,
            };
        });

        return {
            id: id,
            text: text,
            options: options,
            image: image
        };
    });

    return textNodes;
}
const textNodes = parseTextNodes(textNodesXml);

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    const storyImage = document.getElementById("story-image");
    if (textNode.image) {
        storyImage.src = textNode.image;
        storyImage.style.display = "block";
    } else {
        storyImage.style.display = "none";
    }

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => {
                const sound = document.getElementById('button-click-sound')
                sound.currentTime = 0
                sound.play()
                selectOption(option)
            })
            optionButtonsElement.appendChild(button)
        }
    })
}


function showOption(option) {
    if (option.requiredState === null) {
        return true;
    }

    return Object.keys(option.requiredState).every(key => option.requiredState[key] === state[key]);
}


function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}


startGame()
