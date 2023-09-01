package com.zuitt;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
        /*
        * ARRAYS - objects that contain a fixed or limited number of elements
        *
        *SYNTAX
        * dataType[] variableName = new dataType[no. of elements]
        * or
        * dataType[] variableName = {elements}
        * */
        int[] intArray = new int[3];
        intArray[0] = 34;
        intArray[1] = 45;
        intArray[2] = 75;
        System.out.println(intArray[0]);

        int[] intArray2 = {23,45,67};
        System.out.println(intArray2[1]);

        System.out.println(Arrays.toString(intArray)); //the value to be printed out if an array is printed is the reference to the memory allocated for the variable of the array


        //Multidimensional Array
        /*
        * can be used to represent complex real world objects
        * */

        String[][] classroom = new String[3][3];
        //first row
        classroom[0][0] = "aespa";
        classroom[0][1] = "RV";
        classroom[0][2] = "SNSD";

        classroom[1][0] = "EXO";
        classroom[1][1] = "NCT";
        classroom[1][2] = "SJ";

        classroom[2][0] = "KBS";
        classroom[2][1] = "SBS";
        classroom[2][2] = "MCountdown";

        System.out.println(Arrays.deepToString(classroom)); //Arrays.deepToString for multidimensional arrays

        /*
        *ARRAY LIST- resizable arrays
        *
        * SYNTAX
        * ArrayList<dataType> variableName = new ArrayList<>();
        * or
        * ArrayList<dataType> variableName = new ArrayList<dataType>(Array.asList(elements))
        * */

        ArrayList<String> students = new ArrayList<>();

        //ArrayList methods
        students.add("John");
        students.add("Paul");
        System.out.println(students);

        System.out.println(students.get(1));

        students.set(1, "Kyle");
        System.out.println(students);

        students.remove(1);
        System.out.println(students);

        students.add("Sophia");
        students.add("Johnny");
        students.add("Bob");
        students.add("Thomas");
        students.add("Yeri");
        students.add("Irene");
        students.add("Ningning");
        students.add("Seulgi");
        System.out.println(students);

        System.out.println(students.size());

        System.out.println(students.contains("Yeri"));

        students.clear();
        System.out.println(students);

        //ArrayList with initialized value
        ArrayList<String> employees = new ArrayList<>(Arrays.asList("Jaemin","Renjun"));
        System.out.println(employees);


        /*
        * HASHMAP- used if fields in an object are added dynamically
        *
        *SYNTAX
        * HashMap<keyDataType, valueDataType> variableName = new HashMap<>();
        * or
        *
        *
        * */

        //in Java, objects are also called/referred to as fields

        HashMap<String, String> employeeRole = new HashMap<>();
        employeeRole.put("student","Jisung");
        employeeRole.put("teacher","Chenle");
        employeeRole.put("worker","Mark");
        System.out.println(employeeRole);

        System.out.println(employeeRole.get("student"));

        System.out.println(employeeRole.keySet());

        HashMap<String, Integer> grades = new HashMap<>();
        grades.put("Joe",89);
        grades.put("Jane",93);
        System.out.println(grades);

        HashMap<String, ArrayList<Integer>> subjectGrades = new HashMap<>();
        ArrayList<Integer> gradeListA = new ArrayList<>(Arrays.asList(90,90,91));
        ArrayList<Integer> gradeListB = new ArrayList<>(Arrays.asList(87,99,100));

        subjectGrades.put("Joe",gradeListA);
        subjectGrades.put("Jane",gradeListB);
        System.out.println(subjectGrades);

        System.out.println(subjectGrades.get("Jane"));
        System.out.println(subjectGrades.get("Jane").get(2));

        System.out.println(subjectGrades.remove("Jane",gradeListB));
        System.out.println(subjectGrades);
    }
}
