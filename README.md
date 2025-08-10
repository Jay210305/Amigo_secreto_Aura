# Amigo_secreto_Aura
Challenge del curso Principiante en Programación G9 - ONE

# 🎁 Amigo Secreto

Una pequeña aplicación web para organizar el juego del **Amigo Secreto** de forma rápida y sencilla.  
Desarrollada con **HTML, CSS y JavaScript puro (vanilla)**, sin librerías externas.

---

## 📌 Descripción

La aplicación permite:
- **Agregar** una lista de participantes.
- **Evitar nombres repetidos**.
- **Sortear** automáticamente quién es el amigo secreto de quién.
- Manejar casos con **número impar de participantes**, de forma que nadie quede sin regalo (una persona puede dar a dos).

Todo desde el navegador, sin necesidad de instalar nada.

---

## 🚀 Cómo usar

1. **Abrir el proyecto** en cualquier navegador web (Chrome, Firefox, Edge, etc.).
2. **Escribir el nombre** de un participante en el campo de texto.
3. Pulsar el botón **"Agregar"** para añadirlo a la lista.
4. Repetir el paso anterior hasta tener a todos los participantes.
5. Pulsar el botón **"Sortea tu amigo secreto"**.
6. Se mostrará una lista con los resultados indicando quién regala a quién.

---

## 📂 Estructura del proyecto

amigo-secreto/
│
├── index.html # Estructura principal de la aplicación
├── styles.css # Estilos y diseño visual
├── script.js # Lógica y funcionamiento
└── README.md # Documentación


---

## 💡 Ejemplo de uso

Lista de participantes:
Ana
Luis
Pedro
Sofía


Resultado del sorteo:
Ana → Luis
Luis → Sofía
Pedro → Ana
Sofía → Pedro

*(En caso de número impar, el último participante puede regalar a dos personas.)*

---
