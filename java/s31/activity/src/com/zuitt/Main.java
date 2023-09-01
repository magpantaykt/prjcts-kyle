package com.zuitt;

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner myScanner = new Scanner(System.in);

        System.out.println("Enter your firstname: ");
        String firstName = myScanner.nextLine();

        System.out.println("Enter your lastname: ");
        String lastName = myScanner.nextLine();

        System.out.println("Enter first subject grade: ");
        double firstSubject = myScanner.nextDouble();

        System.out.println("Enter second subject grade: ");
        double secondSubject = myScanner.nextDouble();

        System.out.println("Enter third subject grade: ");
        double thirdSubject = myScanner.nextDouble();

        int averageGrade = (int) (firstSubject+secondSubject+thirdSubject)/3;

        System.out.println("\nGood day, "+firstName+" "+lastName);
        System.out.println("Your grade average is "+averageGrade);

    }
}
