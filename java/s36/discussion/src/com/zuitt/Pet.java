package com.zuitt;

public class Pet {
    /*
    * organizing data in a structured manner enhances code readability and maintainability with Encapsulation of related data and methods within a class
    * */

    private String name;
    private String gender;
    private String classification;
    private int age;
    private String address;
    private String sound;

    public Pet(){}

    //setters
    public void setName(String name){
        this.name = name;
    }
    public void setGender(String gender){
        this.gender = gender;
    }
    public void setClassification(String classification){
        this.classification = classification;
    }
    public void setAge(int age){
        this.age = age;
    }
    public void getAddress(String address){
        this.address = address;
    }
    public void setSound(String sound){
        this.sound = sound;
    }


    public Pet(String name,String gender,String classification,int age,String address,String sound){
        this.name = name;
        this.gender = gender;
        this.classification = classification;
        this.age = age;
        this.address = address;
        this.sound = sound;
    }

    //getters
    public String getName(){
        return this.name;
    }
    public String getGender(){
        return this.gender;
    }
    public String getClassification(){
        return this.classification;
    }
    public String getAddress(){
        return this.address;
    }
    public String getSound(){
        return this.sound;
    }

    public void describePet(){
        System.out.println(this.name+" is a "+this.gender+" "+this.classification+" who is "+this.age+" years old");
    }

    public void makeSound(){
        System.out.println(this.name+" says "+this.sound);
    }

}
