# Preguntas
***
# 1. ¿Por qué evitar los callbacks en las llamadas asíncronas?
***
Principalmente tratariamos de evitar usar los callbacks para no llegar a un callback hell, el cual no 
nos ayuda al momento de programar, nos causaria mas problemas y demoras; en este caso podriamo optar 
por usar promesas o async/await. 

***

# 2.¿Qué es una promesa?
***
Las promesas se usan para solucionar problemas de asincronia de una forma mas facil,elegante y practica;
cada promesa estará en un estado concreto: pendiente, aceptada o rechazada, es por eso que va acompañada 
de callbacks para indicarle a la promesa que hacer si todo va bien o tiene algun fallo.

***
# 3.¿Qué es el callback hell?
***
El callback hell, son callbacks anidados que provocan que el codigo se vuelba dificil de entender o leer,
debido a malas practicas de programacion y falta de planeacion en su codigo.
