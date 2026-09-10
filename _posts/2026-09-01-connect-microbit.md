---
title: Connect your micro:bit
layout: post
date: 2026-09-01
tags: [microbit, how-to]
excerpt: "How to connect a micro:bit and get set up ready to start coding."
published: true
---

To work on any of the micro:bit projects on this site, you will first need to connect your microbit. 

Step 1: Go to the MakeCode editor: https://makecode.microbit.org/

Step 2: Click on the New Project button, give you project a name and click Create

IMAGE

IMAGE

Step 3: Click the three dots next to the Download button in the bottom left of the screen, and choose &**Connect Device**.

IMAGE

Step 4: Using the USB cable provided, plug your micro:bit into your computer. You should see a red light turn on! 

PHOTO

Step 5: Press Next and then Pair. You should see a list of devices to pair - you might see other things listed there. You are looking for something with a name like "BBC micro:bit". Select it and click Connect.

IMAGE

Step 6: To test that everything is working, create a simple script like this:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
```

Step 7: Now click Download to transfer the program to your micro:bit. Once that's done you should be able to press the A button on the micro:bit and see the heart icon! 

PHOTO

Important! Always eject your micro:bit before disconnecting it.

WINDOWS IMAGE - MAC IMAGE
