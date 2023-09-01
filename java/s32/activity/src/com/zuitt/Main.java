package com.zuitt;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] fruits = {"apple","avocado","banana","kiwi","orange"};
        System.out.println("Fruit in stock: "+Arrays.toString(fruits));

        Scanner myScanner = new Scanner(System.in);
        System.out.println("Which fruit would you like to know the index of: ");
        String userInput = myScanner.nextLine().strip().toLowerCase();

        int index = Arrays.binarySearch(fruits, userInput);
        System.out.println("The index of "+userInput+" is "+index);

        HashMap<String, String> userA = new HashMap<>();
        userA.put("firstName","John");
        userA.put("lastName","Smith");
        System.out.println("User A:\n"+userA);

        HashMap<String, String> userB = new HashMap<>();
        userB.put("firstName","Jane");
        userB.put("lastName","Doe");
        System.out.println("User B:\n"+userB);

        ArrayList<HashMap<String, String>> users = new ArrayList<>();
        users.add(userA);
        users.add(userB);
        System.out.println(users);

        System.out.println("What user id would you like to know: ");
        int userIndex = myScanner.nextInt();
        if (userIndex>0 && userIndex<=users.size()){
            System.out.println(users.get(userIndex-1));
        }
        else {
            System.out.println("Please put a valid user ID");
        }
    }
}
