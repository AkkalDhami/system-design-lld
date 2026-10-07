# Pillars of Object-Oriented Programming (OOP) in Java

Object-Oriented Programming (OOP) in Java is based on four main principles:

1. Encapsulation
2. Inheritance
3. Abstraction
4. Polymorphism

---

## 1. Encapsulation

### Meaning

**Encapsulation** = Wrapping data (variables) and methods together inside a class and controlling access to them.

It prevents direct modification of internal data.

It is achieved using:
- `private` variables
- `public` getter and setter methods

### Example

```java
class Student {
    private String name;

    // Setter
    public void setName(String name) {
        this.name = name;
    }

    // Getter
    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("John");

        System.out.println(s.getName());
    }
}
```

### Key Points

- Protects data

- Improves security

- Controls access to variables

## 2. Inheritance

### Meaning

Inheritance allows a child class to acquire properties and methods of a parent class.

It promotes code reusability.

`extends` keyword is used.

### Example

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}
```


### Key Points

- Code reuse

- Hierarchical relationships

- Reduces duplication

## 3. Abstraction

### Meaning
**Abstraction** = Hiding complex implementation details and showing only essential features.

Users only interact with simple interfaces, not the internal logic.

It can be achieved using:

- `abstract class`

- `interface`

### Example

```java
public class Abstract {
    public static void main(String[] args) {
        Car c1 = new FuelCar();
        c1.start();
        c1.stop();
    }   
}

abstract class Car {
    abstract void start();
    abstract void stop();
}

class FuelCar extends Car {
    @Override
    void start() {
        System.out.println("Fuel Car started!");
    }
    
    @Override
    void stop() {
        System.out.println("Fuel Car stopped!");
    }
}
```

### Key Points

- Hides internal implementation

- Shows only necessary functionality

- Achieved using abstract classes and interfaces

### 4. Polymorphism

#### Meaning

**Polymorphism** = Same method behaves differently depending on the object.

### Types:

- Compile-time polymorphism (Method Overloading)
- Runtime polymorphism (Method Overriding)


## Method Overloading (Compile-time Polymorphism)

Method Overloading occurs when **multiple methods have the same name but different parameters** within the same class.

### Example

```java
class Car {

    void start() {
        System.out.println("Car starts with key");
    }

    void start(String mode) {
        System.out.println("Car starts with " + mode);
    }

    void start(String mode, int temperature) {
        System.out.println("Car starts with " + mode + " at temperature " + temperature);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();

        car.start();
        car.start("Push Button");
        car.start("Remote Start", 20);
    }
}
```


## Method Overriding (Runtime Polymorphism)

Method Overriding happens when a child class provides its own implementation of a method already defined in the parent class.

### Example

```java
class Car {
    void drive() {
        System.out.println("Car is driving");
    }
}

class ElectricCar extends Car {
    @Override
    void drive() {
        System.out.println("Electric car is driving silently");
    }
}

public class Main {
    public static void main(String[] args) {

        Car myCar = new ElectricCar();
        myCar.drive();
    }
}
```

### Key Points

- Same method name

- Different behavior

- Improves flexibility