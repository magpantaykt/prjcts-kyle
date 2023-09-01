package com.zuitt;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /*
         * CONDITIONAL STATEMENT - control the flow of the program
         *
         * curly brackets are optional if only a single statement is executed but must have proper indention
         * however, for multiple statement conditions, curly braces are required
         * */

        int num1=10;
        int num2=20;

        //IF STATEMENT
        if (num1>5) {
            System.out.println(num1+" is greater than 5");
        }

        //IF-ELSE STATEMENT
        if (num2>100)
            System.out.println(num2+" is greater than 100");
        else
            System.out.println(num2+" is not greater than 100");

        //IF-ELSE IF STATEMENT
        if (num2>100)
            System.out.println(num2+" is greater than 100");
        else if (num2<100)
            System.out.println(num2+" is not greater than 100");
        else
            System.out.println(num2+" is equal to 100");


        //BOOLEAN VALUES IN CONDITIONAL STATEMENTS
        boolean isPogi = true;

        if (isPogi){
            System.out.println("Pogi, bili ka na");
        }

        //LOGICAL OPERATORS
        boolean isMarried = false;
        boolean isRetired = true;

        if (!isMarried && !isRetired)
            System.out.println("You are a devout member of the society");
        else if (!isMarried || !isRetired)
            System.out.println("Okay");


        //STRING COMPARISON
        /*
         * in Java, comparing strings can be done using .equals() method as '==' only compares the variables memory address while .equals() compares each character in the string
         * */
        String word = "Hello";
        if(word.equals("Hello"))
            System.out.println("Yo");


        //.isBlank() vs .isEmpty() method
        //.isBlank() check if the string is blank or contains whitespace
        //.isEmpty() checks length of string

        String blankWord = " ";
        System.out.println(blankWord.isBlank());
        System.out.println(blankWord.isEmpty());

        //
        int x = 15;
        int y = 0;
        //System.out.println(x/y==0); //mathematically incorrect and will cause problem/s or error in the code (arithmetic error)

        //ERROR HANDLING
        if (y>5 && x/y==0)
            System.out.println("Okaaay!");
        else
            System.out.println("That's not it");


        //SWITCH STATEMENT
        Scanner myScanner = new Scanner(System.in);

        System.out.println("Provide a number between 1-4: ");
        int directionValue = myScanner.nextInt();
        myScanner.nextLine();

        switch (directionValue){
            case 1:
                System.out.println("North");
                break;
            case 2:
                System.out.println("South");
                break;
            case 3:
                System.out.println("East");
                break;
            case 4:
                System.out.println("West");
                break;
            default:
                System.out.println("No");
                break;
        }

        //ENHANCED SWITCH CASE STATEMENT
        switch (directionValue) {
            case 1 -> System.out.println("North");
            case 2 -> System.out.println("South");
            case 3 -> System.out.println("East");
            case 4 -> System.out.println("West");
            default -> System.out.println("No");
        }

        System.out.println("Choose a number between 1-5: ");
        int option = myScanner.nextInt();
        myScanner.nextLine();
        switch (option){
            case 1,2 -> System.out.println("Option < 3");
            case 4,5 -> System.out.println("Option > 3");
            case 3 -> System.out.println("Option == 3");
            default -> System.out.println("No");
        }

        //yield returns the statements and store them to the variable the switch case is assigned to
        System.out.println("Choose an option between 0 and 1: ");
        int choice = myScanner.nextInt();
        myScanner.nextLine();
        String response = switch (choice){
            case 0:
                yield "false";
            case 1:
                yield "true";
            default:
                yield "Invalid";
        };
        System.out.println(response);


        //LOOPS
        for (int i = 0; i <= 5; i++){
            System.out.println(i);
        }

        int[] intArray = {1000,2000,1000,6000,2000,3000};
        for(int i = 0; i < intArray.length; i++){
            System.out.println(intArray[i]);
        }

        String[] nameArray = {"John","Paul","George"};
        for (String eachName : nameArray){
            System.out.println(eachName);
        }

        ArrayList<String> characters = new ArrayList<>(Arrays.asList("Ursula", "Maleficent", "Yeri","Minne","Daisy"));
        for (String eachCharacter : characters){
            System.out.println(eachCharacter);
        }

        String[][] multi = new String[3][3];
        multi[0][0] = "SNSD";
        multi[0][1] = "SJ";
        multi[0][2] = "EXO";

        multi[1][0] = "FX";
        multi[1][1] = "SHINEE";
        multi[1][2] = "RV";

        multi[2][0] = "DREAM";
        multi[2][1] = "127";
        multi[2][2] = "WAYV";

        for (int row = 0; row < 3; row++){
            for (int col = 0; col < 3; col++){
                System.out.println(multi[row][col]);
            }
        }

        int i = 0;
        while (i<=5){
            System.out.println(i);
            i++;
        }

        String name = "";
        while(name.isBlank()){
            System.out.println("Type bye to exit");
            name = myScanner.nextLine();

            if(name.equals("bye")){
                System.out.println("Goodbye!");
            }
            else if (!name.isBlank()){
                System.out.println("Your name is "+name);
            }
        }

    }
}
