# Lecture 3 Summary: Inheritance & Polymorphism

> **Inheritance** = a child class reuses what its parent already has.
> **Polymorphism** = one action, many forms.

---

## 1. Inheritance

### What is it?

In the real world, things are often related as **parent and child**, and the child shares the parent's properties. Inheritance copies this idea into code: a child class gets the parent's attributes and behaviors automatically, and can add its own.

### Example: Car hierarchy

**Parent class: `Car`** (the generic version)

| Common attributes | Common behaviors |
|---|---|
| Brand | `startEngine()` |
| Model | `stopEngine()` |
| IsEngineOn | `accelerate()` |
| CurrentSpeed | `brake()` |

**Child classes** (they get everything above, plus their own extras)

| Child | Extra attribute | Extra behavior |
|---|---|---|
| `ManualCar` | CurrentGear | `shiftGear()` |
| `ElectricCar` | BatteryPercentage | `chargeBattery()` |

### C++ syntax

```cpp
class ManualCar : public Car { ... };
class ElectricCar : public Car { ... };
```

Read `: public Car` as "ManualCar *inherits from* Car".

### Access specifiers in inheritance

The keyword you write before the parent class (`public`, `protected`, or `private`) decides how the parent's members appear in the child.

| Inheritance type | Parent's `public` becomes | Parent's `protected` becomes |
|---|---|---|
| `public` | `public` | `protected` |
| `protected` | `protected` | `protected` |
| `private` | `private` | `private` |

**Important:** a parent's `private` members are **never inherited** (the child can't access them directly).

**Tip:** `protected` means "hidden from outsiders, but visible to child classes."

---

## 2. Polymorphism

### What does it mean?

**Poly** (many) + **Morph** (forms) = **many forms**. One action can behave differently depending on the object or situation.

### Real-life examples

- **Different objects:** a Duck, a Human, and a Tiger all can `run()`, but each runs in its own way.
- **Different situations:** the same human runs differently when tired than when being chased.

### Two types

| Type | When it's decided | How it's achieved |
|---|---|---|
| **Static polymorphism** | Compile time | Method **overloading** |
| **Dynamic polymorphism** | Runtime | Method **overriding** |

---

## 3. Static Polymorphism (Method Overloading)

**Same method name, different parameters.** The compiler picks the right version while compiling.

```cpp
class ManualCar {
    void accelerate();          // no parameter
    void accelerate(int speed); // with a parameter
};
```

### Rules

- **Method name:** must be the same
- **Parameters:** must differ in number or type
- **Return type:** can be the same or different, but it **doesn't count** for overloading (changing only the return type is not enough)

---

## 4. Dynamic Polymorphism (Method Overriding)

**Same method signature, redefined in child classes.** The right version is picked while the program runs. In C++ this uses **`virtual`** functions.

```cpp
class Car {
    virtual void accelerate() = 0;   // abstract: no body here
};

class ManualCar : public Car {
    void accelerate() override;      // manual-specific logic
};

class ElectricCar : public Car {
    void accelerate() override;      // electric-specific logic
};
```

Call `accelerate()` on any `Car`, and the correct version runs depending on whether it's really a `ManualCar` or an `ElectricCar`.

### Overloading vs overriding

| | Overloading | Overriding |
|---|---|---|
| **Where** | Same class | Parent and child classes |
| **Signature** | Different parameters | Same signature |
| **Resolved** | Compile time | Runtime |
| **Needs `virtual`?** | No | Yes |

---

## 5. All Four OOP Pillars Together

The final car code uses everything covered so far:

| Pillar | Where it shows up |
|---|---|
| **Abstraction** | `Car` hides implementation and only declares the operations |
| **Encapsulation** | Private and protected members guard the data |
| **Inheritance** | `ManualCar` and `ElectricCar` inherit from `Car` |
| **Polymorphism** | Overloaded and overridden `accelerate()` |

---

- **Operator overloading** means giving an operator like `+` or `==` a custom meaning for your own classes. For example, `car1 + car2` or `point1 + point2` can be made to do something sensible.
- **Correction:** the notes say Python doesn't support it, but **Python does** (through special methods like `__add__` and `__eq__`). **Java** is the one that doesn't allow it, as a deliberate choice to keep code simple and predictable. Worth double-checking this with your instructor.

---

## 7. Quick Recap

1. **Inheritance** lets child classes reuse a parent's code (`class Child : public Parent`).
2. A parent's `private` members are never inherited. Use `protected` to share with children.
3. **Overloading** = same name, different parameters, decided at compile time.
4. **Overriding** = same signature redefined in a child class, decided at runtime, uses `virtual`.
