package com.zuitt;

public class Casio implements Calculator, ScientificCalculator{

    private String brand;
    private int price;

    public Casio(){}

    public Casio(String brand, int price){
        this.brand = brand;
        this.price = price;
    }

    public String getBrand(){
        return this.brand;
    }

    public int getPrice(){
        return this.price;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void compute(String numA, String numB, String operation) {
        double doubleNumA = Double.parseDouble(numA);
        double doubleNumB = Double.parseDouble(numB);

        if (operation.equalsIgnoreCase("add")){
            System.out.println(doubleNumA+doubleNumB);
        }
        else if (operation.equalsIgnoreCase("subtract")){
            System.out.println(doubleNumA-doubleNumB);
        }
        else if (operation.equalsIgnoreCase("multiply")){
            System.out.println(doubleNumA*doubleNumB);
        }
        else if(operation.equalsIgnoreCase("divide") && doubleNumB > 0){
            System.out.println(doubleNumA/doubleNumB);
        }
        else {
            System.out.println("Invalid number or operation provided");
        }
    }

    public void computeRemainder(String numA, String numB) {
        double doubleNumA = Double.parseDouble(numA);
        double doubleNumB = Double.parseDouble(numB);

        if (doubleNumB>0){
            System.out.println(doubleNumA%doubleNumB);
        }
        else{
            System.out.println("Invalid input");
        }

    }

    public void turnOff() {
        System.out.println("Closing "+getBrand()+" calculator");
    }
}
