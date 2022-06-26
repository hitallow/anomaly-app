#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define KB 1024

int main(int argc, char *argv[])
{
    unsigned long int mem_size = KB * KB * KB;
    // alocano 1 gb de memoria

    printf("MEMSIZE: %lu\n", mem_size);
    printf("SIZE OF: void*:%lu\n", sizeof(void*));
    printf("SIZE OF: char*:%lu\n", sizeof(char*));
    void *based = malloc(mem_size);  //mem_size = 1024^3
    if (based) {
        printf("Allocated %zu Bytes from %p to %p\n", mem_size, based, based + mem_size);
    } else {
        printf("Error in allocation.\n");
        return 1;
    }
    int initialized = 0;
    int stage = 65536;
    // memset((char *)based, '$', mem_size); // alocando de maneira automatica
    while (initialized < mem_size) {  //initialize it in batches
        //printf("%6d %p-%p\n", n, based+initialized, based+initialized+stage);
        memset((char *)based + initialized, '$', stage);
        initialized += stage;
        // passo a passo
        usleep(1000);
    }
    // espera antes de finalizar rotina
    sleep(5);
    free(based);

    return 0;
}