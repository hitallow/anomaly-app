#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define KB 1024

int main(int argc, char *argv[])
{

    if (argc < 5 || argc > 5)
    {
        printf("No argument passed through command line.\n");
        printf("usage is: mem_size mode rate alocation_time");
        return 1;
    }
    unsigned long int mem_size = atoi(argv[1]);
    char *mode = argv[2];
    int stage = atoi(argv[3]);

    void *based = malloc(mem_size);

    if (!based)
    {
        printf("Error in allocation.\n");
        return 1;
    }

    if (strcmp(mode, "instant") == 0)
    {
        printf("alocando de maneira automatica\n");
        memset((char *)based, '$', mem_size);
    }
    else
    {
        int initialized = 0;
        int sleep_miliseconds = strcmp(mode, "fast") == 0 ? 500 : 1000;
        printf("alocando memoria gradualmente\n");
        while (initialized < atoi(argv[1]))
        {
            memset((char *)based + initialized, '$', stage);
            initialized += stage;
            usleep(sleep_miliseconds);
        }
    }

    // espera antes de finalizar rotina
    sleep(atoi(argv[4]));
    free(based);

    // return 0;
}