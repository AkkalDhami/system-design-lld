# Lecture 1 Summary: Low-Level Design (LLD)

> **"If DSA is the brain, LLD is the skeleton of your application."**

---

## 1. What is LLD?

**Low-Level Design (LLD)** is planning the *inside structure* of an application before writing code. It answers:
****
- Which **classes/objects** do we need?
- How are they **related** to each other?
- How does **data flow** between them?
- Where do our **DSA solutions** fit in?

### DSA vs LLD

| | DSA | LLD |
|---|---|---|
| **Solves** | One isolated problem | The whole app's structure |
| **Example** | "Find the shortest path" | "Which objects exist and how do they talk?" |
| **Tools** | Binary search, quicksort, Dijkstra, heaps | Classes, objects, relationships |

**Simple idea:** LLD builds the structure first, then DSA plugs into it.

---

## 2. The QuickRide Story (Uber/Ola-like app)

Two developers, two approaches.

### Anurag: DSA-First

- Roads and intersections become a **graph**.
- **Dijkstra's algorithm** finds the shortest route.
- A **min-heap** matches riders to the closest drivers.

**What he missed:**
- No classes (User, Rider, Location, Payment, Notification)
- No data security (e.g. hiding phone numbers)
- No plan for notifications or payments
- No plan for millions of users

### Maurya: LLD-First

1. **Find the entities:** User, Rider, Location, NotificationService, PaymentGateway
2. **Define relationships:** how User and Rider connect via Location, and how notifications and payments plug in
3. **Think non-functional:** data security and scalability
4. **Then add DSA:** put Dijkstra and the min-heap *inside* this structure

**Lesson:** Maurya's way gives a complete, safe, scalable app. Anurag's gives only an algorithm.

---

## 3. Three Goals of Good LLD

### Scalability
- Handles lots of users without slowing down
- Easy to grow (add servers or features with little effort)

### Maintainability
- New features **don't break** old ones
- Bugs are easy to find and fix

### Reusability
- Code is **loosely coupled** (plug-and-play modules)
- Example: one notification module can work in Zomato, Swiggy, and Amazon delivery

---

## 4. LLD vs HLD

**HLD (High-Level Design)** is about the *big-picture architecture*, not the code structure:

- **Tech stack:** languages and frameworks (e.g. Java Spring Boot)
- **Database:** SQL, NoSQL, or both
- **Servers and deployment:** autoscaling, load balancers (AWS/GCP)
- **Cost:** keeping cloud and server bills low

---

## 5. Quick Recap

| Concept | Analogy | Focus |
|---|---|---|
| **DSA** | Brain | Algorithms that solve specific tasks |
| **LLD** | Skeleton | Classes, objects, code organization, where algorithms fit |
| **HLD** | Whole building | Infrastructure, tech stack, databases, servers |

### Remember
1. Don't jump straight to algorithms. **Design the structure first.**
2. Good design = **scalable + maintainable + reusable**.
3. LLD is about **code structure**; HLD is about **system architecture**.