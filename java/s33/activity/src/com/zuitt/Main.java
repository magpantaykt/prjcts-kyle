package com.zuitt;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);

        System.out.println("Input year to be checked if leap year: ");
        int year = myScanner.nextInt();
        myScanner.nextLine();

        if (year>1582){
            if (year%100==0 && year%400==0)
                System.out.println(year+" is a leap year");
            else if(year%4==0)
                System.out.println(year+" is a leap year");
            else
                System.out.println(year + " is not a leap year");
        }
        else{
            System.out.println(year + " is too small");
        }

        ArrayList<String> users = new ArrayList<>(Arrays.asList("Mickey", "Donald", "Goofy","Minne","Daisy"));
        ArrayList<String> filteredUsers = new ArrayList<>();

        String searchTerm;
        System.out.println("Provide a string to filter current users: \n"+users);

        do{
            searchTerm = myScanner.nextLine().trim().toLowerCase();
        }while(searchTerm.isBlank());

        for (String elements:users){
            if (elements.contains(searchTerm)){
                filteredUsers.add(elements);
            }
        }

        System.out.println("Using usual method: "+filteredUsers);

        //STREAM
        System.out.println("Provide a string to filter current users: \n"+users);
        String newSearchTerm = myScanner.nextLine().trim().toLowerCase();
        List<String> userFiltered = users.stream().filter(element -> element.contains(newSearchTerm)).collect(Collectors.toCollection(ArrayList::new));
        System.out.println("Using stream & filter method: "+userFiltered);
    }
}
