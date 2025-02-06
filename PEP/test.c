#include <stdio.h>

int main(void) {
    char array[5] = {};

    for (int i = 0; i < 5; i++) {
        scanf("%c", &array[i]);
    }

    printf("%c, %c, %c, %c, %c", array[0], array[1], array[2], array[3], array[4]);
}

