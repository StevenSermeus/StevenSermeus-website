---
layout: "@layouts/BlogPost.astro"
title: "Never nester"
author: "Steven Sermeus"
date: "2023-04-07"
tags: ["Code", "Aesthetic"]
description: "Et si l'indentation c'était mauvais ?"
type: "post"
image: { src: "blog/nester.jpeg", alt: "Nested code" }
robots: false
lecture: 4
---

# Nerver nesting

On a tous connu une fonction qui devient illisible à cause de trop d'un niveau trop haut d'indentation. Quelle est la limite ? Quand est-ce qu'on peut dire qu'une fonction est trop complexe ? Comment on peut l'améliorer ?

## La limite

La limite est très subjective mais personnellement je trouve que 3 niveaux d'indentation sont la limite à ne pas dépasser. Je ne suis pas le seul à penser ça, Linus Torvalds, le créateur de Linux, a dit dans le guide de style de code de Linux:

> The answer to that is that if you need more than 3 levels of indentation, you’re screwed anyway, and should fix your program.[^1]

## Un exemple

Voici un exemple de fonction qui est trop complexe à cause de trop d'indentation:

```js
function doStuff(value) {
  if (value) {
    if (value < 10) {
      if (value > 5) {
        return value * 2;
      } else {
        for (let i = 0; i < value; i++) {
          value += i * 2;
        }
      }
    } else {
      return 100;
    }
  } else {
    return null;
  }
}
```

Une fonction simple comme celle-ci devrait être facile à lire et comprendre. Mais avec 3 niveaux d'indentation, c'est difficile de suivre le code. Après avoir lu le code, on peut dire que la fonction est correcte mais il est plus difficile de comprendre ce qu'elle fait.

## Comment l'améliorer ?

Il y a 3 techniques simples pour améliorer une fonction trop complexe:

1. Retrun early
2. Inverser la condition
3. Extraire dans une fonction

Ces techniques sont très utiles pour améliorer la lisibilité d'une fonction. Je vais vous montrer comment on peut les utiliser pour améliorer la fonction ci-dessus.

### Retrun early

Le premier technique est de retourner le résultat le plus tôt possible. Cela permet de réduire le niveau d'indentation. Mais pour tirer le meilleur parti de cette technique, il faut parfois inverser la condition. Par exemple, on peut la cumuler avec la seconde technique l'inversion de condition `if (value)` pour retourner `null` le plus tôt possible:

```js
function doStuff(value) {
  if (!value) {
    return null;
  }

  if (value >= 10) {
    return 100;
  }

  if (value <= 5) {
    for (let i = 0; i < value; i++) {
      value += i * 2;
    }
  }

  return value * 2;
}
```

Maintenant, la fonction est beaucoup plus facile à lire. On peut voir que la fonction retourne `null` si `value` est `null` ou `undefined`. Si `value` est plus grande ou égale à 10, la fonction retourne 100. Si `value` est plus petite ou égale à 5, la fonction exécute une boucle. Sinon, la fonction retourne `value \* 2`.

### Extraire dans une fonction

La deuxième technique est d'extraire une partie du code dans une fonction. Par exemple, on peut extraire la partie de la boucle dans une fonction:

```js
function doStuff(value) {
  if (!value) {
    return null;
  }

  if (value >= 10) {
    return 100;
  }

  if (value <= 5) {
    value = doStuffInLoop(value);
  }

  return value * 2;
}

function doStuffInLoop(value) {
  for (let i = 0; i < value; i++) {
    value += i * 2;
  }

  return value;
}
```

Avec un nom de fonction approprié, on peut comprendre ce que `doStuffInLoop` fait. Maintenant, la fonction `doStuff` est plus simple à lire et comprendre car on ne doit pas se soucier de la boucle le nom de la fonction nous dit ce qu'elle fait.

## Conclusion

Avec ces 3 nouvelles techniques dans votre boîte à outils, vous pouvez améliorer la lisibilité de vos fonctions. Il est important de garder les fonctions simples et faciles à lire. Cela permet de réduire le temps de maintenance et de débugage.

## Remerciments

Après avoir vu la vidéo de CodeAesthetic nommé "Why You Shouldn't Nest Your Code"[^2], j'ai remarqué des similarité dans ma façon de codé et celle des never nester. C'est durant cette vidéo que l'idée d'en faire un post m'est venue.

[^1]: [https://www.kernel.org/doc/html/v4.10/process/coding-style.html#indentation](https://www.kernel.org/doc/html/v4.10/process/coding-style.html#indentation)
[^2]: [https://www.youtube.com/watch?v=CFRhGnuXG-4&ab_channel=CodeAesthetic](https://www.youtube.com/watch?v=CFRhGnuXG-4&ab_channel=CodeAesthetic)
