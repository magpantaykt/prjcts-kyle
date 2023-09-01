package com.zuitt;

public class Main {
    /*
    * ENCAPSULATION
    *IS THE MECHANISM OF WRAPPING THE DATA (VARIABLE) AND CODE ACTING ON THE DATA (METHODS) AS A SINGLE UNIT
    * */
    public static void main(String[] args) {
/*        String petAName = "Frankie";
        String gender = "female";
        String classification = "dog";
        int age = 10;
        String address = "Manila, Philippines";
        String sound = "awooo";*/
        Pet petA = new Pet("Franky","female","dog",10,"Manila,Philippines","awooo");
       petA.describePet();
       petA.makeSound();
/*        describePet(petAName, gender, classification, age);
        makeSound(petAName,sound);*/
        Pet petB = new Pet("Simba","male","lion",1,"Pride Lands","rawr");
        petB.describePet();
        petB.makeSound();
/*        String petBName = "Simba";
        String genderB = "male";
        String classificationB = "lion";
        int ageB = 1;
        String addressB = "Pride Lands";
        String soundB = "hakuna matata";*/
        System.out.println("------------------------------------------");

        Sharp mySharp = new Sharp("Sharp",1500);
        mySharp.compute("25423","657","divide");
        mySharp.turnOff();

        System.out.println("------------------------------------------");

        Casio myCasio = new Casio("Casio",5200);
        myCasio.compute("2","8","multiply");
        myCasio.computeRemainder("5677","567");
        myCasio.turnOff();

        System.out.println("------------------------------------------");
        useCalculator(mySharp);
/*        describePet(petBName, genderB, classificationB, ageB);
        makeSound(petBName,soundB);*/
    }
/*    public static void describePet(String name, String gender, String classification, int age){
        System.out.println(name+" is a "+gender+" "+classification+" who is "+age+" years old");
    }

    public static void makeSound(String name, String sound){
        System.out.println(name+" says "+sound);
    }*/
    public static void useCalculator(Calculator myCalculator){
        myCalculator.compute("2","8","multiply");
        myCalculator.turnOff();
    }
}
