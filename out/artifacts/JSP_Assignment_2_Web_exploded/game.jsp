<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="styles2.css" rel="stylesheet">
    <script defer src="dialoggame.js"></script>
    <title>Text Adventure</title>
</head>

<body>
<div id="start-screen" class="container">
    <h1>Dialog game</h1>
    <button id="start-btn" class="btn">Start</button>
</div>

<div id="game-container" class="container" style="display: none;">
    <div id="text">Text</div>

    <div id="option-buttons" class="btn-grid">
        <button class="btn">Option 1</button>
        <button class="btn">Option 2</button>
        <button class="btn">Option 3</button>
        <button class="btn">Option 4</button>
    </div>

</div>

<div id="music-controls">
    <audio id="background-music" src="resources/BGM.mp3" loop autoplay></audio>
    <audio id="button-click-sound" src="resources/click.mp3"></audio>
    <button id="play-button" class="music-button">Play Music</button>
    <button id="pause-button" class="music-button">Pause Music</button>
    <button id="exit-btn" class="btn">Exit Game</button>
</div>

<img id="story-image" src="" alt="Story illustration" style="max-width: 100%; display: none;" />
</body>
</html>
