---
layout: post
title: "C++ CheatSheet"
date: 2018-07-17
tags: cpp
---

* Do not remove this line (it will not be displayed)
{:toc}

# loop over arrays

## Treditional method

```c++
string texts[] = {"Apple", "Banana", "Orange"};

for( unsigned int a = 0; a < sizeof(texts)/sizeof(texts[0]); a = a + 1 )
    cout << "value of text: " << texts[a] << endl;
```

## Modern C++11 way (type-1)

```c++
string texts[] = {"Apple", "Banana", "Orange"};

for(const string &text : texts)
    cout << "value of text: " << text << endl;
```

## Modern C++11 way (type-2)

- use `std::array` if you want an array whose size is known at compile-time; or
- use `std::vector` if its size depends on runtime

```c++
#include <iostream>
#include <array>


int main() {
    std::array<std::string, 3> texts = {"Apple", "Banana", "Orange"};
    // ^ An array of 3 elements with the type std::string

    for(const auto& text : texts) {   // Range-for!
        std::cout << text << std::endl;
    }
}
```

## Modern C++11 way (using member function `at`)

```c++
// array::at
#include <iostream>
#include <array>

int main ()
{
  std::array<int,10> myarray;

  // assign some values:
  for (int i=0; i<10; i++) myarray.at(i) = i+1;

  // print content:
  std::cout << "myarray contains:";
  for (int i=0; i<10; i++)
    std::cout << ' ' << myarray.at(i);
  
  std::cout << '\n';
  return 0;
}
```

Reference: [http://www.cplusplus.com/reference/array/array/at/](http://www.cplusplus.com/reference/array/array/at/)

# Difference between array member `at` and `operator[]`

- The `operator[]` does not check against the bound while the member `at` checks automatically weather the `n` is within bound or not and throws exception if its not in bound.

- Reference: [http://www.cplusplus.com/reference/array/array/at/](http://www.cplusplus.com/reference/array/array/at/)

