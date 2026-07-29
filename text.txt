part one

student menagement :

student = {
  id: string,
  firstName: string,
  lastName: string,
  className: string,
  labSessionsIds: string[]
}

what i recive from the client => {
  "firstName": "Moshe",
  "lastName": "Levi",
  "className": "12A"
}

wich type of db and why ?

so i know exactly what i receive ( like which champ)
but i know also i need that one of champ is an array of string
so which db i need use relationny or not relationny
i think relationny is more adapted, but only supabase is relationny
and give me the possisbility of array

laboratory meeting menagement :

students can join a meeting laboratory but is have a constraint, the max size of the meeting
not more, so for every student who's join => available place - 1

no endpoint in the exercie for create lab session

lab session = {
  id: string,
  topic: string,
  dateTime: string, //time of the lab session
  capacity: number
}

or something like that 

{
  "id": "...",
  "topic": "...",
  "dateTime": "...",
  "capacity": 20,
  "registeredCount": 12,
  "remainingSpots": 8
}

i have the choice if i write "registeredCount": 12, "remainingSpots": 8
in the databse or i only calulate that and return it when someone request to that

i need to think about how i can calculate that and which db if i save that in variable
or write it and every time someone want to join check in the second databse
for check if it's possible to join or not

dependencie:
node.js
server: express
database: two database, certainly one relationny and one non sql
docker compose : if i use db localy
docker file : i don't remember what that and how to use it and for what in my exercice
test: in part two not now
git: different branch, idk when exactly i need to switch branch and for what


je dois reflechir a la structure des fichier et dossier selon les bonnes convention et aussi apprendre ca psk je n'ai jamais compris
je dois aussi reflechir a que faire pour lorsque mon prof va clone mon project comment il peut l'executer de la maniere la plus simple possible
je crois que c'est lie au docker file mais je ne connais pas trop
je dois apprendre a ecrire un readme pas la syntax , mais plus la forme et la structure et qu'est ce qu'on attend de moi dans mon readme
