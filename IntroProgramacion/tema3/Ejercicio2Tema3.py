# @author Fedrico Damaso Diaz Ramseyer

class Coche:
    def __init__(self):
        self.puertas = 0

    def adddoor(self):
        self.puertas += 1


miCoche = Coche()
print(f'El coche tiene {miCoche.puertas} puertas')
miCoche.adddoor()
print(f'El coche tiene {miCoche.puertas} puertas')
