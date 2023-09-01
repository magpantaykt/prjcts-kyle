package com.zuitt;

public class User {
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private int idNum;

    public User(){

    }
    //SETTERS
    public void setFirstName(String firstName){ this.firstName = firstName; }
    public void setLastName(String lastName){ this.lastName = lastName; }
    public void setEmail(String email){ this.email = email; }
    public void setContactNumber(String contactNumber){ this.contactNumber = contactNumber; }

    //GETTERS
    public String getFirstName(){
        return this.firstName;
    }
    public String setLastName(){
        return this.lastName;
    }
    public String getEmail(){
        return this.email;
    }
    public String getContactNumber(){
        return this.contactNumber;
    }
    public int getId(){
        return this.idNum;
    }

    public User(String firstName, String lastName, String email, String contactNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.idNum = idNum;
    }

    public String introduce(){
        return "Hello! My name is "+ this.firstName+" "+ this.lastName;
    }

    public String contactDetails(){
        return "You may contact me at "+this.contactNumber+" or email me at "+this.email+"\n";
    }

}
