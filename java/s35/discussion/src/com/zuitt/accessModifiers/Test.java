package com.zuitt.accessModifiers;

public class Test {
    Examples example = new Examples();

    public void accessDefault(){
        System.out.println(example.defaultMessage); //accessing default property in a class
    }

    //default properties (without classifying if its public or private are accessible in classes stored in the same package
    // however, private and protected properties can not be accessed)
/*    public void accessPrivate(){
        System.out.println(example.privateMessage);
    }*/
}
