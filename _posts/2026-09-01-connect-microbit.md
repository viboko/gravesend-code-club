---
title: Connect your micro:bit
layout: post
date: 2026-09-01
tags: [microbit, how-to]
excerpt: "How to connect a micro:bit and get set up ready to start coding."
published: true
---

To work on any of the [micro:bit projects](/tags/microbit) on this site, you will first need to connect your microbit. 

## Step 1: Open the editor

Go to the MakeCode editor: [makecode.microbit.org](https://makecode.microbit.org/)

## Step 2: Start a new project

Click on the New Project button, give you project a name and click Create

![todo](/assets/img/connect-microbit/new-project.png){: .how-to-image}

![todo](/assets/img/connect-microbit/create-project.png){: .how-to-image}

## Step 3: Start connection process

Click the three dots next to the Download button in the bottom left of the screen, and choose &**Connect Device**.

![todo](/assets/img/connect-microbit/connect-device.png){: .how-to-image}

## Step 4: Connect the device

Using the USB cable provided, plug your micro:bit into your computer. You should see some lights turn on! 

![todo](/assets/img/connect-microbit/microbit-connected.jpg){: .how-to-image}

## Step 5: Pair the device

Press Next and then Pair. You should see a list of devices to pair - you might see other things listed there. You are looking for something with a name like "BBC micro:bit". Select it and click Connect.

![todo](/assets/img/connect-microbit/connect-dialog.png){: .how-to-image}

## Step 6: Quick test

To test that everything is working, create a simple script like this:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
```

## Step 7: Download the program

Now click Download to transfer the program to your micro:bit. Once that's done you should be able to press the A button on the micro:bit and see the heart icon! 

![todo](/assets/img/connect-microbit/heart-icon.png){: .how-to-image}

<div class="callout callout--important" markdown="1">
**Important:** Always eject your micro:bit before disconnecting it. Please follow the guide for your platform:

* Windows: [Safely remove hardware in Windows](https://support.microsoft.com/en-us/windows/hardware/safely-remove-hardware-in-windows)
* Mac: [Eject a storage device](https://support.apple.com/en-gb/guide/mac-help/mchl027f1d66/mac)
</div>
