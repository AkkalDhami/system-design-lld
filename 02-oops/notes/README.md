# Lecture 2 Summary: OOPS (Abstraction & Encapsulation)

> **Abstraction** = hide the *how*, show the *what*.
> **Encapsulation** = bundle data + methods together, and protect the data.

---

## 1. Why Did We Move Beyond Procedural Programming?

### How programming evolved

| Stage | What it is | Problems |
|---|---|---|
| **Machine language** | Raw 0s and 1s the CPU understands | One wrong bit breaks everything; very hard to write |
| **Assembly language** | Short words like `MOV A, 61h` instead of bits | Tied to specific hardware; hard to scale |
| **Procedural programming** | Functions, `if-else`, loops, blocks | See below |

### Procedural programming

**Good:**
- Much easier to read than assembly
- Splits small and medium programs into functions

**Bad:**
- **Poor real-world mapping:** it's hard to model things like users, drivers, and payments in a ride-booking app
- **No data security:** everything is globally visible, so anyone can change anything
- **Hard to reuse and scale:** functions alone can't enforce safe, consistent interfaces

---

## 2. Enter Object-Oriented Programming (OOP)

**Core idea:** build your app as a set of **objects** that mirror real-world things.

**Benefits:**
- Natural mapping (`User`, `Car`, `Ride`)
- Data is protected (you control who can read or change it)
- Code reuse through inheritance and interfaces
- Easy to scale with loosely connected modules

---

## 3. Objects, Classes & Instances

| Term | Meaning | Example |
|---|---|---|
| **Object** | A real-world "thing" with attributes and behaviors | A car |
| **Class** | The blueprint (fields + methods) | `class Car { ... }` |
| **Instance** | An actual object created in memory from the class | `Car myCar;` |

---

## 4. Pillar 1: Abstraction

**Definition:** hide unnecessary details and show only what's needed to use something.

### Real-life examples

- **Driving a car**
  - You: insert the key, press pedals, turn the wheel
  - You *don't* need to know: how fuel injection, gears, or the engine computer work
  - The car gives you a simple interface (start, accelerate, brake) and hides the rest
- **TV or laptop**
  - You: press buttons or click icons
  - You *don't* need to know: how the screen refreshes or how the CPU runs code

### Abstraction inside the language itself

Keywords like `if`, `for`, and `while` let you write complex logic without thinking about jump addresses or machine code. The compiler handles that behind the scenes.

---

## 5. Abstraction in Code: Abstract Classes

An **abstract class** says *what* operations must exist, but not *how* they work.

```cpp
// Abstract interface for any Car type
class Car {
public:
    // Pure virtual methods: no implementation here
    virtual void startEngine() = 0;
    virtual void shiftGear(int newGear) = 0;
    virtual void accelerate() = 0;
    virtual void brake() = 0;
    virtual ~Car() {}
};
```

**Key points:**
- `= 0` makes a method **pure virtual**, so it has only a signature and no body
- Other classes (like `SportsCar` or `ElectricCar`) must provide the real code
- Clients can use a `Car*` pointer without knowing the concrete type

### Benefits of abstraction

1. **Simple interfaces:** focus on *what* it does, not *how*
2. **Easy maintenance:** swapping a V6 engine for an electric motor doesn't break client code
3. **Code reuse:** many classes (`SportsCar`, `SUV`, `ElectricCar`) share one interface
4. **Less complexity:** big systems are easier to understand when split into abstract modules

---

## 6. Pillar 2: Encapsulation

**Definition:** bundle an object's **data** and the **methods** that work on it into one unit (a class), and **control access** to it.

### Two sides of encapsulation

1. **Logical grouping:** related data and behavior live together
   - `Car` holds `engineOn`, `currentSpeed`, `shiftGear()`, `accelerate()` all in one place
2. **Data security:** limit direct access to sensitive data
   - You can *read* the odometer, but you can't *reset* it

### Real-life examples

- **Medicine capsule:** the shell holds the medicine and protects it. You use it without touching the contents.
- **Car odometer:** you can see the mileage but can't tamper with it from the dashboard.

---

## 7. Access Modifiers (C++)

| Modifier | Who can access it |
|---|---|
| `public` | Everyone, from anywhere |
| `private` | Only inside the same class |
| `protected` | Inside the class and its subclasses |

---

## 8. Getters & Setters

Instead of exposing a field directly, provide methods that **check the value first**.

```cpp
class Car {
private:
    int speed;   // hidden from outside

public:
    int getSpeed() { return speed; }

    void setSpeed(int s) {
        if (s >= 0 && s <= 200) {   // validation
            speed = s;
        }
    }
};
```

This prevents invalid values, like a speed of `-50`.

*(The example above is my own illustration of the idea; the notes only describe the concept.)*

---

## 9. Benefits of Encapsulation

1. **Robustness:** prevents accidental or harmful changes to internal state
2. **Maintainability:** you can change internals (like adding rules) without breaking client code
3. **Clear contracts:** outsiders use only the public methods
4. **Modularity:** self-contained units are easier to test and reuse

---

## 10. Quick Recap

| | Abstraction | Encapsulation |
|---|---|---|
| **Main idea** | Hide complexity | Protect and bundle data |
| **Question it answers** | "What can I do with this?" | "Who can touch the data?" |
| **How it's done** | Abstract classes, interfaces | Classes, access modifiers, getters/setters |
| **Car example** | Press the pedal, don't care about the engine | Read the odometer, can't edit it |

### Remember
1. Procedural code struggles with real-world modeling and data security. OOP fixes both.
2. **Abstraction:** show only what's essential.
3. **Encapsulation:** keep data and behavior together, and guard access with `public`, `private`, and `protected`.