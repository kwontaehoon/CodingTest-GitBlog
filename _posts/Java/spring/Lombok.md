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

>@EqualsAndHashCode

>@RequiredArgsConstructor