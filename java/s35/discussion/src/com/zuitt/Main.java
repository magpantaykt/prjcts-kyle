package com.zuitt;

import com.zuitt.accessModifiers.Examples; //accessing Examples class inside the accessModifiers package
import com.zuitt.accessModifiers.Test;

public class Main {
    public static void main(String[] args) {

        //instantiate a new car object using the Car class
        Car newCar = new Car();

        //the ff wouldn't work as the properties in the Car class are private
        //would need getters and setters
/*        newCar.name = "Civic";
        newCar.brand = "Honda";
        newCar.manufactureDate = 1998;*/

        //setters //updating values
        newCar.setName("Civic");
        newCar.setBrand("Honda");
        newCar.setManufactureDate(1998);
        newCar.setOwner("Dominic Toreto");

        //get value by invoking the functions that would return the private properties
        System.out.println(newCar.getName());
        System.out.println(newCar.getBrand());
        System.out.println(newCar.getManufactureDate());
        System.out.println(newCar.getOwner());

        newCar.setOwner("Kang Seulgi");
        System.out.println(newCar.newPropertyPrinter());

        //adding properties not in the Car constructor
        //this cannot be done unless defines in the class constructor
        //newCar.mileage = 1000;

        //Creating new object using class Car constructor with arguments
        Car anotherCar = new Car("Charger","Dodge",1978,"Paul Walker");

        //printing out the properties of the object
        System.out.println(anotherCar.newPropertyPrinter());

        //get properties of anotherCar by getter method
        System.out.println(anotherCar.getName());
        System.out.println(anotherCar.getBrand());
        System.out.println(anotherCar.getManufactureDate());
        System.out.println(anotherCar.getOwner());

        //update value of owner by using setter
        anotherCar.setOwner("Irene Bae");
        System.out.println(anotherCar.newPropertyPrinter());

        anotherCar.drive();

        Examples accessModifier = new Examples(); //access the methods inside the Examples class
        System.out.println(accessModifier.message);

        //System.out.println(accessModifier.defaultMessage);
        //System.out.println(accessModifier.secret);

        //System.out.println(accessModifier.privateMessage); //cant access without getter in the Examples class
        accessModifier.printPrivateMessage();

        //accessing a property in Examples class using the Test class which is from the same package as Examples class
        Test accessTest = new Test();
        accessTest.accessDefault();


        //accessing properties and methods in Examples Class inside accessModifier package
        //created a function/method that would inherit all of Examples properties and methods
        Protected accessProtected = new Protected();
        accessProtected.printMessage();
        accessProtected.printProtectedMessage();
    }


    //the "extends" keyword allow to create a parent-child relationship wherein the child class inherits properties and methods of parent class
    public static class Protected extends Examples {
        public void printMessage(){
            System.out.println(message);
        }

        public void printProtectedMessage(){
            System.out.println(secret);
        }
    }
}


