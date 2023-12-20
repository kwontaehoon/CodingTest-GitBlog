---
layout : post
title : lombok
categories : Javascript
date : 2022-01-30
---
## lombok
* 반복되는 메소드를 Annotation을 사용해서 자동으로 작성해주는 라이브러리

>@Getter / @Setter
```java

@Getter
@Setter
public class DTO {
    private Integer id;
    private String name;

    /* 이 부분을 @Getter를 선언해줌으로써 생략이 가능하다.*/
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    /* */
}

```

>@ToString
```java

@toString
public class Test {
    private Integer id;
    private String name;

    public String toString() {
        return "id" + id + "name" + name;
    }

    public static void main(String[] args) {
        Test test = new Test(1, "test");
        System.out.println("test: " + test); 
        // toString 메소드가 없으면 test 객체값을 알 수 없다.
    }
}
```
* toString을 자동 생성해주는 annotaion
* toString을 사용해서 객체값을 볼 수 있는데 @ToString을 사용하여 toString 메소드를 생략할 수 있다.

>@EqualsAndHashCode
```java

@EqualsAndHashCode
public class Test {
    private Integer id;
    private String name;

    public static void main(String[] args) {
        Test test1 = new Test(1, "test");
        Test test2 = new Test(1, "test");
        test1.hashCode() == test2.hashCode(); // true
        test1.equals(test2); // false
    }
}
```
* equals와 hashCode 자동 생성해주는 annotation
* equals는 동등성, 같은 객체인지 판단한다.
* hashCode는 동일성, 내부에 같은 값을 가지는지 판단한다.


>@RequiredArgsConstructor