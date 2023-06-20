
# Road Map To Learn The Basics Of Computer Graphics Without Tutorial !!!
  
##  Introduction :
- Why is this ?
  -
When you start learning any thing you "Must" start with the The theoretical part then move to do the the practical part  , But , Some times you can learn to do the thing without or with the minimum theoretical part , and this is what this paper about

- For Who ?
  -
  Form 2 main types of people :
      1) People Who want to enter game development or any filed that require dealing with graphics .
      2) People Who want to develop thier problem solving skills and thier logic, and apply their knowledge of math to the real world

- What Make this Road Map unique ?
   -
   You Will not find interesting tricks , you will not know all the basics of 2D and 3D programming , actually I recemend for you to start another tutorial after this road map .
  
  So , What will you get ?
  this road map designed to guide you to reinvent the wheel by giving new Problems and projects of gradual difficulty that you learn from and develop your logic and problem solving skills and a little bit your knowledge and math skills

- What level of math is required to learn from this roadmap ?
  -
  You are not required to be good at solving academic math exercises, but what you need is an **intuitive** understanding of mathematical concepts, and I will try to put some resources for that

---

## Chapter 1 : Drawing Point
this chapter will be on the **terminal** so you need only to know programming basics.
and the examples will be on **C++** but you can use any language to achive the same thing

- Porblem 1 : Building **Point** class / struct
	-
we will name out Point class **stPoint**  to avoid confusion and **st** will be the prefix of all out **structs** (If you are using languages like **C#** do not use **struct**  because it is **Value Type**, and you can not use **pointers** to get its address, use **class** instead)

- The **stPoint** must contain :
**Members :**  **X** and **Y** coordinates , let it be integers.
**Functions :** **draw** ,**move** ,**rotate**.

**X** is the horizontally position of the point on the screen (the distence between the left edge of the screen and the point)
**Y** is the vertical position of the point on the screen (the distence between the up edge of the screen and the point)

**Drawing** the point will be on the terminal and how you do this will depend on you 
**move** function must have 2 parameter **dx** and **dy** and  If you hate math, don't worry, this just mean that you will change the position of the point by **dx** on **X axis** (horizontally) and by **dy** on **Y axis** (verticaly)
**The Rotation** is the hardest part on this chapter , the **rotate** function get 2 parameter, the angle of the rotation and the center of rotation point (the point around which it rotates)

To implement the function **void rotate(float angle,stPoint center)** you must have good intuition of Trigonometry and [this](https://www.youtube.com/watch?v=Xh6LphlL86w&list=PL8pYI62gCNsWUhiXetyAEFeJNW4ChNCfH&ab_channel=anaHr) is good resource for that.


 - Try to solve this by your self than see the solution
 
 - The Solution
	 -
 
 ### Comming Soon
