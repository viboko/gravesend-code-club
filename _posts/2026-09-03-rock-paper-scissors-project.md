---
title: Rock! Paper! Scissors!
layout: project
date: 2026-09-03
tags: [microbit, project]
excerpt: "Turn a micro:bit into an expert Rock, Paper, Scissors player."
---

<div class="callout callout--important" markdown="1">
Important! Before you get started, make sure your micro:bit is connected to your computer: [Connect your micro:bit](/2026/09/01/connect-microbit)
</div>


## What you will make

<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---run?id=_gAg42F0RuVm4" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>

## Step 1: Display a countdown... 3... 2... 1... 

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.pause(1000)
    basic.showString("2")
    basic.pause(1000)
    basic.showString("1")
    basic.pause(1000)
})
```

* *How do you make the countdown faster or slower?*
* *Can you play a musical tone every time a number is displayed?*
* *Instead of repeating the commands, can you make this work with a loop?*

## Step 2: Make a new variable

Call the variable **choice**.

## Step 3: Set the variable to a random number

Add this command to the code you already have:

```makecode
choice = randint(1, 3)
```

## Step 4: Display the icon for the chosen thing

Finally, add this: 

```makecode
if (choice == 1) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
if (choice == 2) {
    basic.showIcon(IconNames.Square)
}
if (choice == 3) {
    basic.showIcon(IconNames.Scissors)
}
```

* *Can you play a different sound when each icon is shown?*
* *Can you make the chosen icon flash on the display?*

## Challenges

* Could you make a cheat mode? e.g. if you tilt the microbit to the left it always picks Scissors*
* *You could make the user make their choice by pressing A for Rock, B for Scissors and A+B for Paper. Can you make the micro:bit display who won?* **TRICKY** 🤔
