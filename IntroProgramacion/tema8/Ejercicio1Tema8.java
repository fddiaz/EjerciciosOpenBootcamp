package tema8;
/**
 *
 * @author Fedrico Damaso Diaz Ramseyer
 */
public class Ejercicio1Tema8 {

    public static void main(String[] args) {

        Persona persona1 = new Persona();

        persona1.setEdad(42);
        persona1.setNombre("Federico");
        persona1.setTelefono(12341234);

        System.out.println("Nombre: " + persona1.getNombre());
        System.out.println("Edad: " + persona1.getEdad());
        System.out.println("Teléfono: " + persona1.getTelefono());
        
    }
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;

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
    public int getTelefono() {
        return telefono;
    }
    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
}

