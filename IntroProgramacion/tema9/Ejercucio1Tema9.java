package tema9;

/**
 *
 * @author Fedrico Damaso Diaz Ramseyer
 */
public class Ejercucio1Tema9 {
    public static void main(String[] args) {
        Cliente cliente1 = new Cliente();

        cliente1.setEdad(24);
        cliente1.setTelefon("3424059404");
        cliente1.setNombre("Claudia");
        cliente1.setCredito(20000);

        System.out.println("\nDatos Cliente:");
        System.out.println("---------------------------------------------");
        System.out.println("Nombre: " + cliente1.getNombre());
        System.out.println("Edad: " + cliente1.getEdad());
        System.out.println("Teléfono: " + cliente1.getTelefon());
        System.out.println("Crédito: " + cliente1.getCredito());
        System.out.println("---------------------------------------------\n");
        Trabajador trabajador1 = new Trabajador();

        trabajador1.setEdad(50);
        trabajador1.setTelefon("4330058467");
        trabajador1.setNombre("Marcelo");
        trabajador1.setSalario(24000.00);

        System.out.println("\nDatos Trabajador:");
        System.out.println("---------------------------------------------");
        System.out.println("Nombre: " + trabajador1.getNombre());
        System.out.println("Edad: " + trabajador1.getEdad());
        System.out.println("Teléfono: " + trabajador1.getTelefon());
        System.out.println("Salario: " + trabajador1.getSalario());
        System.out.println("---------------------------------------------\n");

    }
}

class Persona {
    int edad;
    String nombre;
    String telefon;

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
}

class Cliente extends Persona {
    double credito;

    public double getCredito() {
        return credito;
    }

    public void setCredito(double credito) {
        this.credito = credito;
    }
}

class Trabajador extends Persona {
    double salario;

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

}