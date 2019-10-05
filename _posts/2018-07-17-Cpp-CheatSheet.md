---
layout: post
title: "C++ CheatSheet"
date: 2018-07-17
categories: cpp, programming
---

* Do not remove this line (it will not be displayed)
{:toc}

---

# constexpr specifier

# Difference between pre-increment and post-increment?
Reference: https://dev.to/somedood/the-difference-between-x-and-x-44dl

- pre-increment returns the value after incrementing.
- post-increment returns the value before incrementing.

# How does condition statement work with bit-wise operators?

https://stackoverflow.com/q/13054401/2302094

# Exception Handling

http://www.cplusplus.com/reference/exception/exception/


# vector operations

vec.data(): https://www.geeksforgeeks.org/vector-data-function-in-c-stl/


# left shift and right shift operators

- **Left Shift (<<) :** This takes two numbers. Example `a<<2`, here the left shif (<<) takes the first operand, a, and the second operand decides how many places to shift (here is 2 places). Example: if `a=1010` then `a<<1` will give `10100` similarly `a<<2` will give `101000`.
- **Right Shift (>>) :** This takes two numbers. Example `a>>2`, here the right shif (>>) takes the first operand, a, and the second operand decides how many places to shift (here is 2 places). Example: if `a=1010` then `a>>1` will give `101` similarly `a>>2` will give `10`.

- Example

```cpp=
#include<stdio.h>
#include<stdint.h>
int main()
{
        uint32_t a = 11, b = 23;

        printf("Decimal:\ta = %i, \t b=%i\n",a,b);
        printf("Hex: \t\ta = %x, \t b=%x\n\n",a,b);
        printf("Decimal:\ta<<1 = %d\n", a<<1);
        printf("Hex:\t\t a<<1 = %x\n\n", a<<1);
        printf("Hex:\t\t a<<1 = %x\n\n", a<<2);
        printf("Decimal:\tb<<1 = %d\n", b<<1);
        printf("Hex:\t\t b<<1 = %x\n\n", b<<1);
        printf("Decimal:\ta>>1 = %d\n", a>>1);
        printf("Hex:\t\t a>>1 = %x\n\n", a>>1);
        printf("Decimal:\tb>>1 = %d\n", b>>1);
        printf("Hex:\t\t b>>1 = %x\n", b>>1);

        return 0;
} 
```

**Output**

```=
Decimal:  a = 11,    b=23
Hex:    a = b,   b=17

Decimal:  a<<1 = 22
Hex:     a<<1 = 16

Decimal:  b<<1 = 46
Hex:     b<<1 = 2e

Decimal:  a>>1 = 5
Hex:     a>>1 = 5

Decimal:  b>>1 = 11
Hex:     b>>1 = b
```
Reference: [https://www.geeksforgeeks.org/left-shift-right-shift-operators-c-cpp/](https://www.geeksforgeeks.org/left-shift-right-shift-operators-c-cpp/)


# Concatenate hex numbers in C

```cpp=
uint32_t a = 0x01;
uint32_t b = 0x00;
uint32_t c = 0x20;
uint32_t d = 0xF1;

uint32_t result = (a<<24) | (b<<16)| (c<<8) | d;
```

The result will look like:

> 010020F1

Reference: [https://stackoverflow.com/a/16208594/2302094](https://stackoverflow.com/a/16208594/2302094)


# Shift bits??

**Understand this**
```cpp=
uint32_t ohMask = 0x200;
uint32_t SCAADCChannel = 0x1b;
uint32_t data = 1255;

uint32_t outData = (ohMask<<24)|(SCAADCChannel<<16) | data;

printf("output = %x \n",outData);

printf("Rearrange = %x \n", (((outData&0xff000000)>>24) + 
                            ((outData>>8)&0x0000ff00) + 
                            ((outData&0x0000ff00)<<8) + 
                            ((outData&0x000000ff)<<24)) 
                            );
```

# Check if a particular bit is set or not

```cpp=
uint32_t bitCheck(uint32_t ohMask, int bit)
{
  if ( (ohMask >> bit) & 1 ){
    return 1;
  } else {
    return 0;
  }
}
```

or 

```cpp=
uint32_t bitCheck(uint32_t word, int bit)
{
  return (word >> bit) & 0x1;
}
```

or

```cpp=
uint32_t bitCheck(uint32_t word, int bit)
{
  if (bit > 31)
    throw std::invalid_argument("Invalid request to shift 32-bit word by more than 31 bits");
  return (word >> bit) & 0x1;
}
```
Reference: [https://stackoverflow.com/a/44177045/2302094](https://stackoverflow.com/a/44177045/2302094)

# Iterate over `enums`

```cpp=
struct ADCChannel {  //ADCChannel settings
        enum EADCChannel { //ADCChannel settings
            AVCCN_V1P0     = 27, ///< FPGA MGT 1.0V
            AVTTN_V1P2     = 30, ///< FPGA MGT 1.2V
            INT_V1P0       = 17, ///< 1.0V FPGA core voltage
            ADC_V1P8       = 14, ///< 1.8V used by the PROM
            ADC_V1P5       = 24, ///< 1.5V used by the GBTXs and SCA
            ADC_2V5        = 15, ///< 2.5V used by FPGA I/O and VTRXs/VTTXs
            SCA_TEMP       = 31, ///< Internal SCA temperature sensor
            
        } ADCChannel;
};  // struct ADCChannel
for (ADCChannel::EADCChannel channelName = ADCChannel::EADCChannel::ADC_CH00; channelName<=ADCChannel::EADCChannel::ADC_CH31; channelName=ADCChannel::EADCChannel(channelName+1)) {
    cout << channelName << endl;
}
```


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

