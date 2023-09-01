package com.zuitt;
//ERROR HANDLING
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);

/*        System.out.println("Input an integer: ");
        int myNum = myScanner.nextInt();
        System.out.println("Input number is: "+myNum);*/

        /*
        * SYNTAX
        * try{
        *   //statements to try
        * }
        * catch(ExceptionError){
        *   //what to do if the statements tried above encountered th error
        * }
        * finally{
        *   //with or without error, 'finally' will run
        *   //code to run whether there are errors or none
        *}
        *
        * */

/*        int myNum = 0;

        try {
            System.out.println("Enter a number: ");
            myNum = myScanner.nextInt();
            myScanner.nextLine();
        }
        catch (InputMismatchException e){ //InputMismatchException - for when the input doesnt match the expected input data type
            System.out.println("Please enter a valid input");
            //e.printStackTrace();//get error
        }
        catch (Exception e){
            //Exception e for any error the statements in try could encounter
        }
        finally {
            if(myNum != 0) {
                System.out.println("Your integer input is: "+myNum); //with or without error, finally will run
            }
        }*/


/*        double decimal = 0;
        try {
            System.out.println("Input a decimal number: ");
            decimal = myScanner.nextDouble();
            myScanner.nextLine();
        }
        catch (InputMismatchException e){
            System.out.println("The value provided is not a decimal number");
        }
        catch (Exception e){
            System.out.println("Please enter a valid input");
        }
        finally{
            if(decimal != 0) {
                System.out.println("Your integer input is: "+decimal); //with or without error, finally will run
            }
        }*/

        /* lines of code below will capture the "next line input" due to pressing ENTER as nextInt() doesnt accept the whole input from the input buffer and only gets the actual int, thus, the nextLine() will capture that "next line" as input */
/*        System.out.println("Enter a string: " +
                "");
        String stringInput = myScanner.nextLine();
        System.out.println(stringInput);*/


        //next() will only capture the next token and not a string with

/*        try{
            System.out.println("Give me a number ");
            int userInput = myScanner.nextInt();
            myScanner.nextLine();
            if (userInput == 9){
                throw new NewException("Your input is 9",myScanner);
            }
        }
        catch (NewException e){
            System.out.println("Error: "+e);
        }*/


        try{
            System.out.println("Give me a name: ");
            String userInput = myScanner.nextLine().toLowerCase();
            if (userInput.equals("admin")){
                throw new NewException("Name handled through NewException",myScanner);
            }
        } catch (NewException e) {
            System.out.println(e);
        }


    }
}
class NewException extends Exception{
    public NewException(String message, Scanner myScanner){
        super(message);
        System.out.println("Are you sure this is your name?");
        System.out.println("Type y for no and n for yes: ");
        String reply = myScanner.nextLine().toLowerCase();
        if (reply.equals("y")) {
            System.out.println("Provide me a new name");
        }
    }

}
