package com.zuitt.accessModifiers;

import com.zuitt.Car; //accessing Car class outside the accessModifiers package

public class Examples {

    //public access modifier
    //the Car class can be accessed from the Example class because it's imported and the access modifier "public"
    public Car defaultCar;

    public String message = "Hello from the other side";

    //this is what we call default access modifier
    //this cannot be accessed outside the access modifiers package
    String defaultMessage = "This cannot be accessed outside of the default class";

    protected String secret = "This is a secret";

    private String privateMessage = "This is a private message";

    public void printPrivateMessage(){
        System.out.println(privateMessage);
    }
}
