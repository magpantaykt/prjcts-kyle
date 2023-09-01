package com.zuitt;

public class Main {
    public static void main(String[] args) {

        Nokia myNokia = new Nokia();
        Samsung mySamsung = new Samsung();

        myNokia.sendText("Hello from the 90's", "John");
        myNokia.playMusic("Backstreet Boys - Shape of My Heart");
//        myNokia.takePicture();
//        myNokia.takeVideo();

        System.out.println("----------------------------------------------");

        mySamsung.sendText("Hw r u doing today?<3 :D", "Jane");
        mySamsung.playMusic("Taylor Swift - Love Story");
        mySamsung.takePicture();
        mySamsung.takeVideo();

    }
}
