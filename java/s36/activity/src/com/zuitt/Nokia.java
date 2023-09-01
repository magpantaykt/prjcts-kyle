package com.zuitt;

public class Nokia implements Cellphone{

    @Override
    public void sendText(String message, String recipient) {
        System.out.println("Text message sent to: "+recipient+"\n"+message);
    }

    @Override
    public void playMusic(String songName) {
        System.out.println("The song "+songName+" is playing");
    }
}
