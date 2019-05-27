Moduly funkcjonalne
===================

Chodzi o to, zeby byly moduly gromadzace pojedyncza funkcjonalnosc, a nie
rozrzucanie jej dookola po kodzie. Zatem tak jakby pluginy. Trzeba wiec zrobic
jakies API dla tych pluginow.

Co musza robic?
===============

Rysowac i obslugiwac UI
-----------------------

Odbierac input
--------------

Nie tylko ze swojego UI, ale tez ogolna klawiatura i myszka.

Zapewniac rysowanie czegos
--------------------------

Zaleznosci pomiedzy pluginami
=============================

Zasada: Nie da sie uniwersalnie. Czasem trzeba bedzie cos recznie dostroic.

Mechanizmy:

- Jakies publikowane komunikaty, pod ktore mozna sie podpiac aspektowo.
- Odczytywanie stanu (za pomoca jakiegos API - a to API instalowane dynamicznie
  przez te inne moduly?)
- Wysylanie polecen innym modulom za pomoca takiegoz API?
- Wpinanie sie w tile-extra za pomoca namespace'owanych kluczy
