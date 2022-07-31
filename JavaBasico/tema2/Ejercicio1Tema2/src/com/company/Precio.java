package com.company;

import java.util.Scanner;

public class Precio {

    public static void main(String[] args) {
        double precioProducto = obtPrecio();
        masIva(precioProducto);
    }

    private static void masIva(double precioProducto) {
        System.out.println("El del producto + IVA es: " + (precioProducto + precioProducto * 0.21));
    }

    private static double obtPrecio() {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Introduzca precio: ");
        return entrada.nextDouble();
    }

}