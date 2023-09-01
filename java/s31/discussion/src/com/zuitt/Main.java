/*
* SECTION: PACKAGES and CLASSES
*
* CLASSES- blueprint for creating objects and java is known to be an object-oriented language
*
* PACKAGE- is used to group related classes similar as to how a folder is related to files; Grouping classes
*
* */

package com.zuitt; // Java package where the main class belongs to

/*
* SECTION: Main class
*
* Main class is the entry point of Java program and is responsible for executing our code
* Every program should have at least one Main class and one main function inside it
* */

import java.util.Scanner;

public class Main {

    /*
    * SECTION: main function/method
    * this is where most of the executable code are applied to
    *
    * SYNTAX:
    * public static void(dataType argument){
    *   //
    * }
    *
    * public keyword is an access modifier which tells our application what parts of the program can access the main function
    * void keyword is the return statement's data type of the main function that defines what kind of data it will return but since there is no return statement and the main function returns nothing,then the data type is vo
    * */

    public static void main(String[] args){
        System.out.println("Hello World");

        //VARIABLES
        /*
        * Variables in Java require the data type to be specified
        * The variable names are called identifier
        * Variables can be declared without an initial value
        * */

        /*
        * SYNTAX
        * Variable Declaration
        * dataType identifier;
        *
        * Declaration and Initialization
        * dataType identifier = value;
        * */

        int myNum; //should be initialized if it needs to be used

        int mySecondNum = 29;
        System.out.println("The result of declaration and initialization of variables: ");
        System.out.println(mySecondNum);

        myNum = 1;
        System.out.println("The result of declaration variables: ");
        System.out.println(myNum);

        mySecondNum = 30;
        System.out.println("Updating values of variables: ");
        System.out.println(mySecondNum);

        //constants in Java
        final int PRINCIPAL = 1000;
        System.out.println("Constant variables: ");
        System.out.println(PRINCIPAL);

        /*
        * var keyword - automatic assignment of data type, has a local scope meaning its only available within the function it was declared in
        * */

        var unknown = "Hello";
        System.out.println(unknown);

        /*
        * PRIMITIVE DATA TYPES
        * used to store simple values
        * for number values, each primitive data type has its certain specifications and limitation on how to use the data type
        * */

        //single quotes are used for characters ('')
        char letter = 'i';
        System.out.println(letter);

        //boolean
        boolean isTrue = false;
        System.out.println(isTrue);

        //bytes = 127 to -128
        byte byteNum = 127;
        System.out.println(byteNum);

        //short
        short shortNum = 3769;
        System.out.println(shortNum);

        //int
        int localPopulation = 2_212_454; //numbers separated with underscores (_) improves code readability
        System.out.println(localPopulation);

        //long
        long worldPopulation = 7_555_345_657_675L; //must add L to the end of the value to indicate that it's a long data type
        System.out.println(worldPopulation);

        //float
        float price = 12.999_567F; //must add F to the end of the value to indicate that it's a float
        System.out.println(price);
        //double
        double temperature = 45.546_665_765_456_546D; //must add D to the end of the value to indicate that it's a double
        System.out.println(temperature);

        //NON-PRIMITIVE DATA TYPE/REFERENCING DATA TYPES
        /*
        * used to store complex data/objects
        * has access to methods in manipulating data
        * */

        String name = "John Doe";
        System.out.println(name);

        String editedName = name.toLowerCase();
        System.out.println(editedName);

        //GET DATA TYPE
        System.out.println(name.getClass());

        //ESCAPE SEQUENCE
        System.out.println("C:\\Windows\\Desktop");

        //ARITHMETIC EXPRESSIONS
        int result = 10 + 5;
        System.out.println(result);

        //TYPECASTING
        int num1 = 4_345;
        double num2 = 452.248D;
        double sum12 = num1 + num2;
        System.out.println(sum12);

        //EXPLICIT TYPECASTING
        int num3 = 657;
        double num4 = 45.657_345D;
        int sum34 = num3 + (int)num4;
        System.out.println(sum34);

        //string to integer
        String mathGrade = "90";
        String englishGrade = "85";
        System.out.println(mathGrade+englishGrade);

        int totalGrade = Integer.parseInt(mathGrade) + Integer.parseInt(englishGrade);
        System.out.println(totalGrade);

        //integer to string

        /*
        * SECTION: SCANNER CLASS
        * scanner- to get input from user
        *
        * SYNTAX
        *
        * dataType storageInput;
        *
        * Scanner variable = new Scanner(System.in);
        * storageInput = variable.nextDataType()
        * */

        String myName;
        int myAge;

        Scanner appScanner = new Scanner(System.in);

        System.out.println("What's your name: ");
        myName = appScanner.nextLine();

        System.out.println("What's your age: ");
        myAge = appScanner.nextInt();

        System.out.println("Hi! I'm "+myName+"! I'm "+myAge+" years old");

        /*
        *accessing variables from other methods/function is not possible as variables declared and initialized in a function has a local/block scope
        * */

    }
}
