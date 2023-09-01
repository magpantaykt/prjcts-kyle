package com.zuitt;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner appScanner = new Scanner(System.in);

        System.out.println("What's your first name: ");
        String firstName = appScanner.nextLine().trim();

        System.out.println("What's your last name: ");
        String lastName = appScanner.nextLine().trim();

        System.out.println("What's your contact number: ");
        String contactNumber = appScanner.nextLine();

        System.out.println("What's your email: ");
        String email = appScanner.nextLine().trim();

        User userA = new User(firstName,lastName,email,contactNumber);
        System.out.println(userA.introduce());
        System.out.println(userA.contactDetails());

/*        User userB = new User("Jane","Smith","jane@mail.com","0987654321");*/
        User userB = new User();
        userB.setFirstName("Jane");
        userB.setLastName("Smith");
        userB.setEmail("jane@mail.com");
        userB.setContactNumber("0987654321");
        System.out.println(userB.introduce());
        System.out.println(userB.contactDetails());

    }
}
