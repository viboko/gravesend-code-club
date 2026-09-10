---
title: Connect your micro:bit
layout: post
date: 2026-09-01
tags: [micro:bit, how-to]
excerpt: "How to connect a micro:bit and get set up ready to start coding."
published: true
---

To work on any of the [micro:bit projects](/tags/microbit) on this site, you will first need to connect your microbit.

## 🌐 Step 1: Open the editor

Go to the MakeCode editor: [makecode.microbit.org](https://makecode.microbit.org/){:target="_blank" rel="noopener noreferrer"}

## 🆕 Step 2: Start a new project

Click on the New Project button, give your project a name and click Create.

![The MakeCode home screen, with the New Project button highlighted](/assets/img/connect-microbit/new-project.webp){: .how-to-image}

![The New Project dialog, asking for a project name](/assets/img/connect-microbit/create-project.webp){: .how-to-image}

## 🖱️ Step 3: Start connection process

Click the three dots next to the Download button in the bottom left of the screen, and choose **Connect Device**.

![The Download menu, with the Connect Device option highlighted](/assets/img/connect-microbit/connect-device.webp){: .how-to-image}

## 🔌 Step 4: Connect the device

Using the USB cable provided, plug your micro:bit into your computer. You should see some lights turn on!

![A micro:bit connected to a USB cable, with its lights on](/assets/img/connect-microbit/microbit-connected.webp){: .how-to-image}

## 🔗 Step 5: Pair the device

Press Next and then Pair. You should see a list of devices to pair - you might see other things listed there. You are looking for something with a name like "BBC micro:bit". Select it and click Connect.

![The device pairing dialog, showing a BBC micro:bit in the list](/assets/img/connect-microbit/connect-dialog.webp){: .how-to-image}

## 🧪 Step 6: Quick test

To test that everything is working, create a simple script like this:

```makecode
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
```

## ⬇️ Step 7: Download the program

Now click Download to transfer the program to your micro:bit. Once that's done you should be able to press the A button on the micro:bit and see the heart icon!

![A micro:bit displaying a heart icon on its LEDs](/assets/img/connect-microbit/heart-icon.webp){: .how-to-image}

<div class="callout callout--important" markdown="1">
**Important:** Always eject your micro:bit before disconnecting it.

When you download a program, your computer keeps talking to the micro:bit for a moment afterwards to finish writing it - a bit like still scribbling the last few words on a page after you've said "I'm done!" If you pull the USB cable out during that moment, the program can get muddled up and stop working properly. Ejecting first tells your computer to wait until it's truly finished before you unplug it.

Please follow the guide for your platform:

* Windows: [Safely remove hardware in Windows](https://support.microsoft.com/en-us/windows/hardware/safely-remove-hardware-in-windows){:target="_blank" rel="noopener noreferrer"}
* Mac: [Eject a storage device](https://support.apple.com/en-gb/guide/mac-help/mchl027f1d66/mac){:target="_blank" rel="noopener noreferrer"}

</div>
