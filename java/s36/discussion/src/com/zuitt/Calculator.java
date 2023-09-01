package com.zuitt;
/*
* ABSTRACTION
* - process where all logic and code complexity is hidden from the users and developers which helps confusion and Allows them to focus on what of things rather than the how
* */
public interface Calculator {
    //all these methods are required to be implemented by the class that will use the Calculator interface
    //this interface will be used as blueprint by other classes
    void compute(String numA, String numB, String operation); //abstract methods - without implementation or statements
    void turnOff();
}
