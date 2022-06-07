class Coche:
    def __init__(self):
        self.puertas = 0

    def addDoor(self):
        self.puertas += 1


miCoche = Coche()
print(f'El coche tiene {miCoche.puertas} puertas')
miCoche.addDoor()
print(f'El coche tiene {miCoche.puertas} puertas')
