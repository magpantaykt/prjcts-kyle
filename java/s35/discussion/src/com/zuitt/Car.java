package com.zuitt;

public class Car {

    //PROPERTIES
    /*
    * DEFINES THE LIST OF PROPERTIES AN OBJECT HAS
    * */
    private String name;
    private String brand;
    private int manufactureDate;
    private String owner;

    //getters and setters for control access of properties that are private
    //getters
    public String getName(){
        return "Properties of the object: \nName: "+this.name;
    }

    public String getBrand(){
        return "Brand: "+this.brand;
    }

    public String getManufactureDate(){
        return "Manufacture Date: "+this.manufactureDate;
    }

    public String getOwner(){
        return "Owner: "+this.owner+"\n";
    }

    //setters
    public void setName(String name){
        this.name = name;
    }

    public void setBrand(String brand){
        this.brand = brand;
    }

    public void setManufactureDate(int manufactureDate){
        this.manufactureDate = manufactureDate;
    }

    public void setOwner(String owner){
        this.owner = owner;
    }


    //empty constructor
    public Car(){

    }

    //constructor with parameters
    public Car(String name, String brand, int manufactureDate, String owner){
        //values sent as arguments will be assigned as the values using this.variableName
        this.name = name;
        this.brand = brand;
        this.manufactureDate = manufactureDate;
        this.owner = owner;
    }

    //method to print each property
    //another getter method
/*    public void propertyPrinter(){
        System.out.println("Properties of the object: ");
        System.out.println("Name: "+this.name);
        System.out.println("Brand: "+this.brand);
        System.out.println("Manufacture Date: "+this.manufactureDate);
        System.out.println("Owner: "+this.owner+"\n");
    }*/
    public String newPropertyPrinter(){
        String message = "Properties of the object: \n";
        String nameMessage = "Name: "+this.name+"\n";
        String brandMessage = "Brand: "+this.brand+"\n";
        String yearMake = "Manufacture Date: "+this.manufactureDate+"\n";
        String ownerMessage = "Owner: "+this.owner+"\n";
        return message+nameMessage+brandMessage+yearMake+ownerMessage;
    }


    public void drive(){
        System.out.println("Vroom vroom vroom");
    }
}
