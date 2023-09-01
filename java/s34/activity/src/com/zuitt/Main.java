package com.zuitt;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner appScanner = new Scanner(System.in);

        System.out.println("Choose an exception to handle: ");
        System.out.println("[1] Arithmetic, [2] Null Pointer, [3] NumberFormat, [4] arrayIndexOutOfBounds, [5]NewException:");
        int userInput = appScanner.nextInt();

        runError(userInput);

    }

    public static void runError(int userInput){
        switch (userInput) {
            case 1 -> {
                try{
                    System.out.println(47/0);
                }catch (ArithmeticException e){
                    System.out.println("Cannot divide by 0");
                }
            }
            case 2 -> {
                try{
                    String myString = null;
                    System.out.println(myString.length());
                }catch (NullPointerException e){
                    System.out.println("Cannot get the length of a null");
                }
            }
            case 3 -> {
                try{
                    String myOtherString = "hello";
                    System.out.println(Integer.parseInt(myOtherString));
                }catch (NumberFormatException e){
                    System.out.println("Cannot parse non-numerical value");
                }
            }
            case 4 -> {
                try{
                    String[] myWords = {"Hello", "World"};
                    System.out.println(myWords[2]);
                }catch (ArrayIndexOutOfBoundsException e){
                    System.out.println("Cannot get element of index that does not exist");
                }
            }
            case 5 -> {
                try{
                    throw new NewException("New Exception was thrown");
                }catch (NewException e){
                    System.out.println(e);
                }
            }
            default -> throw new IllegalStateException("Unexpected value: " + userInput);
        }
    }
}

class NewException extends Exception{
    public NewException(String message){
        super(message);
    }

}
