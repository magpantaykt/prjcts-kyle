package com.zuitt;

public class Samsung implements Cellphone, Camera{

    @Override
    public void sendText(String message, String recipient) {
        System.out.println("Text message sent to: "+recipient+"\n"+message);
    }

    @Override
    public void playMusic(String songName) {
        System.out.println("The song "+songName+" is playing");
    }

    @Override
    public void takePicture() {
        System.out.println("Smile for the camera");
    }

    @Override
    public void takeVideo() {
        System.out.println("Capturing video of your best moments");
    }
}
